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

  export type DataType = 'hourly' | 'daily' | 'monthly' | 'yearly'

  export type UserType = {
    token: string
  }

  export type GenerationRequestType = {
    data: {
      data_type: DataType
      x_labels: string[]
      generation: number[]
      expected: number[]
      totals: {
        kwh: number
        percentage: number
        trees: number
        co2: number
      }
    }
  }
}
