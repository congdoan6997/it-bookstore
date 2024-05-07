import { FC, useMemo, useState } from 'react'
import {
    Theme,
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from '../config/themeContext'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface IThemeProviderProps {
    children: JSX.Element
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const value = useMemo(() => ({ theme, setTheme }), [theme])

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}
