import { theme } from '@/resources/theme'
import { DMSans_400Regular, DMSans_500Medium } from '@expo-google-fonts/dm-sans'
import { DMSerifText_400Regular } from '@expo-google-fonts/dm-serif-text'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider } from 'styled-components/native'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { getStatusBarHeight } from '@/utils'
import { Provider } from 'react-redux'
import { store } from '@/services/store'
import { StackRoutes } from '@/routes/stack-routes'

SplashScreen.preventAutoHideAsync()

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.cyan300};
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container onLayout={onLayoutRootView}>
          <StatusBar style="light" />

          <StackRoutes />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}
