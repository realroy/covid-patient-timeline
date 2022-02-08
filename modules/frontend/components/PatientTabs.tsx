import Link from "next/link";
import { FC, MouseEventHandler } from "react";

export type PatientTabsProps = {
  patients: { id: string }[];
  handleAddClick: MouseEventHandler<HTMLButtonElement>;
};

export const PatientTabs: FC<PatientTabsProps> = (props) => {
  return (
    <div>
      {props.patients.map((patient, index: number) => (
        <Link key={patient.id} href={`/patients/${patient.id}`} passHref>
          <a>
            <div>Patient</div>
            <div>{index + 1}</div>
          </a>
        </Link>
      ))}
      <button onClick={props.handleAddClick}>+</button>
    </div>
  );
};
