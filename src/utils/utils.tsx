import { StatusBar } from 'react-native'
import { Platform } from 'react-native'

export function getStatusBarHeight() {
  return Platform.OS === 'android' ? StatusBar.currentHeight : 0
}

export function formatTime(time: string) {
  const newDate = new Date().toLocaleDateString() + ' ' + time

  return new Date(newDate).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}
