import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import type { TasksListQuery } from '../../__generated__/TasksListQuery.graphql';

const TasksList = () => {
  const data = useLazyLoadQuery<TasksListQuery>(
    graphql`
      query TasksListQuery {
        tasks {
          id
          title
          isCompleted
        }
      }
    `,
    {}
  );

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {data.tasks.map(task => (
          <li key={task.id}>
            {task.title} {task.isCompleted ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
