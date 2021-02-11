import React from 'react'
import { useGetItems } from '../../common/hooks/useGetItems'
import BaseForm from './BaseForm'

const ItemsForm = ({closeModal}) => {
    const items = useGetItems()
    return (
       <BaseForm options={items} onSubmit={closeModal} type="Items" />
    )
}

export default ItemsForm
