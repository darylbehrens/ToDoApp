import React from 'react';
import ReactDOM from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { relayEnvironment } from './relay/RelayEnvironment';
import TasksList from './features/tasks/TasksList';
import TaskForm from './features/tasks/TaskForm';

const App = () => (
  <RelayEnvironmentProvider environment={relayEnvironment}>
    <TaskForm onTaskCreated={() => window.location.reload()} />
    <TasksList />
  </RelayEnvironmentProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
