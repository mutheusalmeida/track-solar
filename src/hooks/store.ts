import type { AppDispatch, RootState } from '@/services/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
