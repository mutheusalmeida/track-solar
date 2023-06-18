import { Text, TransparentBtn } from '@/styles'
import { useTypedSelector } from '@/hooks/store'
import type { GenerationRequestType } from 'components'
import { selectData } from '@/services/generation-slice'
import { useGetGenerationMutation } from '@/services/api'
import { useEffect, useMemo } from 'react'
import { useTheme } from 'styled-components/native'
import { SettingsIcon } from '@/assets/settings-icon'
import { PercentageIcon } from '@/assets/percentage-icon'
import { TreeIcon } from '@/assets/tree-icon'
import { GlobeIcon } from '@/assets/globe-icon'

import * as S from './style'
import { formatTime } from '@/utils'

export const Home = () => {
  const data = useTypedSelector<GenerationRequestType>(selectData)
  const [generation] = useGetGenerationMutation()
  const theme = useTheme()

  const today = useMemo(
    () => ({
      expected: 113.325,
      generation: [
        {
          id: 1,
          label: formatTime('08:00:00'),
          value: 0.4,
        },
        {
          id: 2,
          label: formatTime('11:00:00'),
          value: 12.5,
        },
        {
          id: 3,
          label: formatTime('14:00:00'),
          value: 12,
        },
        {
          id: 4,
          label: formatTime('17:00:00'),
          value: 2.2,
        },
      ],
    }),
    []
  )

  let content = (
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
              98.646
            </Text>

            <S.Unit fontSize={theme.fontSize.md20}>kWh</S.Unit>
          </S.TotalWrapper>
        </S.Section>

        <S.BenefitsSection>
          <S.BenefitsItem>
            <PercentageIcon width={66} percentage={48} />

            <Text fontSize={theme.fontSize.xxs12} lineHeight={16}>
              48%
            </Text>

            <Text
              fontSize={theme.fontSize.xxxs10}
              color={theme.colors.cyan100}
              lineHeight={13}
            >
              Capac. Usada
            </Text>
          </S.BenefitsItem>

          <S.BenefitsItem>
            <TreeIcon />

            <Text fontSize={theme.fontSize.xxs12} lineHeight={16}>
              49
            </Text>

            <Text
              fontSize={theme.fontSize.xxxs10}
              color={theme.colors.cyan100}
              lineHeight={13}
            >
              Árvores Salvas
            </Text>
          </S.BenefitsItem>

          <S.BenefitsItem>
            <GlobeIcon />

            <Text fontSize={theme.fontSize.xxs12} lineHeight={16}>
              12.271 kg
            </Text>

            <Text
              fontSize={theme.fontSize.xxxs10}
              color={theme.colors.cyan100}
              lineHeight={13}
            >
              C02 Evitado
            </Text>
          </S.BenefitsItem>
        </S.BenefitsSection>

        <S.Section>
          <Text lineHeight={26} fontSize={theme.fontSize.md20}>
            Hoje
          </Text>

          <S.HoursContainer>
            {today.generation.map((hour) => (
              <S.HoursItem key={hour.id}>
                <S.VolumeBar>
                  <S.VolumeFilled
                    filled={
                      (hour.value /
                        (today.expected / today.generation.length)) *
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
                  {hour.label}
                </Text>
              </S.HoursItem>
            ))}
          </S.HoursContainer>
        </S.Section>
      </S.Content>
    </>
  )

  useEffect(() => {
    if (!data) {
      const getData = async () => {
        try {
          await generation({ dataType: 'yearly' }).unwrap()
        } catch (err) {
          console.log(err)
        }
      }

      getData()
    }
  }, [])

  if (data) {
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
            <Text>Total</Text>

            <Text
              fontFamily={theme.fontFamily.DMSerifTextRegular}
              fontSize={theme.fontSize.xl48}
            >
              Total
            </Text>
          </S.Section>
        </S.Content>
      </>
    )
  }

  return <S.Container>{content}</S.Container>
}
