import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  //useQuery,
  //useMutation,
  //useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { AmplifyProvider, Authenticator  } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"
Amplify.configure(config);

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AmplifyProvider>
        <Authenticator.Provider>
          <App />
        </Authenticator.Provider>
      </AmplifyProvider>
    </QueryClientProvider>
  </React.StrictMode>
);


