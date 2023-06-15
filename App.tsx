import { theme } from '@/resources/theme'
import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider } from 'styled-components/native'

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.cyan};
  font-size: 32px;
`

const Container = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="light" />

        <Title>Hello, Matheus!</Title>
      </Container>
    </ThemeProvider>
  )
}
