import { FC, MouseEventHandler, useState } from "react";
import {
  Box,
  Container,
  Tabs,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  CloseButton,
  useToast,
} from "@chakra-ui/react";

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
  deletePatient?: (data: { id: string }) => any;
  updatePatient?: (data: { data: any }) => any;
  onTimelineDelete?: (id: string) => any;
  onTimelineSubmit?: (data: TimelineFormData) => any;
  locationTypes?: [string, string][] | null;
  timelines?: any[] | null;
  selectedIndex?: number;
};

export const PatientTrackerPage: FC<PatientTrackerPageProps> = (props) => {
  const toast = useToast();

  const handleAddPatientClick: MouseEventHandler = async (e) => {
    try {
      await props.addPatient({ data: { gender: "", age: 0, occupation: "" } });
      toast({
        title: "Add patient successfully",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: (error as Error)?.message ?? "",
        status: "error",
        isClosable: true,
      });
    }

    e.preventDefault();
  };

  const handleRemovePatientClick: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    // @ts-ignore
    const { dataset = {} } = e.target;
    const { patientId } = dataset;

    if (patientId) {
      try {
        await props.deletePatient?.({ id: patientId });
        toast({
          title: "Remove patient successfully",
          status: "success",
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Something went wrong!",
          description: (error as Error)?.message ?? "",
          status: "error",
          isClosable: true,
        });
      }
    }

    e.preventDefault();
  };

  const onPatientInfoSubmit = async (data: any) => {
    const { id } = props.selectedPatient ?? {};
    try {
      await props.updatePatient?.({
        data: { ...data, age: parseInt(data.age, 10), id: id },
      });
      toast({
        title: "Update patient successfully",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: (error as Error)?.message ?? "",
        status: "error",
        isClosable: true,
      });
    }
  };

  const [showTimelineModal, setShowTimelineModal] = useState(false);

  const handleClose = () => setShowTimelineModal(false);

  const handleTimelineSubmit = async (data: TimelineFormData) => {
    try {
      await props?.onTimelineSubmit?.(data);
      toast({
        title: "Submit timeline successfully",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: (error as Error)?.message ?? "",
        status: "error",
        isClosable: true,
      });
    }
  };
  const handleTimelineModalSubmit = (data: TimelineFormData) => {
    handleTimelineSubmit(data)
    handleClose();
  };

  return (
    <Box as="main">
      <Modal isOpen={showTimelineModal} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent p="2" mx="3">
          <Box display="flex" justifyContent={"space-between"}>
            <Box></Box>
            <Box fontWeight={"bolder"} textAlign="center" fontSize={"xl"}>
              Add Timeline
            </Box>
            <CloseButton onClick={handleClose} />
          </Box>
          <TimelineForm
            onSubmit={handleTimelineModalSubmit}
            locationTypes={props.locationTypes ?? []}
          />
        </ModalContent>
      </Modal>
      <Container maxW="container.xl">
        <Box textStyle={"h1"} fontSize="4xl" textAlign="center">
          Covid Tracker
        </Box>
        <Tabs variant="enclosed" isFitted index={props.selectedIndex}>
          <PatientTabs
            patients={props.patients}
            handleAddClick={handleAddPatientClick}
          />
          {props.selectedPatient && (
            <div>
              <PatientForm
                patientId={props.selectedPatient?.id}
                onSubmit={onPatientInfoSubmit}
                onRemoveClick={handleRemovePatientClick}
                gender={props.selectedPatient?.gender}
                age={props.selectedPatient?.age}
                occupation={props.selectedPatient?.occupation}
              />
              <Flex flexDirection={{ base: "column", md: "row" }}>
                <Box flex="2">
                  <Timelines
                    timelines={props.timelines ?? []}
                    patientAge={props.selectedPatient?.age}
                    patientGender={props.selectedPatient?.gender}
                    patientOccupation={props.selectedPatient?.occupation}
                    onTimelineDelete={props?.onTimelineDelete}
                    onAddTimelineClick={() => setShowTimelineModal(true)}
                  />
                </Box>
                <Box flex="1" display={{ base: "none", md: "block" }}>
                  <TimelineForm
                    onSubmit={handleTimelineSubmit}
                    locationTypes={props.locationTypes ?? []}
                  />
                </Box>
              </Flex>
            </div>
          )}
        </Tabs>
      </Container>
    </Box>
  );
};
