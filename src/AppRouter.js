import { useContextState } from "dynamic-context-provider";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth, generateUserDocument, observer, dmObserver } from "./firebase";
import SignInPage from "./pages/SignInPage";
import Home from "./pages/Home";
import Root from "./common/Root";
import BattlePage from "./pages/BattlePage";
import CharacterPage from "./pages/CharacterPage";
import { PrivateRoute } from "./common/PrivateRoute";
import CreatePage from "./pages/CreatePage";
import { launchToaster } from "./core/toaster";

export default function AppRouter() {
  const { user, globalLoading, updateContextState } = useContextState()

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth) || {}
      updateContextState({ user, globalLoading: false })
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (globalLoading) return
    dmObserver()
    observer(updateContextState, launchToaster)
  })

  if (globalLoading) return null// TODO: add splash/loading screen
  return (
    <>
      <Router>
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
          {!user.character && <Route>
            <SignInPage />
          </Route>}
        </Switch>
      </Router>
    </>
  );
}
