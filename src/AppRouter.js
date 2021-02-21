import { useContextState } from "dynamic-context-provider";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { auth, generateUserDocument, observer, dmObserver, firestore, updateCharacter } from "./firebase";
import SignInPage from "./pages/SignInPage";
import Home from "./pages/Home";
import Root from "./common/Root";
import BattlePage from "./pages/BattlePage";
import CharacterPage from "./pages/CharacterPage";
import { PrivateRoute } from "./common/PrivateRoute";
import CreatePage from "./pages/CreatePage";
import DmViewResolver from "./pages/DmView/DmViewResolver";
import { handleDmMessage, handleNewItemMessage, handleBattleSuccess } from "./core/toaster";
import { find } from "lodash";

function handleDbSync(newUser, oldUser, updateContextState){
  updateContextState({user: newUser})
  handleNewItemMessage(newUser, oldUser,)
  handleDmMessage(newUser)
  
}
export default function AppRouter() {
  const { user, users, battle, updateContextState } = useContextState()
  const [appLoading, setappLoading] = useState(true)
  
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth) || {}
      updateContextState({ user })
      setappLoading(false)
    });
  }, [])

  useEffect(() => {
    const usersUnsubscribe = firestore.collection('users').onSnapshot(
      querySnapshot=>{
        const users = []
        querySnapshot.docChanges().forEach((change) => {
          const dbUser = change.doc.data()
          !dbUser.DM && users.push(dbUser)
        })        
        updateContextState({users})
      }
     )
     const dMnsubscribe = firestore.collection('DM').onSnapshot(
      querySnapshot=>{
        let battle = {}
        querySnapshot.docChanges().forEach((change) => {
          const dmData = change.doc.data()
          if(dmData.current){
            battle = dmData.current
          }
          if(change.type==='modified'){
            handleBattleSuccess(battle)
          }
        })        
        
        updateContextState({battle})
      }
     )
  return () => {
    usersUnsubscribe()
      dMnsubscribe()
    }
  }, [firestore])

  useEffect(() => {
    if(!users.length || appLoading || user.DM)return
    const newUser = find(users, {uid: user.uid})
    newUser && handleDbSync(newUser, user, updateContextState)
  }, [users])

  useEffect(() => {
    if(!battle?.current?.success)return
    
  }, [battle])
  
  if (appLoading) return null // TODO: add splash/loading screen
  return (
    <>
      <Router basename="/mardock-game">
        <Switch>
        {/* Protected Routes */}
        
          <PrivateRoute path="/Battle">
          <Root>
              <BattlePage />
              </Root>
          </PrivateRoute>
          <PrivateRoute path="/" exact>
            <Root>
              <Home />
              </Root>
          </PrivateRoute>
          <PrivateRoute path="/Character">
            <Root>
              <CharacterPage />
              </Root>
          </PrivateRoute>

        {/* Unprotected Routes */}
          <Route path="/create">
            <CreatePage />
          </Route>
          {user?.character && <PrivateRoute>
            <Root>
            <Home />
            </Root>
          </PrivateRoute>}
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          {user?.DM && <Route path="/DM">
            <DmViewResolver dmUser={user} />
          </Route>}
          <Route>
            <SignInPage />
          </Route>
        </Switch>
      </Router>

    </>
  );
}
