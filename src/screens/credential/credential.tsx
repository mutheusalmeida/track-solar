import { Logo } from '@/assets/logo'
import { Button } from '@/components/button'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'

import * as S from './style'

export const Credential = () => {
  const theme = useTheme()
  const [value, setValue] = useState('')

  const onSubmit = async () => {
    const data = await fetch(
      'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/test-2023?dataType=yearly',
      {
        headers: {
          Authorization: 'Bearer HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF',
          'Content-Type': 'application/json',
        },
      }
    )
    const res = await data.json()

    console.log(res)
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
          onChangeText={setValue}
          value={value}
          onSubmitEditing={onSubmit}
        />

        <Button onPress={onSubmit}>Entrar</Button>
      </S.FieldWrapper>
    </S.Container>
  )
}
