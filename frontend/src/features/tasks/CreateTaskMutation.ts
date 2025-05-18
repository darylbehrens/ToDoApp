import { graphql, useMutation } from 'react-relay/hooks';
import { CreateTaskMutation } from '../../__generated__/CreateTaskMutation.graphql';

const createTaskMutation = graphql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      title
      isCompleted
    }
  }
`;

export function useCreateTask() {
  const [commit, isInFlight] = useMutation<CreateTaskMutation>(createTaskMutation);
  return { commit, isInFlight };
}
