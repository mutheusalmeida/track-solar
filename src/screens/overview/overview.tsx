import { Text, TransparentBtn } from '@/styles'
import { useTypedSelector } from '@/hooks/store'
import { selectData } from '@/services/generation-slice'
import { useEffect } from 'react'
import { useTheme } from 'styled-components/native'
import { SettingsIcon } from '@/assets/settings-icon'
import { PercentageIcon } from '@/assets/percentage-icon'
import { TreeIcon } from '@/assets/tree-icon'
import { GlobeIcon } from '@/assets/globe-icon'
import { formatNumber, formatTime } from '@/utils'
import { useGetHourlyQuery, useLazyGetYearlyQuery } from '@/services/api'

import * as S from './style'

export const Overview = () => {
  const data = useTypedSelector(selectData)
  const [getYearly] = useLazyGetYearlyQuery()
  useGetHourlyQuery()
  const theme = useTheme()

  const benefitsLabel = {
    percentage: 'Capac. Usada',
    trees: 'Árvores Salvas',
    co2: 'C02 Evitado',
  }

  const benefitsIcons = {
    percentage: (value: number) => (
      <PercentageIcon width={66} percentage={value} />
    ),
    trees: (_value: number) => <TreeIcon />,
    co2: (_value: number) => <GlobeIcon />,
  }

  const benefitsUnit = {
    percentage: '%',
    co2: ' kg',
  }

  let content = (
    <S.Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </S.Container>
  )

  useEffect(() => {
    const getData = async () => {
      try {
        await getYearly().unwrap()
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [])

  if (data && data.general && data.today) {
    const todayLabels = ['08:00:00', '11:00:00', '14:00:00', '17:00:00']

    // get today data
    const todayData = {
      expected: data.today.expected[0],
      generation: data.today.generation
        .map((item, index) => ({
          label: data.today.x_labels[index],
          value: item,
        }))
        .filter((item) => todayLabels.includes(item.label)), // filter getting only items from todayLabels
    }

    // turn object into an array
    let benefits = Object.entries(data.general.totals).map(([key, value]) => ({
      key,
      value,
    }))

    // remove unwanted key
    benefits = benefits.filter((benefit) => benefit.key !== 'kwh')

    // create benefits array data
    const benefitsData = benefits.map((benefit) => ({
      ...benefit,
      value: benefitsUnit[benefit.key as keyof typeof benefitsUnit]
        ? formatNumber(Math.floor(benefit.value)) +
          benefitsUnit[benefit.key as keyof typeof benefitsUnit]
        : Math.floor(benefit.value),
      label: benefitsLabel[benefit.key as keyof typeof benefitsLabel],
      icon: benefitsIcons[benefit.key as keyof typeof benefitsIcons](
        benefit.value
      ),
    }))

    content = (
      <>
        <S.Header>
          <S.User>
            <Text
              fontFamily={theme.fontFamily.DMSerifTextRegular}
              fontSize={theme.fontSize.xs14}
              color={theme.colors.cyan100}
              lineHeight={21}
            >
              Bem vindo de volta,
            </Text>

            <Text
              fontFamily={theme.fontFamily.DMSerifTextRegular}
              fontSize={theme.fontSize.md20}
              lineHeight={30}
            >
              Yellot
            </Text>
          </S.User>

          <TransparentBtn>
            <SettingsIcon />
          </TransparentBtn>
        </S.Header>

        <S.Content>
          <S.Section>
            <Text lineHeight={26} fontSize={theme.fontSize.md20}>
              Total
            </Text>

            <S.TotalWrapper>
              <Text
                fontFamily={theme.fontFamily.DMSerifTextRegular}
                fontSize={theme.fontSize.xl48}
                color={theme.colors.yellow}
                lineHeight={47}
              >
                {formatNumber(data.general.totals.kwh)}
              </Text>

              <S.Unit fontSize={theme.fontSize.sm16} lineHeight={21}>
                kWh
              </S.Unit>
            </S.TotalWrapper>
          </S.Section>

          <S.BenefitsSection>
            {benefitsData.map((benefit) => (
              <S.BenefitsItem key={benefit.key}>
                {benefit.icon}

                <Text fontSize={theme.fontSize.xxs12} lineHeight={16}>
                  {benefit.value}
                </Text>

                <Text
                  fontSize={theme.fontSize.xxxs10}
                  color={theme.colors.cyan100}
                  lineHeight={13}
                >
                  {benefit.label}
                </Text>
              </S.BenefitsItem>
            ))}
          </S.BenefitsSection>

          <S.Section>
            <Text lineHeight={26} fontSize={theme.fontSize.md20}>
              Hoje
            </Text>

            <S.HoursContainer>
              {todayData.generation.map((hour) => (
                <S.HoursItem key={hour.label}>
                  <S.VolumeBar>
                    <S.VolumeFilled
                      filled={
                        (hour.value /
                          (todayData.expected / todayData.generation.length)) *
                        100
                      }
                    >
                      <Text
                        fontSize={theme.fontSize.xxxs10}
                        fontFamily={theme.fontFamily.DMSansMedium}
                        color={theme.colors.cyan300}
                        lineHeight={13}
                      >
                        {hour.value}kWh
                      </Text>
                    </S.VolumeFilled>
                  </S.VolumeBar>

                  <Text fontSize={theme.fontSize.xxxs10} lineHeight={13}>
                    {formatTime(hour.label)}
                  </Text>
                </S.HoursItem>
              ))}
            </S.HoursContainer>
          </S.Section>
        </S.Content>
      </>
    )
  }

  return <S.Container>{content}</S.Container>
}
