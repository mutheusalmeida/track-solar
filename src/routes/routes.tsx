import { NavigationContainer } from '@react-navigation/native'
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Welcome } from '@/screens/welcome'
import { Credential } from '@/screens/credential'
import { RootStackParamList } from 'components'
import { StackHeader } from '@/components/stack-header'

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
      </Navigator>
    </NavigationContainer>
  )
}
