import { Logo } from '@/assets/logo'
import { Button } from '@/components/button'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import { Text } from '@/styles'
import type { RootStackParamList } from 'components'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { asyncStorage } from '@/services/async-storage'
import { useLazyGetYearlyQuery } from '@/services/api'

import * as S from './style'

export const Credential = () => {
  const theme = useTheme()
  const [value, setValue] = useState('')
  const [hideError, setHideError] = useState(false)
  const [getYearly, { isLoading, isError }] = useLazyGetYearlyQuery()
  const { navigate, reset } =
    useNavigation<NavigationProp<RootStackParamList>>()

  const onSubmit = async () => {
    if (value) {
      try {
        await getYearly(value).unwrap()
        await asyncStorage.setUser({ token: value })
        navigate('TabRoutes')
        reset({
          index: 0,
          routes: [{ name: 'TabRoutes' }],
        })
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

        <Button isLoading={isLoading} onPress={onSubmit}>
          {isLoading ? <>Loading...</> : <>Entrar</>}
        </Button>

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
