import { gql, useQuery } from "@apollo/client";

export const usePatientsQuery = () => useQuery(gql`
  query {
    patients {
      id
      gender
      age
      occupation
      createdAt
      updatedAt
      deletedAt
    }
  }
`);
