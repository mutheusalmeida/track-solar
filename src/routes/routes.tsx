import { NavigationContainer } from '@react-navigation/native'
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { Welcome } from '@/screens/welcome'
import { Credential } from '@/screens/credential'
import { RootStackParamList } from 'components'
import { TransparentBtn } from '@/styles'
import { ArrowIcon } from '@/assets/arrow-icon'
import { View } from 'react-native'

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
            header: ({ navigation }: NativeStackHeaderProps) => (
              <View style={{ flex: 1, padding: 32 }}>
                <TransparentBtn onPress={() => navigation.goBack()}>
                  <ArrowIcon color="white" />
                </TransparentBtn>
              </View>
            ),
          }}
          component={Credential}
        />
      </Navigator>
    </NavigationContainer>
  )
}
