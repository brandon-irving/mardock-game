import React from 'react'
import MUIRichTextEditor from 'mui-rte'
import { RichTextContainer } from './styled'

const RichTextEditor = ({data, label="Start typing..."}) => {
    return (
        <RichTextContainer>
           <MUIRichTextEditor
                    // defaultValue={data}
                    label={label}
                />   
        </RichTextContainer>
    )
}

export default RichTextEditor
