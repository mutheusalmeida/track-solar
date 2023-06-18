import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

type AnalyticsIconIcon = {
  color: string
} & SvgProps

export const AnalyticsIcon = ({ color, ...props }: AnalyticsIconIcon) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M1.862 14.77c.552 0 1 .412 1 .922v7.385c0 .51-.448.923-1 .923-.553 0-1-.413-1-.923v-7.385c0-.51.447-.923 1-.923ZM9.195 9.23c.552 0 1 .414 1 .924v12.923c0 .51-.448.923-1 .923s-1-.413-1-.923V10.154c0-.51.448-.923 1-.923ZM16.528 9.23c.553 0 1 .414 1 .924v12.923c0 .51-.447.923-1 .923-.552 0-1-.413-1-.923V10.154c0-.51.448-.923 1-.923ZM23.862 0c.552 0 1 .413 1 .923v22.154c0 .51-.448.923-1 .923-.553 0-1-.413-1-.923V.923c0-.51.447-.923 1-.923Z"
      clipRule="evenodd"
    />
  </Svg>
)
