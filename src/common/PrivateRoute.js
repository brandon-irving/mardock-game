import { useContextState } from 'dynamic-context-provider'
import React from 'react'
import { Route } from 'react-router-dom'
import SignInPage from '../pages/SignInPage'
import CreatePage from '../pages/CreatePage'
import DmViewResolver from '../pages/DmView'

 

export const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContextState()
  const isValidLogin = user.uid ? true : false
  console.log('log: user', user)
    return(
  <Route
    {...rest}
    render={() =>{
      if(isValidLogin && user.DM)return <DmViewResolver />
      else if(isValidLogin && user.character)return children
      else if(isValidLogin && !user.character)return <CreatePage />
      else if(!isValidLogin)return <SignInPage />
    }    
  }
  />
)}


