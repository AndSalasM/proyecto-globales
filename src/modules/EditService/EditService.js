import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
//import { useTranslation } from "../../../shared/hooks";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure,
  Text,
  FormControl,
  FormLabel,
  Box,
  Input,
  Stack,
  HStack,
  Textarea,
  InputGroup,
  useColorModeValue,
  Flex,
  EditablePreview,
  EditableInput,
  Editable,
  InputRightElement,
  IconButton,
  IconButtonProps,
  Heading,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
} from "@chakra-ui/react";

import { CheckIcon, CloseIcon, ViewIcon, AddIcon } from "@chakra-ui/icons";

import {
  Experience,
  PortfolioItem,
  Education,
  Service,
  OthersTitles,
} from "./components";

const EditService = () => {
  return (
    <Box
      maxW={"900px"}
      w={"100%"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Heading>Insertar un servicio</Heading>

      <Tabs>
        <TabList overflowX="auto">
          <Tab>Servicio</Tab>
          <Tab>Experiencia</Tab>
          <Tab>Educacion</Tab>
          <Tab>Otros Titulos</Tab>
          <Tab>Algunos de mis proyectos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Service />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <Experience />
          </TabPanel>
          <TabPanel>
            <Education />
          </TabPanel>
          <TabPanel>
            <OthersTitles />
          </TabPanel>
          <TabPanel>Algunos de mis proyectos</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default EditService;
