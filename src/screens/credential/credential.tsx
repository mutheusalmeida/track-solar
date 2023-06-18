import { Logo } from '@/assets/logo'
import { Button } from '@/components/button'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import { useGetGenerationMutation } from '@/services/api'
import { Text } from '@/styles'
import type { RootStackParamList } from 'components'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { asyncStorage } from '@/services/async-storage'

import * as S from './style'

export const Credential = () => {
  const theme = useTheme()
  const [value, setValue] = useState('')
  const [hideError, setHideError] = useState(false)
  const [generation, { isLoading, error, isError }] = useGetGenerationMutation()
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>()

  const onSubmit = async () => {
    if (value) {
      try {
        await generation({ dataType: 'yearly', token: value }).unwrap()
        await asyncStorage.setUser({ token: value })
        navigate('TabRoutes')
      } catch (err) {
        console.log(err)
        setHideError(false)
      }
    }
  }

  return (
    <S.Container>
      <Logo />

      <S.FieldWrapper>
        <S.TextInput
          placeholder="Sua credencial aqui"
          cursorColor={theme.colors.white}
          placeholderTextColor={theme.colors.cyan200}
          selectionColor={theme.colors.cyan200}
          inputMode="text"
          onChangeText={(text: string) => {
            setValue(text)
            setHideError(true)
          }}
          value={value}
          onSubmitEditing={onSubmit}
        />

        <Button onPress={onSubmit}>Entrar</Button>

        {isError && !hideError ? (
          <Text
            fontFamily={theme.fontFamily.DMSansMedium}
            fontSize={theme.fontSize.sm16}
          >
            Oh, não! Aconteceu um erro.
          </Text>
        ) : null}
      </S.FieldWrapper>
    </S.Container>
  )
}
