import { theme } from '@/resources/theme'
import { DMSans_400Regular, DMSans_500Medium } from '@expo-google-fonts/dm-sans'
import { DMSerifText_400Regular } from '@expo-google-fonts/dm-serif-text'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider } from 'styled-components/native'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { Routes } from '@/routes'
import { getStatusBarHeight } from '@/utils'

SplashScreen.preventAutoHideAsync()

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.cyan};
  padding: ${getStatusBarHeight()}px 0;
`

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSerifText_400Regular,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <Container onLayout={onLayoutRootView}>
        <StatusBar style="light" />

        <Routes />
      </Container>
    </ThemeProvider>
  )
}
