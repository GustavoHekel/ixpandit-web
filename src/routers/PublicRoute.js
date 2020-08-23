import React from 'react';
import {Route} from 'react-router-dom';
import Layout from "../layouts/Layout";

export const PublicRoute = ({component: Component, ...rest}) => (

    <Route {...rest} component={(props) => (

        <Layout>
            <Component {...props}/>
        </Layout>

    )}/>

);
