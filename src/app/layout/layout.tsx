import { Outlet, ScrollRestoration } from 'react-router-dom'

import './layout.scss'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'

export const Layout = () => {
    return (
        <div className='layout layout__wrapper'>
            <Header />
            <main className='layout__content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
