import { StatusBar } from 'react-native'
import { Platform } from 'react-native'
import moment from 'moment'

export function getStatusBarHeight() {
  return Platform.OS === 'android' ? StatusBar.currentHeight : 0
}

export function formatTime(time: string) {
  const dateTime = moment(`${moment().format('YYYY-MM-DD')} ${time}`).format(
    'HH:mm'
  )

  return dateTime
}
