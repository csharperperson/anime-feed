import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import AuthWrapper from './components/authwrapper/AuthWrapper'
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/home/Home'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <AuthWrapper />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("feathers-jwt") ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}