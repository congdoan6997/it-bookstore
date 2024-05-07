import { Providers } from './provides'
import { AppRouter } from './routes'

export const App = () => {
    return (
        <Providers>
            <AppRouter />
        </Providers>
    )
}
