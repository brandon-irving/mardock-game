import { useContextState } from 'dynamic-context-provider'
import React from 'react'
import { Route } from 'react-router-dom'
import SignInPage from '../pages/SignInPage'
import CreatePage from '../pages/CreatePage'
import DmView from '../pages/DmView'

 

export const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContextState()
  const isValidLogin = user.uid ? true : false
    return(
  <Route
    {...rest}
    render={() =>{
      if(isValidLogin && user.DM)return <DmView />
      if(isValidLogin && user.character)return children
      if(isValidLogin && !user.character)return <CreatePage />
      if(!isValidLogin)return <SignInPage />
    }    
  }
  />
)}


