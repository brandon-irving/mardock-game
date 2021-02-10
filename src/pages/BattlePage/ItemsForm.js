import React from 'react'
import BaseForm from './BaseForm'

const ItemsForm = ({closeModal}) => {
    return (
       <BaseForm onSubmit={closeModal} type="Items" />
    )
}

export default ItemsForm
