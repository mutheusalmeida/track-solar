import { Text } from '@/styles'
import styled from 'styled-components/native'

export const Title = styled(Text)`
  width: 308px;
`

export const ContentWrapper = styled.View`
  gap: 44px;
  padding: 0 32px;
`

export const PaginationContainer = styled.View`
  padding: 0 32px;
  gap: 6px;
  height: 6px;
  flex-direction: row;
  position: relative;
`

export const PaginationItem = styled.View`
  height: 6px;
  min-width: 6px;
  border-radius: 6px;
`
