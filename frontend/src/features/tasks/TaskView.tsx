import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import TaskForm from './TaskForm';

const TASK_VIEW_QUERY = graphql`
  query TaskViewQuery {
    tasks {
      id
      title
      isCompleted
    }
  }
`;

export default function TaskView() {
  const data = useLazyLoadQuery(
    TASK_VIEW_QUERY,
    {},
    { fetchPolicy: 'network-only' }
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Tasks</h2>

      <TaskForm onTaskCreated={() => window.location.reload()} />

      {!data?.tasks?.length ? (
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
