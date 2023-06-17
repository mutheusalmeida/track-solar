import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

type CloseIconrops = {
  color: string
} & SvgProps

export const CloseIcon = ({ color, ...rest }: CloseIconrops) => (
  <Svg width={19} height={19} fill="none" {...rest}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="M17.97 1 1 17.97M1 1l16.97 16.97"
    />
  </Svg>
)
