import { TransparentBtn, Text } from '@/styles'
import { Button } from '@/components/button'
import { useEffect, useRef, useState } from 'react'
import { theme } from '@/resources/theme'
import { Carousel } from '@/components/carousel'
import type { CarouselActions, RootStackParamList } from 'components'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Modal } from 'react-native'
import { Linking } from 'react-native'
import { CloseIcon } from '@/assets/close-icon'
import { asyncStorage } from '@/services/async-storage'

import * as S from './style'

export const Welcome = () => {
  const carouselActions = useRef<CarouselActions>()
  const [current, setCurrent] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const { navigate, reset } =
    useNavigation<NavigationProp<RootStackParamList>>()

  const getCurrentIndex = (current: number) => {
    setCurrent(current)
  }

  const isLastItem = current === carouselActions.current?.getLastIndex()

  useEffect(() => {
    const getUser = async () => {
      const user = await asyncStorage.getUser()

      if (user) {
        navigate('TabRoutes')
        reset({
          index: 0,
          routes: [{ name: 'TabRoutes' }],
        })
      }
    }

    getUser()
  }, [])

  return (
    <S.Container>
      <Modal
        visible={modalVisible}
        transparent
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <S.ModalOverlay>
          <S.ModalContainer>
            <S.CloseModal onPress={() => setModalVisible(false)}>
              <CloseIcon color={theme.colors.cyan200} />
            </S.CloseModal>

            <Text
              fontFamily={theme.fontFamily.DMSerifTextRegular}
              fontSize={theme.fontSize.lg36}
              color={theme.colors.cyan300}
            >
              Ops!
            </Text>

            <Text color={theme.colors.cyan200} fontSize={theme.fontSize.md20}>
              Entre em contato com o desenvolvedor para obter a credencial.
            </Text>

            <Button
              onPress={() => Linking.openURL('mailto:mutheusalmeida@gmail.com')}
            >
              Abrir email
            </Button>
          </S.ModalContainer>
        </S.ModalOverlay>
      </Modal>

      {!isLastItem ? (
        <TransparentBtn onPress={() => navigate('Credential')}>
          <S.Skip
            fontSize={theme.fontSize.md20}
            fontFamily={theme.fontFamily.DMSansRegular}
          >
            Pular
          </S.Skip>
        </TransparentBtn>
      ) : null}

      <S.Content>
        <Carousel getCurrentIndex={getCurrentIndex} ref={carouselActions} />

        <S.ButtonWrapper>
          <Button
            onPress={() => {
              if (isLastItem) {
                navigate('Credential')

                return
              }

              carouselActions.current.next()
            }}
          >
            {isLastItem ? <>Inciar</> : <>Avançar</>}
          </Button>

          {isLastItem ? (
            <TransparentBtn onPress={() => setModalVisible(true)}>
              <S.Help
                fontSize={theme.fontSize.sm16}
                fontFamily={theme.fontFamily.DMSansMedium}
              >
                Eu não tenho uma credencial
              </S.Help>
            </TransparentBtn>
          ) : null}
        </S.ButtonWrapper>
      </S.Content>
    </S.Container>
  )
}
