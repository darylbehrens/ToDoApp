import React, { useState } from 'react';
import { TextField, Button, Flex } from '@adobe/react-spectrum';
import { useCreateTask } from './CreateTaskMutation';

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
    <Flex direction="column" gap="size-200" width="size-3600">
      <TextField
        label="New Task"
        value={title}
        onChange={setTitle}
        isDisabled={isInFlight}
      />
      <Button
        variant="cta"
        isDisabled={isInFlight || !title.trim()}
        onPress={handleSubmit}
        UNSAFE_style={{
          backgroundColor: title.trim() ? 'red' : 'lightgray',
          color: 'white',
          height: '40px',
        }}
      >
        Add Task
      </Button>
    </Flex>
  );
};

export default TaskForm;
