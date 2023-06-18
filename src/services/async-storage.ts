import AsyncStorage from '@react-native-async-storage/async-storage'

export const asyncStorage = {
  getUser: async <T>(): Promise<T> => {
    try {
      const data = await AsyncStorage.getItem('@track_solar:user')
      return data !== null ? JSON.parse(data) : null
    } catch (e) {
      console.log('Error getting user')
    }
  },
}
