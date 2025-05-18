import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RelayEnvironmentProvider, loadQuery } from 'react-relay/hooks';
import relayEnvironment from './relay/RelayEnvironment';
import TaskViewQuery from './__generated__/TaskViewQuery.graphql'; // ✅ good path



// ✅ Preload the query
const preloadedQuery = loadQuery(relayEnvironment, TaskViewQuery, {});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <App preloadedQuery={preloadedQuery} />
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
