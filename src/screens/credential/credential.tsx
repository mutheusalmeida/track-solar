import { Logo } from '@/assets/logo'
import { Button } from '@/components/button'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'

import * as S from './style'

export const Credential = () => {
  const theme = useTheme()
  const [value, setValue] = useState('')

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
          onSubmitEditing={(e) => console.log(e.nativeEvent.text)}
        />

        <Button>Entrar</Button>
      </S.FieldWrapper>
    </S.Container>
  )
}
