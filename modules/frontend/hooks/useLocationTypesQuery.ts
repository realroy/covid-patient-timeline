import { gql, useQuery } from "@apollo/client"

export const useLocationTypesQuery = () => {
  const locationTypesQuery = useQuery(gql`
    query {
      locationTypes
    }
  `)

  return locationTypesQuery
}