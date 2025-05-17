import React from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { relayEnvironment } from './relayEnvironment';
import TasksList from './TasksList';
import TaskForm from './TaskForm';

const App = () => (
  <RelayEnvironmentProvider environment={relayEnvironment}>
    <TaskForm onTaskCreated={() => window.location.reload()} />
    <TasksList />
  </RelayEnvironmentProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
