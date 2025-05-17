import React, { Suspense } from 'react';
import TestComponent from './components/TestComponent';

function App({ preloadedQuery }: { preloadedQuery: any }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestComponent preloadedQuery={preloadedQuery} />
    </Suspense>
  );
}

export default App;
