import { useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { InView } from 'react-intersection-observer'
import './header.scss'
import { Search } from 'features/search'

export const Header = () => {
    const [isViewHeader, setIsViewHeader] = useState(true)
    const [isViewNavigationMenu, setIsViewNavigationMenu] = useState(false)

    const navigate = useNavigate()
    const onChangeViewHeader = (inView: boolean) => {
        setIsViewHeader(inView)
    }

    const onToggleHideNavigationHeader = () => {
        setIsViewNavigationMenu((preState) => !preState)
    }
    return (
        <>
            <InView as='div' onChange={(inView) => onChangeViewHeader(inView)}>
                <header className='header _container'>
                    <div className='header__wrapper'>
                        <Link to={'/'}>
                            <h2 className='header__title'>IT Book Store</h2>
                        </Link>
                        <Search className='header__search' />
                        <div className='header__btn-wrapper'>Cart</div>
                        {/* <button className=''>Menu</button> */}
                    </div>
                </header>
            </InView>
        </>
    )
}
