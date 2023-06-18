import * as React from 'react'
import Svg, { SvgProps, G, Rect, Defs, ClipPath } from 'react-native-svg'

type PercentageIconProps = {
  percentage: number
  width?: number
} & SvgProps

export const PercentageIcon = ({
  percentage,
  width = 32,
  ...props
}: PercentageIconProps) => {
  const filledWidth = (percentage / 100) * width

  return (
    <Svg width={width} height={33} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Rect width={width} height={6} y={13.667} fill="#128D87" rx={3} />
        <Rect width={filledWidth} height={6} y={13.667} fill="#DFFCC5" rx={3} />
      </G>
      <Defs>
        <ClipPath id="a">
          <Rect width={width} height={6} y={13.667} fill="#fff" rx={3} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
