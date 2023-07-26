import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { AmplifyProvider, Authenticator  } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AmplifyProvider>
    <Authenticator.Provider>
    <App />
    </Authenticator.Provider>
    </AmplifyProvider>
  </React.StrictMode>
);


