import { useContextState } from "dynamic-context-provider";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth, generateUserDocument, observer, dmObserver } from "./firebase";
import SignInPage from "./pages/SignInPage";
import Home from "./pages/Home";
import Root from "./common/Root";
import BattlePage from "./pages/BattlePage";
import CharacterPage from "./pages/CharacterPage";
import { PrivateRoute } from "./common/PrivateRoute";
import CreatePage from "./pages/CreatePage";
import DmViewResolver from "./pages/DmView/DmView";

export default function AppRouter() {
  const { user, updateContextState } = useContextState()
  const [appLoading, setappLoading] = useState(true)
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth) || {}
      updateContextState({ user })
      setappLoading(false)
    });
  }, [])

  useEffect(() => {
    if (appLoading) return
    dmObserver(updateContextState)
    observer(updateContextState, user)
  })

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
          {user.character && <PrivateRoute>
            <Root>
            <Home />
            </Root>
          </PrivateRoute>}
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          {user.DM && <Route path="/DM">
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
