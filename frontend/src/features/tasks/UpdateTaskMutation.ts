import { graphql, useMutation } from 'react-relay/hooks';

const mutation = graphql`
  mutation UpdateTaskMutation($input: UpdateTaskInput!) {
    updateTaskStatus(input: $input) {
      id
      isCompleted
    }
  }
`;

export function useUpdateTask() {
  const [commit, isInFlight] = useMutation(mutation);

  const updateTask = (id: string, isCompleted: boolean) => {
    commit({
      variables: { input: { id: parseInt(id), isCompleted } },
      onError: (err) => console.error('Failed to update task', err),
    });
  };

  return { updateTask, isInFlight };
}
