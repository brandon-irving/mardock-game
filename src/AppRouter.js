import { useContextState } from "dynamic-context-provider";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth, generateUserDocument } from "./firebase";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const routes = [
    { route: '/sign-in', title: 'Sign In'},
    { route: '/sign-up', title: 'Sign Up'},
    { route: '/', title: 'Home'},
]
function renderRoutes(routes) {
  return routes.map((config, i) => {
    return (
      <li key={i}>
        <Link to={config.route}>{config.title}</Link>
      </li>
    );
  });
}

export default function AppRouter() {
    const { updateContextState} = useContextState()
    useEffect(() => {

        auth.onAuthStateChanged(async(userAuth) => {
            const user = await generateUserDocument(userAuth);
            updateContextState({user: {displayName: user.displayName, email: user.email, image: user.photoURL}})
          });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <Router>
      <>
      <nav>
          <ul>{renderRoutes(routes)}</ul>
        </nav>
        <Switch>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/" exact>
            <div>Home</div>
          </Route>
          <Route>
          <div>Home</div>
          </Route>
        </Switch>
      </>
    </Router>
  );
}