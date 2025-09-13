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

// Suppress DataStore warnings by setting logger level
Logger.LOG_LEVEL = 'ERROR';

// Configure Amplify
Amplify.configure(config);

// Stop DataStore sync to prevent unauthorized warnings
DataStore.stop().catch(() => {});

// Override console.warn to filter DataStore warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  const message = args.join(' ');
  if (message.includes('DataStore') || 
      message.includes('syncCandidates') || 
      message.includes('Unauthorized') ||
      message.includes('onCreateCandidate') ||
      message.includes('onUpdateCandidate') ||
      message.includes('onDeleteCandidate')) {
    return; // Suppress DataStore warnings
  }
  originalWarn.apply(console, args);
};

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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
