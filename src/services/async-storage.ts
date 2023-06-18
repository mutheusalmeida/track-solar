import AsyncStorage from '@react-native-async-storage/async-storage'
import type { UserType } from 'components'

export const asyncStorage = {
  getUser: async (): Promise<UserType> => {
    try {
      const data = await AsyncStorage.getItem('@track_solar:user')
      return data !== null ? JSON.parse(data) : null
    } catch (e) {
      console.log('Error getting user')
    }
  },
  setUser: async (value: UserType) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@track_solar:user', jsonValue)
    } catch (e) {
      console.log('Error setting user')
    }
  },
}
