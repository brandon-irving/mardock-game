import React from 'react'
import { ITEM_TYPES, useGetItems } from '../../common/hooks/useGetItems'
import BaseForm from './BaseForm'

const ItemsForm = ({closeModal}) => {
    const [userItems]= useGetItems(undefined, ITEM_TYPES.misc)
    return (
       <BaseForm options={userItems} onSubmit={closeModal} type="Items" />
    )
}

export default ItemsForm
