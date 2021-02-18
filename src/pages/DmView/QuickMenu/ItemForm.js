import React from 'react'
import { MuiFormGenerator } from 'mui-form-generator'
import 'mui-form-generator/dist/index.css'
import theme from '../../../core/theme'
import { useGetUserOptions } from '../hooks'
import { useGetAllItemOptions } from '../../../common/hooks/useGetBagOptions'
import { find, map } from 'lodash'
import { useUpdateItems, useBatchUpdateItems } from '../../../common/hooks/useUpdateItems'

const BluePrint = ({ options, itemTypes, availableItems, setavailableItems, allItems}) => {
    return ({
        Rows: [
            {
                Cols: [
                    {
                        Input: {
                            id: 'itemType',
                            name: 'itemType',
                            type: 'select',
                            label: 'Item Type',
                            options: itemTypes,
                            onChange: ({ value, formHandler})=>{
                                const newAvailableItems = allItems[value.label]
                                if(!newAvailableItems)return
                                setavailableItems(newAvailableItems)
                                formHandler.setFieldValue('availableItem', newAvailableItems[0])
                            }
                        
                        }
                    },
                ]
            },
            {
                Cols: [
                    {
                        Input: {
                            id: 'availableItem',
                            name: 'availableItem',
                            type: 'select',
                            label: 'Items',
                            options: availableItems,
                        }
                    },
                ]
            },
            {
                Cols: [
                    {
                        Input: {
                            id: 'target',
                            name: 'target',
                            type: 'select',
                            label: 'Target',
                            options
                        
                        }
                    },
                ]
            },

            
            {
                Cols: [
                    {
                        Input: {
                            id: 'quantity',
                            name: 'quantity',
                            type: 'number',
                            label: 'Amount'
                        
                        }
                    },
                ]
            },
            {
                Cols: [
                    {
                        Input: {
                            id: 'targetAll',
                            name: 'targetAll',
                            type: 'checkbox',
                            label: 'Give to all'
                        
                        }
                    },
                ]
            },
           
            {
                Cols: [
                    {
                        style: { display: 'flex', justifyContent: 'flex-end' },
                        Button: {
                            id: 'submit',
                            name: 'submit',
                            type: 'submit',
                            label: 'Submit',
                            disabled: false,
                        }
                    },
                ]
            },
        ]
    })
}
const ItemForm = () => {
    const {options, users} = useGetUserOptions()
    console.log('log: user', {users})
    const firstUser = options[0]
    const allItems = useGetAllItemOptions(firstUser)
    const itemTypes = map(Object.keys(allItems), key=>{
        return {label: key, value: key}
    })
    const initialValues = { targetAll: false, quantity: 1, availableItem: allItems['misc'][0], itemType: find(itemTypes, {label: 'misc'}),  target: firstUser }
    const [values, setvalues] = React.useState(initialValues)
    const [availableItems, setavailableItems] = React.useState(allItems['misc'])
    const [updateItems] = useUpdateItems(values.target, values.itemType.label)
    const [updateBatchItems] = useBatchUpdateItems(values.itemType.label)

   async function handleSubmit(values, formik) {
        const reqString = `${values.quantity}_${values.availableItem.label}`
        console.log('log: submit', {submitConfig: [values.target, values.itemType.label], reqString})     
        if(values.targetAll){
            await updateBatchItems(options)
        }else await updateItems([reqString])
        
        formik.resetForm()
    }

    return (
        <MuiFormGenerator
            theme={theme}
            manualValidate={(values)=>setvalues(values)}
            blueprint={BluePrint({availableItems,setavailableItems, options, itemTypes, allItems})}
            initialValues={initialValues}
            handleSubmit={handleSubmit}
        />
    )
}

export default ItemForm
