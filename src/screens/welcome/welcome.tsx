import { Text } from '@/styles'
import { Button } from '@/components/button'
import { useTheme } from 'styled-components/native'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { enableLegacyWebImplementation } from 'react-native-gesture-handler'

enableLegacyWebImplementation(true)

import * as S from './style'

const Slider = () => {
  const { width } = Dimensions.get('window')
  const theme = useTheme()

  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <Carousel
          loop={false}
          width={width}
          height={300}
          data={[
            {
              title: (
                <S.Title
                  fontFamily={theme.fontFamily.DMSerifTextRegular}
                  fontSize={theme.fontSize.lg36}
                  lineHeight={44}
                  style={{ width: 286 }}
                >
                  Quanto a sua usina gerou hoje?
                </S.Title>
              ),
              desc: 'Saiba qual a geração de energia da sua usina solar ao longo do tempo e descubra os beneficios gerados ao planeta.',
            },
            {
              title: (
                <S.Title
                  fontFamily={theme.fontFamily.DMSerifTextRegular}
                  fontSize={theme.fontSize.lg36}
                  lineHeight={44}
                  style={{ width: 274 }}
                >
                  Como a{' '}
                  <Text
                    fontFamily={theme.fontFamily.DMSerifTextRegular}
                    fontSize={theme.fontSize.lg36}
                    lineHeight={44}
                    color={theme.colors.yellow}
                  >
                    track solar
                  </Text>{' '}
                  funciona?
                </S.Title>
              ),
              desc: 'Copie e cole o sua credencial no campo fornecido e obtenha os dados mais relevantes na palma da sua mão.',
            },
          ]}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => (
            <S.ContentWrapper>
              {item.title}

              <Text
                fontFamily={theme.fontFamily.DMSansRegular}
                fontSize={theme.fontSize.md20}
                color={theme.colors.cyan100}
              >
                {item.desc}
              </Text>
            </S.ContentWrapper>
          )}
        />
      </View>
    </GestureHandlerRootView>
  )
}

export const Welcome = () => {
  return (
    <S.Container>
      <S.Content>
        <Slider />

        <S.ButtonWrapper>
          <Button>Avançar</Button>
        </S.ButtonWrapper>
      </S.Content>
    </S.Container>
  )
}
