import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import { useContextState } from 'dynamic-context-provider';

const LoadingContainer = ({children, loading}) => {
    const { globalLoading } = useContextState()
    if(globalLoading || loading){
        return(<Skeleton>{children}</Skeleton>)
    }
    return children
}

export default LoadingContainer
