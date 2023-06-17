import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 74px;
  padding: 0 16px 54px;
  background-color: ${({ theme }) => theme.colors.cyan300};
`

export const FieldWrapper = styled.View`
  align-self: stretch;
  flex-direction: column;
  gap: 16px;
`

export const TextInput = styled.TextInput`
  height: 49px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.cyan300};
  font-family: ${({ theme }) => theme.fontFamily.DMSansRegular};
  padding: 0 16px;
  border-radius: 10px;
`
