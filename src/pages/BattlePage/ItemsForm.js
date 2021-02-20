import React from 'react'
import UseBaseForm from '../../common/FloatingButton/forms/UseBaseForm'
import { useGetBagOptions } from '../../common/hooks/useGetBagOptions'

const ItemsForm = ({closeModal}) => {
    const options = useGetBagOptions()
    return (
        <UseBaseForm onSubmit={closeModal} type="misc" options={options.misc} />
    )
}

export default ItemsForm
