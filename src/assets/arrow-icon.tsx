import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

type ArrowIconProps = {
  color: string
}

const ArrowIcon = ({ color, ...props }: ArrowIconProps & SvgProps) => (
  <Svg width={25} height={17} fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M8.407 16.044a.926.926 0 0 1-1.286-.049L.377 8.88a.874.874 0 0 1-.005-1.202L6.986.572a.926.926 0 0 1 1.286-.06c.372.33.399.892.06 1.255L3.115 7.373l20.107-.123a.9.9 0 0 1 .915.883.9.9 0 0 1-.905.894l-20.115.124 5.342 5.636a.874.874 0 0 1-.05 1.257Z"
      clipRule="evenodd"
    />
  </Svg>
)

export default ArrowIcon
