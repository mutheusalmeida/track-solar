import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '@/screens/welcome'

const { Navigator, Screen } = createNativeStackNavigator()

export const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Welcome">
        <Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
      </Navigator>
    </NavigationContainer>
  )
}
