import { gql, useQuery } from "@apollo/client";

export const usePatientQuery = (id: string) =>
  useQuery(
    gql`
      query Patient($id: String!) {
        patient(id: $id) {
          id
          gender
          age
          occupation
          createdAt
          updatedAt
          deletedAt
        }
      }
    `,
    { variables: { id } }
  );
