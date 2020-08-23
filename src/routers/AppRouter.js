import {Redirect, Switch } from 'react-router-dom';
import React from "react";
import {PublicRoute} from "./PublicRoute";
import Pokemons from "../views/Pokemons";

const AppRouter = () => (

    <Switch>
        <PublicRoute path="/" component={Pokemons} exact={true}/>

        <Redirect to="/" />
    </Switch>

);

export default AppRouter;
