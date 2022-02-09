import Link from "next/link";
import { FC, MouseEventHandler } from "react";
import { TabList, Tab, Box, Button, Flex } from "@chakra-ui/react";

export type PatientTabsProps = {
  patients: { id: string }[];
  
  handleAddClick: MouseEventHandler<HTMLButtonElement>;
};

export const PatientTabs: FC<PatientTabsProps> = (props) => {
  return (
    <Flex justifyContent={'space-between'}>
      <TabList>
        {props.patients.map((patient, index: number) => (
          <Link key={patient.id} href={`/patients/${patient.id}`} passHref>
            <a>
              <Tab>
                <Box>
                  <Box fontSize="xs">Patient</Box>
                  <Box fontWeight={600} fontSize="2xl">{index + 1}</Box>
                </Box>
              </Tab>
            </a>
          </Link>
        ))}
      </TabList>
      <Box>
        <Button onClick={props.handleAddClick} sx={{ borderRadius: "100%" }}>
          +
        </Button>
      </Box>
    </Flex>
  );
};
