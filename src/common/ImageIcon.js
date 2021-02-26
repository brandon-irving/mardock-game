import React from 'react'
const ImageIcon = ({ size="large", src, alt='', width="25vw" }) => {
    const sizeMapper = {
        small: '25px',
        medium: '50px',
        large: '100px'
    }
    return (
        <img style={{ width, maxWidth: sizeMapper[size], height: 'inherit' }} src={src} alt={alt} />
    )
}

export default ImageIcon
