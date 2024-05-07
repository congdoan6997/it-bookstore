import { Link, useRouteError } from 'react-router-dom'
import { RejectedDataType } from 'shared/types'
import ErrorImage from 'shared/assets/images/errorImage.svg?react'
import './fallback.scss'

export const Fallback = () => {
    const error = useRouteError()
    const knownError = error as RejectedDataType

    return (
        <div role='alert' className='fallback'>
            <ErrorImage className='fallback__img' />
            <h1 className='fallback__title'>Something went wrong</h1>
            <span className='fallback__description'>
                {knownError?.messageError} {knownError?.status}
            </span>
            <Link className='fallback__link' to='/'>
                Go to home page
            </Link>
        </div>
    )
}
