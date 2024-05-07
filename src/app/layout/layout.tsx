import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from 'widgets/header'
import { Footer } from 'widgets/footer'
import clsx from 'clsx'
import { Theme, useTheme } from 'entities/theme'
import { IconButton } from 'shared/ui/iconButton'
import Sun from 'shared/assets/icons/sun.svg?react'
import Moon from 'shared/assets/icons/moon.svg?react'
import { ToastContainer } from 'react-toastify'
import { SkeletonTheme } from 'react-loading-skeleton'
import './layout.scss'

const BASE_COLOR_LIGHT = '#ebebeb'
const HIGHLIGT_COLOR_LIGHT = '#f5f5f5'

const BASE_COLOR_DARK = '#202020'
const HIGHLIGT_COLOR_DARK = '#44444480'

export const Layout = () => {
    const { theme, toggleTheme } = useTheme()
    const Icon = theme === Theme.LIGHT ? Sun : Moon
    const baseColor = theme === Theme.LIGHT ? BASE_COLOR_LIGHT : BASE_COLOR_DARK
    const highlightColor =
        theme === Theme.LIGHT ? HIGHLIGT_COLOR_LIGHT : HIGHLIGT_COLOR_DARK
    return (
        <div className='layout layout__wrapper'>
            <SkeletonTheme
                baseColor={baseColor}
                highlightColor={highlightColor}>
                <Header />
                <main className='layout__content'>
                    <Outlet />
                </main>
                <Footer />
                <div
                    title='Change theme'
                    className={clsx('layout__toggle-theme', theme)}>
                    <IconButton
                        Icon={Icon}
                        onClick={toggleTheme}
                        isCounterVisible={false}
                        className='layout__icon'
                    />
                </div>
                <ScrollRestoration />
                <ToastContainer
                    position='bottom-right'
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='colored'
                />
            </SkeletonTheme>
        </div>
    )
}
