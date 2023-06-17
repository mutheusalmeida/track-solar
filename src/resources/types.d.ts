declare module 'components' {
  import type { ICarouselInstance } from 'react-native-reanimated-carousel'
  import type { TouchableOpacityProps } from 'react-native'

  export type CarouselActions = { getLastIndex: () => number } & Pick<
    ICarouselInstance,
    'next'
  >

  export type BaseButtonType = {
    children: ReactNode
    backgroundColor?: string
    borderColor?: string
    borderRadius?: number
    height?: number
    width?: number
  } & Omit<TouchableOpacityProps, 'activeOpacity'>

  export type ScreenNames = ['Welcome', 'Credential', 'Home']

  export type RootStackParamList = Record<ScreenNames[number], undefined>
}
