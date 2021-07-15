import React from "react";
import "./App.css";
import LoginPage from "./pages/Login.Page";
import SignUpPage from "./pages/SignUp.Page";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/Dashboard.Page";
import RecordingPage from "./pages/Recording.Page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Login"></Redirect>
        </Route>
        <Route path="/Login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/SignUp">
          <SignUpPage></SignUpPage>
        </Route>
        <Route path="/DashBard">
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/Recording">
          <RecordingPage></RecordingPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
