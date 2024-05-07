import { FC } from 'react'
import { ThemeProvider } from 'entities/theme'
interface IProviders {
    readonly children: JSX.Element
}
export const Providers: FC<IProviders> = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>
}
