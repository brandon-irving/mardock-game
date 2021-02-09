import { useContextState } from "dynamic-context-provider";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth, generateUserDocument, observer } from "./firebase";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Root from "./common/Root";
import BattlePage from "./pages/BattlePage";


export default function AppRouter() {
  const { globalLoading, updateContextState } = useContextState()

  useEffect(() => {

    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      updateContextState({ user, globalLoading: false })
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (globalLoading) return
    observer(updateContextState)
  })
  if(globalLoading)return null// TODO: add splash/loading screen
  return (
    <Router>
      <Root>
      <Switch>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/Battle">
            <BattlePage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Root>
    </Router>
  );
}