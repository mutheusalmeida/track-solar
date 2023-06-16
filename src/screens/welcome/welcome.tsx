import { Text } from '@/styles'
import { Button } from '@/components/button'
import { useTheme } from 'styled-components'

import * as S from './style'

export const Welcome = () => {
  const theme = useTheme()

  return (
    <S.Container>
      <S.Content>
        <S.Slider>
          <S.Title
            fontFamily={theme.fontFamily.DMSerifTextRegular}
            fontSize={theme.fontSize.lg36}
            lineHeight={44}
          >
            Quanto a sua usina gerou hoje?
          </S.Title>

          <Text
            fontFamily={theme.fontFamily.DMSansRegular}
            fontSize={theme.fontSize.md20}
            color={theme.colors.cyan100}
          >
            Saiba qual a geração de energia da sua usina solar ao longo do tempo
            e descubra os beneficios gerados ao planeta.
          </Text>
        </S.Slider>

        <Button>Avançar</Button>
      </S.Content>
    </S.Container>
  )
}
