import {
    createRoutesFromElements,
    createHashRouter,
    Link,
    Route,
    RouterProvider,
} from 'react-router-dom'
// styles
import { Layout } from 'app/layout'
import { Fallback } from 'shared/ui/fallback'
import '../styles/index.scss'
import clsx from 'clsx'
import { useTheme } from 'entities/theme'

export const AppRouter = () => {
    const { theme } = useTheme()
    const routers = createRoutesFromElements(
        <Route
            path='/'
            element={<Layout />}
            handle={{ crumb: <Link to='/'>Home</Link> }}
            errorElement={<Fallback />}>
            <Route index element={<div>test</div>} />
        </Route>
    )

    const router = createHashRouter(routers)
    return (
        <div className={clsx('app', theme)}>
            <RouterProvider router={router} />
        </div>
    )
}
