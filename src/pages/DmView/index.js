import React from 'react'
import BasicRoot from '../../common/BasicRoot'
import { ContextStateProvider } from 'dynamic-context-provider';
import DmView from './DmView'

const DmViewResolver = () => {
    return (
        <ContextStateProvider stateConfig={{users: [], isGlobalLoading: false}}>
        <BasicRoot maxWidth="xl">
       <DmView />
        </BasicRoot>
        </ContextStateProvider>
       
    )
}

export default DmViewResolver

