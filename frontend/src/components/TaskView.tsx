import { graphql, usePreloadedQuery } from 'react-relay/hooks';
import TaskViewQuery from '../__generated__/TaskViewQuery.graphql'; // ✅ go up one level

const query = graphql`
  query TaskViewQuery {
    tasks {
      id
      title
      isCompleted
    }
  }
`;

export default function TaskView({ preloadedQuery }: { preloadedQuery: any }) {
  const data = usePreloadedQuery(TaskViewQuery, preloadedQuery);

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
