import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

type HomeIcon = {
  color: string
} & SvgProps

export const HomeIcon = ({ color, ...props }: HomeIcon) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M12.313.18a.923.923 0 0 1 1.097 0l11.077 8.188c.236.174.375.45.375.742v13.967c0 .51-.414.923-.924.923h-8.44a.923.923 0 0 1-.922-.923v-8.228h-2.901v8.228c0 .51-.414.923-.923.923H1.785a.923.923 0 0 1-.924-.923V9.11c0-.292.14-.568.375-.742L12.313.181ZM2.708 9.577v12.578h7.12v-8.228c0-.51.414-.923.924-.923h4.747c.51 0 .923.414.923.923v8.228h6.593V9.576L12.861 2.071 2.708 9.576Z"
      clipRule="evenodd"
    />
  </Svg>
)
