import { FC, MouseEventHandler } from "react";
import {
  PatientForm,
  PatientTabs,
  TimelineForm,
  TimelineFormData,
  Timelines,
} from "../components";

export type PatientTrackerPageProps = {
  patientId?: string;
  patients: any[];
  selectedPatient?: {
    id: string;
    age: number;
    occupation: string;
    gender: string;
  } | null;
  addPatient: (data: { data: any }) => any;
  deletePatient: (data: { id: string }) => any;
  updatePatient: (data: { data: any }) => any;
  onTimelineDelete: (id: string) => any;
  onTimelineSubmit: (data: TimelineFormData) => any;
  locationTypes?: string[] | null;
  timelines?: any[] | null;
};

export const PatientTrackerPage: FC<PatientTrackerPageProps> = (props) => {
  // const patientQuery = usePatientQuery()
  // const { addPatient, updatePatient, deletePatient } = usePatientMutation()

  // const { patients = [] } = patientQuery.data ?? {};

  // const [selectedTab, setSelectedTab] = useState<number | null>(
  //   patients.length ? 0 : null
  // );

  // const selectedPatient = selectedTab !== null ? patients[selectedTab] : null;

  // const timelineQuery = useTimelineQuery(selectedPatient?.id)

  const handleAddPatientClick: MouseEventHandler = async (e) => {
    await props.addPatient({ data: { gender: "", age: 0, occupation: "" } });
    e.preventDefault();
  };

  const handleRemovePatientClick: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    // @ts-ignore
    const { dataset = {} } = e.target;
    const { patientId } = dataset;

    if (patientId) {
      await props.deletePatient({ id: patientId });
    }

    e.preventDefault();
  };

  const onPatientInfoSubmit = async (data: any) => {
    const { id } = props.selectedPatient ?? {};
    await props.updatePatient({
      data: { ...data, age: parseInt(data.age, 10), id: id },
    });
  };

  return (
    <main>
      <h1>Covid Tracker</h1>
      <PatientTabs
        patients={props.patients}
        handleAddClick={handleAddPatientClick}
      />
      <div>
        <PatientForm
          patientId={props.selectedPatient?.id}
          onSubmit={onPatientInfoSubmit}
          onRemoveClick={handleRemovePatientClick}
          gender={props.selectedPatient?.gender}
          age={props.selectedPatient?.age}
          occupation={props.selectedPatient?.occupation}
        />
        <Timelines
          timelines={props.timelines ?? []}
          patientAge={props.selectedPatient?.age}
          patientGender={props.selectedPatient?.gender}
          patientOccupation={props.selectedPatient?.occupation}
          onTimelineDelete={props.onTimelineDelete}
        />
        <TimelineForm
          onSubmit={props.onTimelineSubmit}
          locationTypes={props.locationTypes ?? []}
        />
      </div>
    </main>
  );
};
