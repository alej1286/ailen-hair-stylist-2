import React from "react";
import ReactDOM from "react-dom/client";
import {
  //useQuery,
  //useMutation,
  //useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import App from "./App";
import { Amplify, DataStore, Logger } from "aws-amplify";
import config from "./aws-exports";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { registerSW } from "./utils/pwaHelpers";
import "./utils/errorSuppression";

// Suppress DataStore warnings by setting logger level
Logger.LOG_LEVEL = 'ERROR';

// Configure Amplify
Amplify.configure(config);

// Stop DataStore sync to prevent unauthorized warnings
DataStore.stop().catch(() => {});

// Register Service Worker for PWA
window.addEventListener('load', () => {
  registerSW();
});

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AmplifyProvider>
        <Authenticator.Provider>
          <App />
        </Authenticator.Provider>
      </AmplifyProvider>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </React.StrictMode>,
);
