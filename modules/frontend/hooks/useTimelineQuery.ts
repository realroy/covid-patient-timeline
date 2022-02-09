import { gql, useQuery } from "@apollo/client";

export const useTimelineQuery = (patientId: string) =>
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
    { variables: { patientId } }
  );
