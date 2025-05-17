import React, { Suspense } from 'react';
import TaskView from './components/TaskView';

function App({ preloadedQuery }: { preloadedQuery: any }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TaskView preloadedQuery={preloadedQuery} />
    </Suspense>
  );
}

export default App;
