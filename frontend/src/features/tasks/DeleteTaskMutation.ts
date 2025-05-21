import { graphql, useMutation } from 'react-relay/hooks';

const mutation = graphql`
  mutation DeleteTaskMutation($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      deletedTaskId
    }
  }
`;

export function useDeleteTask() {
  const [commit, isInFlight] = useMutation(mutation);

  const deleteTask = (id: string, onCompleted?: () => void) => {
    commit({
      variables: {
        input: { id: parseInt(id) } // ✅ backend expects Int, not String
      },
      onCompleted,
      onError: (err) => {
        console.error('Delete failed', err);
      },
    });
  };

  return { deleteTask, isInFlight };
}
