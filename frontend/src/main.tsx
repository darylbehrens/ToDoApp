import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { RelayEnvironmentProvider, loadQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import TestComponentQuery from './__generated__/TestComponentQuery.graphql';

// ✅ Preload the query
const preloadedQuery = loadQuery(RelayEnvironment, TestComponentQuery, {});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <App preloadedQuery={preloadedQuery} />
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
