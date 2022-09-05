import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {CurrentUserProvider} from './components/CurrentUserContext';
import styled from 'styled-components';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<Auth0Provider
domain="dev-jlii6a-j.us.auth0.com"
clientId="mmLcTOdcdn12syRNJNUreSwMkugpMWgF"
redirectUri={window.location.origin}
>
        <CurrentUserProvider>
                <App />
        </CurrentUserProvider>
</Auth0Provider>,
);



