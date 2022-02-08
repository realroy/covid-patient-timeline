import { gql, useMutation } from "@apollo/client";

export const usePatientMutation = () => {
  const [addPatient, addPatientMutation] = useMutation(gql`
    mutation AddPatient($data: AddPatientInputType!) {
      addPatient(data: $data) {
        id
      }
    }
  `);

  const [updatePatient, updatePatientMutation] = useMutation(gql`
    mutation updatePatient($data: UpdatePatientInputType!) {
      updatePatient(data: $data) {
        id
      }
    }
  `);

  const [deletePatient, deletePatientMutation] = useMutation(gql`
    mutation DeletePatient($id: String!) {
      deletePatient(id: $id) {
        id
      }
    }
  `);

  return {
    addPatient: (variables: any) => addPatient({ variables }),
    updatePatient: (variables: any) => updatePatient({ variables }),
    deletePatient: (variables: any) => deletePatient({ variables }),
  };
};
