import { Text } from '@/styles'
import { Button } from '@/components/button'

import * as S from './style'

export const Welcome = () => {
  return (
    <S.Container>
      <S.Slider>
        <Text>Welcome</Text>

        <Button>Avançar</Button>
      </S.Slider>
    </S.Container>
  )
}
