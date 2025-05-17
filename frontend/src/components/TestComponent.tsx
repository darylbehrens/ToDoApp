import { graphql, usePreloadedQuery } from 'react-relay/hooks';
import TestComponentQuery from '../__generated__/TestComponentQuery.graphql';


const query = graphql`
  query TestComponentQuery {
    tasks {
      id
      title
      isCompleted
    }
  }
`;

export default function TestComponent({ preloadedQuery }: { preloadedQuery: any }) {
  const data = usePreloadedQuery(TestComponentQuery, preloadedQuery);

  return (
    <div>
      <h2>Tasks</h2>
      {data.tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {data.tasks.map((task) => (
            <li key={task.id}>
              {task.title} — {task.isCompleted ? '✅' : '❌'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
