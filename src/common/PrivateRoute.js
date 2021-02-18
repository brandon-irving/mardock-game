import { useContextState } from 'dynamic-context-provider'
import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import SignInPage from '../pages/SignInPage'
import CreatePage from '../pages/CreatePage'
import DmViewResolver from '../pages/DmView'

 

export const PrivateRoute = ({ children, ...rest }) => {
  const { user, globalLoading } = useContextState()
  const history = useHistory()
  const isValidLogin = user.uid ? true : false
  function goToRoute(){
    let route = null
    if(user.DM){
      route = '/DM'
    }
    else if(isValidLogin && !user.character){
      route = '/create'
    }
    route && history.replace(route)
  }

  React.useEffect(() => {
    if(globalLoading)return
    goToRoute()
  }, [globalLoading])

  return(
  <Route
    {...rest}
    render={() =>{
      if(user.DM)return <DmViewResolver dmUser={user} />
      else if(isValidLogin && user.character)return children
      else if(isValidLogin && !user.character)return <CreatePage />
      else if(!isValidLogin)return <SignInPage />
    }    
  }
  />
)}


