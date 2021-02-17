import React from 'react'
import { useGetMisc } from '../../common/hooks/useGetMisc'
import BaseForm from './BaseForm'

const ItemsForm = ({closeModal}) => {
    const {userItems} = useGetMisc()
    return (
       <BaseForm options={userItems} onSubmit={closeModal} type="Items" />
    )
}

export default ItemsForm
