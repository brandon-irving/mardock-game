import React from 'react'
import { FloatingButtonContainer } from './styled'

const FloatingButton = ({children}) => {
    return (
        <FloatingButtonContainer>
            {children}
        </FloatingButtonContainer>
    )
}

export default FloatingButton
