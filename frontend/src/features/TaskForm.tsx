import React, { useState } from 'react';
import { TextField, Button } from '@adobe/react-spectrum';
import { useCreateTask } from './tasks/CreateTaskMutation';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const { commit, isInFlight } = useCreateTask();

  const handleSubmit = () => {
    if (!title.trim()) return;

    commit({
      variables: {
        input: { title },
      },
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <TextField
        label="New Task"
        value={title}
        onChange={setTitle}
        isDisabled={isInFlight}
      />
      <Button type="submit" variant="cta" isDisabled={isInFlight}>
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
