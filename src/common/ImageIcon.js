import React from 'react'
const ImageIcon = ({ src, alt='', width="25vw" }) => {
    return (
        <img style={{ width, maxWidth: '100px', height: 'inherit' }} src={src} alt={alt} />
    )
}

export default ImageIcon
