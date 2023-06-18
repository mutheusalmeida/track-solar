import { Text, TransparentBtn } from '@/styles'
import { useTypedSelector } from '@/hooks/store'
import type { GenerationRequestType } from 'components'
import { selectData } from '@/services/generation-slice'
import { useGetGenerationMutation } from '@/services/api'
import { useEffect } from 'react'
import { useTheme } from 'styled-components/native'
import { SettingsIcon } from '@/assets/settings-icon'
import { PercentageIcon } from '@/assets/percentage-icon'
import { TreeIcon } from '@/assets/tree-icon'
import { GlobeIcon } from '@/assets/globe-icon'

import * as S from './style'

export const Home = () => {
  const data = useTypedSelector<GenerationRequestType>(selectData)
  const [generation] = useGetGenerationMutation()
  const theme = useTheme()

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
        <S.TotalSection>
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
        </S.TotalSection>

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
          <S.TotalSection>
            <Text>Total</Text>

            <Text
              fontFamily={theme.fontFamily.DMSerifTextRegular}
              fontSize={theme.fontSize.xl48}
            >
              Total
            </Text>
          </S.TotalSection>
        </S.Content>
      </>
    )
  }

  return <S.Container>{content}</S.Container>
}
