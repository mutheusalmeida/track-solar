import { NavigationContainer } from '@react-navigation/native'
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Welcome } from '@/screens/welcome'
import { Credential } from '@/screens/credential'
import type { RootStackParamList } from 'components'
import { StackHeader } from '@/components/stack-header'
import { TabRoutes } from './tab-routes'
import { Overview } from '@/screens/overview'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="TabRoutes"
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

        <Screen
          name="Overview"
          options={{ headerShown: false }}
          component={Overview}
        />

        <Screen
          name="TabRoutes"
          options={{ headerShown: false }}
          component={TabRoutes}
        />

        <Screen
          name="Analytics"
          options={{ headerShown: false }}
          component={Overview}
        />
      </Navigator>
    </NavigationContainer>
  )
}
