import { NavigationContainer } from '@react-navigation/native'
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Welcome } from '@/screens/welcome'
import { Credential } from '@/screens/credential'
import type { RootStackParamList } from 'components'
import { StackHeader } from '@/components/stack-header'
import { Home } from '@/screens/home'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />

        <Screen
          name="Credential"
          options={{
            header: (props: NativeStackHeaderProps) => (
              <StackHeader {...props} />
            ),
          }}
          component={Credential}
        />

        <Screen name="Home" options={{ headerShown: false }} component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}
