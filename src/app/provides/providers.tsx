import { FC } from 'react'
interface IProviders {
    readonly children: JSX.Element
}
export const Providers: FC<IProviders> = ({ children }) => {
    return <div>{children}</div>
}
