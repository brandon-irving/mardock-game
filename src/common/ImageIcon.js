import React from 'react'
const ImageIcon = ({ src, alt='' }) => {
    return (
        <img style={{ width: '25vw', maxWidth: '100px', height: 'inherit' }} src={src} alt={alt} />
    )
}

export default ImageIcon
