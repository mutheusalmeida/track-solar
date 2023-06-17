import * as React from 'react'
import Svg, { SvgProps, Circle } from 'react-native-svg'

type SunIconProps = {
  color: string
} & SvgProps

export const SunIcon = ({ color, ...rest }: SunIconProps) => (
  <Svg width={24} height={24} fill="none" {...rest}>
    <Circle cx={12} cy={12} r={12} fill={color} />
  </Svg>
)
