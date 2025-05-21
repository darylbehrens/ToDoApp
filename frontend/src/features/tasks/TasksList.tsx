import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks';
import type { TasksListQuery } from '../../__generated__/TasksListQuery.graphql';
import { useUpdateTask } from './UpdateTaskMutation';
import TaskForm from './TaskForm';

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

  const { updateTask } = useUpdateTask();

  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isInFlight}
        style={{
          flex: 1,
          padding: '0.5rem',
          fontSize: '1rem'
        }}
      />
      <button
        disabled={isInFlight || !title.trim()}
        onClick={handleSubmit}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TasksList;
