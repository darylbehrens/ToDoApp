import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import type { TaskViewQuery } from '../../__generated__/TaskViewQuery.graphql';
import { useUpdateTask } from './UpdateTaskMutation';
import { useDeleteTask } from './DeleteTaskMutation';
import TaskForm from './TaskForm';

const TaskView = () => {
  const data = useLazyLoadQuery<TaskViewQuery>(
    graphql`
      query TaskViewQuery {
        tasks {
          id
          title
          isCompleted
        }
      }
    `,
    {}
  );

  const { updateTask } = useUpdateTask();
  const { deleteTask } = useDeleteTask();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <h2>Tasks</h2>
        <TaskForm onTaskCreated={() => window.location.reload()} />
        <ul>
          {data.tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={(e) => updateTask(task.id, e.target.checked)}
              />{' '}
              {task.title} {task.isCompleted ? '✅' : '❌'}{' '}
              <button
                onClick={() =>
                  deleteTask(task.id, () => window.location.reload())
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskView;
