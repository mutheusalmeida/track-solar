import { TransparentBtn } from '@/styles'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  gap: 74px;
  padding: 0 0 54px;
  background-color: ${({ theme }) => theme.colors.cyan300};
`

export const Content = styled.View`
  gap: 74px;
  align-items: center;
`

export const ButtonWrapper = styled.View`
  align-self: stretch;
  align-items: center;
  gap: 24px;
  padding: 0 16px;
`

export const ModalOverlay = styled.View`
  flex: 1;
  background: rgba(108, 184, 175, 0.58);
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`

export const ModalContainer = styled.View`
  gap: 24px;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 24px 16px;
`

export const CloseModal = styled(TransparentBtn)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 24px;
`
