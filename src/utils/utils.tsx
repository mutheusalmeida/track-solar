import { StatusBar } from 'react-native'
import { Platform } from 'react-native'

export function getStatusBarHeight() {
  return Platform.OS === 'android' ? StatusBar.currentHeight : 0
}
