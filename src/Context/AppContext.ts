import { createContext, Dispatch, useContext } from 'react'
import { AppState } from './AppState'

export interface IAppContextProps {
    appState: AppState
    appDispatch: any
}

export const AppDefaultState: AppState = {
    test: undefined
}

export const AppContext = createContext({
    appState: AppDefaultState,
    appDispatch: undefined as never
})

export const useAppContext = () => {
    return useContext(AppContext)
}

export const useApp = () => {
    const { appState } = useContext(AppContext)
    return appState
}