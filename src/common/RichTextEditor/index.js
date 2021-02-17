import React from 'react'
import MUIRichTextEditor from 'mui-rte'
import { RichTextContainer } from './styled'

const RichTextEditor = ({defaultData, onSave=()=>null, label="Start typing..."}) => {
    function handleSave(value){
        onSave(value)
    }
    return (
        <RichTextContainer>
           <MUIRichTextEditor
           onSave={handleSave}
                    defaultValue={defaultData}
                    label={label}
                />   
        </RichTextContainer>
    )
}

export default RichTextEditor
