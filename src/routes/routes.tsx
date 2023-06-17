import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '@/screens/welcome'
import { Credential } from '@/screens/credential'
import { RootStackParamList } from 'components'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Welcome">
        <Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />

        <Screen
          name="Credential"
          options={{ headerShown: false }}
          component={Credential}
        />
      </Navigator>
    </NavigationContainer>
  )
}
