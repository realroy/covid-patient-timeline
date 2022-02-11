import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { PatientTrackerPage } from "../components";
import { usePatientMutation, usePatientsQuery } from "../hooks";

const Home: NextPage = () => {
  const patientsQuery = usePatientsQuery();
  const { patients = [] } = patientsQuery.data ?? {};

  const { addPatient } = usePatientMutation();

  const handleAddPatient = async (data: any) => {
    await addPatient(data);
    await patientsQuery.refetch();
  };

  const router = useRouter()
  if (patients?.length) {
    router.push(`/patients/${patients[0].id}`)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PatientTrackerPage
        patients={patients}
        selectedPatient={null}
        addPatient={handleAddPatient}
      />
    </div>
  );
};

export default Home;
