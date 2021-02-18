import React from 'react'
import BasicRoot from '../../common/BasicRoot'
import { ContextStateProvider } from 'dynamic-context-provider';
import DmView from './DmView'

const DmViewResolver = ({dmUser}) => {
    return (
        <ContextStateProvider stateConfig={{users: [], globalLoading: false}}>
        <BasicRoot maxWidth="xl">
       <DmView dmUser={dmUser}/>
        </BasicRoot>
        </ContextStateProvider>
       
    )
}

export default DmViewResolver

