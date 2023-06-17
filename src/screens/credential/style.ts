import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  gap: 74px;
  padding: 0 0 54px;
  background-color: ${({ theme }) => theme.colors.cyan300};
`
