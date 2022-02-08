import { gql, useQuery } from "@apollo/client";

export const useTimelineQuery = (patienceId: string) =>
  useQuery(
    gql`
      query Timeline($patientId: String!) {
        timelines(patientId: $patientId) {
          id
          detail
          from
          to
          locationType
          locationName
        }
      }
    `,
    { variables: { patienceId } }
  );
