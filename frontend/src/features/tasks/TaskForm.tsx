import React, { useState } from 'react';
import { useCreateTask } from './CreateTaskMutation';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const { commit, isInFlight } = useCreateTask();

  const handleSubmit = () => {
    if (!title.trim()) return;

    commit({
      variables: { input: { title } },
      onCompleted: () => {
        setTitle('');
        if (onTaskCreated) onTaskCreated();
      },
      onError: (err) => {
        console.error('Task creation failed', err);
      },
    });
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', background: 'pink' }}>
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
          cursor: 'pointer',
          backgroundColor: 'green',
          color: 'white'
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
