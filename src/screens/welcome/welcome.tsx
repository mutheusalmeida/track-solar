import { Text } from '@/styles'
import { Button } from '@/components/button'
import { useTheme } from 'styled-components/native'
import { Dimensions, View } from 'react-native'
import ReanimatedCarousel from 'react-native-reanimated-carousel'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { enableLegacyWebImplementation } from 'react-native-gesture-handler'
import { useMemo, useRef, useState } from 'react'

enableLegacyWebImplementation(true)

import * as S from './style'

const Carousel = () => {
  const { width } = Dimensions.get('window')
  const theme = useTheme()
  const [activeSlide, setActiveSlide] = useState(1)
  const carouselRef = useRef()

  const data = useMemo(
    () => [
      {
        id: 1,
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
        id: 2,
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
    ],
    []
  )

  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1, gap: 44 }}>
        <ReanimatedCarousel
          loop={false}
          width={width}
          height={252}
          data={data}
          scrollAnimationDuration={1000}
          pagingEnabled
          ref={carouselRef}
          onProgressChange={(_, absoluteProgress) => {
            setActiveSlide(absoluteProgress)
          }}
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

        <S.PaginationContainer
          style={{
            paddingHorizontal: 32,
            gap: 6,
            height: 6,
            flexDirection: 'row',
          }}
        >
          {data.map(({ id }) => (
            <S.PaginationItem
              style={{
                height: 6,
                minWidth: 6,
                width: Number.isInteger(activeSlide)
                  ? Math.floor(activeSlide) + 1 === id
                    ? 18
                    : 6
                  : Math.floor(activeSlide) + 1 === id
                  ? 18 - activeSlide * 18
                  : activeSlide * 18,
                backgroundColor: Number.isInteger(activeSlide)
                  ? Math.floor(activeSlide) + 1 === id
                    ? theme.colors.white
                    : theme.colors.cyan100
                  : theme.colors.white,
                borderRadius: 6,
              }}
              key={id}
            />
          ))}
        </S.PaginationContainer>
      </View>
    </GestureHandlerRootView>
  )
}

export const Welcome = () => {
  const next = () => {}

  return (
    <S.Container>
      <S.Content>
        <Carousel />

        <S.ButtonWrapper>
          <Button>Avançar</Button>
        </S.ButtonWrapper>
      </S.Content>
    </S.Container>
  )
}
