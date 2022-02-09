import { gql, useMutation } from "@apollo/client";

export const useTimelineMutation = () => {
  const [_addTimeline] = useMutation(gql`
    mutation AddTimeline($data: AddTimelineInputType!) {
      addTimeline(data: $data) {
        id
      }
    }
  `);

  const [_removeTimeline] = useMutation(gql`
    mutation RemoveTimeline($id: String!) {
      removeTimeline(id: $id) {
        id
      }
    }
  `);

  return {
    addTimeline: (variables: any) => _addTimeline({ variables }),
    removeTimeline: (variables: any) => _removeTimeline({ variables }),
  };
};
