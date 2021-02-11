import React from 'react'
import ImageIcon from './ImageIcon'
import bag from '../images/bag.svg';
import FloatingButton from './FloatingButton'
const Page = ({children}) => {
    return (
        <div>
        {children}
    <FloatingButton >
    <ImageIcon width='9vw' src={bag} alt="bag" />
    </FloatingButton>
        </div>
    )
}

export default Page
