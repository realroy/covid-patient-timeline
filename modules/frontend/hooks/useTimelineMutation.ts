import { gql, useMutation } from "@apollo/client";

export const useTimelineMutation = () => {
  const [addTimeline] = useMutation(gql`
    mutation AddTimeline(data: AddPatientInputType!) {
      addPatient(data: AddPatientInputType!) {
        id
      }
    }
  `);

  const [removeTimeline] = useMutation(gql`
    mutation RemoveTimeline(id: String!) {
      removeTimeline(id: String!): {
        id
      }
    } 
  `);

  return {
    addTimeline,
    removeTimeline,
  };
};
