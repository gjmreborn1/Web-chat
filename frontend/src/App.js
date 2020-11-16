import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import AuthForms from "./components/AuthForms";
import Chat from "./components/Chat";

const App = () => {
    return (
        <Switch>
            <Route path="/" component={AuthForms} exact />
            <Route path="/chat" component={Chat} exact />
        </Switch>
    );
};

export default App;
