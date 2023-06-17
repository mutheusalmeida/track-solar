import { SecondaryBtn, Text } from '@/styles'
import { Button } from '@/components/button'
import { useRef, useState } from 'react'
import { theme } from '@/resources/theme'
import { Carousel } from '@/components/carousel'
import type { CarouselActions } from 'components'

import * as S from './style'

export const Welcome = () => {
  const carouselActions = useRef<CarouselActions>()
  const [current, setCurrent] = useState(0)

  const getCurrentIndex = (current: number) => {
    setCurrent(current)
  }

  const isLastItem = current === carouselActions.current?.getLastIndex()

  return (
    <S.Container>
      {!isLastItem ? (
        <SecondaryBtn>
          <Text
            fontSize={theme.fontSize.md20}
            fontFamily={theme.fontFamily.DMSansRegular}
            style={{
              textDecorationLine: 'underline',
              alignSelf: 'flex-end',
              paddingHorizontal: 32,
            }}
          >
            Pular
          </Text>
        </SecondaryBtn>
      ) : null}

      <S.Content>
        <Carousel getCurrentIndex={getCurrentIndex} ref={carouselActions} />

        <S.ButtonWrapper>
          <Button onPress={() => carouselActions.current.next()}>
            {isLastItem ? <>Inciar</> : <>Avançar</>}
          </Button>

          {isLastItem ? (
            <SecondaryBtn>
              <Text
                fontSize={theme.fontSize.sm16}
                fontFamily={theme.fontFamily.DMSansMedium}
                style={{ textDecorationLine: 'underline' }}
              >
                Eu não tenho uma credencial
              </Text>
            </SecondaryBtn>
          ) : null}
        </S.ButtonWrapper>
      </S.Content>
    </S.Container>
  )
}
