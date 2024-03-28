import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Link,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Sidebar = () => {
  const border = useBreakpointValue({ base: undefined, sm: "none" }, { ssr: false });

  return (
    <>
      <Heading
        as="h4"
        color="appBlue.600"
        fontSize="md"
        fontWeight="bold"
        mt={2}
        mb={4}
        mx={4}
      >
        All Categories
      </Heading>
      {/* Accordion start */}
      <Accordion allowMultiple fontSize="sm">
        {/* 2nd item start */}
        <AccordionItem borderTop={border} borderBottom={border}>
          <AccordionButton py={3} borderRadius="md">
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm" fontWeight="semibold">
                Home and Office
              </Heading>
            </Box>
            <AccordionIcon color="appBlue.600" mr={1} />
          </AccordionButton>
          {/* Children */}
          <AccordionPanel ml={6}>
            <VStack spacing={3} align="initial">
              <Link>Office Products</Link>
              <Link>Large Appliances</Link>
              <Link>Furniture</Link>
              <Link>Small Appliances</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        {/* 2nd item end */}
        {/* 3rd item start */}
        <AccordionItem borderTop={border} borderBottom={border}>
          <AccordionButton py={3} borderRadius="md">
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm" fontWeight="semibold">
                Phones and Tablets
              </Heading>
            </Box>
            <AccordionIcon color="appBlue.600" mr={1} />
          </AccordionButton>
          {/* Children */}
          <AccordionPanel ml={6}>
            <VStack spacing={3} align="initial">
              <Link>Mobile Phones</Link>
              <Link>Tablets</Link>
              <Link>Mobile Accessories</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        {/* 3rd item end */}
        {/* 4th item start */}
        <AccordionItem borderTop={border} borderBottom={border}>
          <AccordionButton py={3} borderRadius="md">
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm" fontWeight="semibold">
                Computing
              </Heading>
            </Box>
            <AccordionIcon color="appBlue.600" mr={1} />
          </AccordionButton>
          {/* Children */}
          <AccordionPanel ml={6}>
            <VStack spacing={3} align="initial">
              <Link>Computers</Link>
              <Link>Data Storage</Link>
              <Link>Computer Accessories</Link>
              <Link>Printers</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        {/* 4th item end */}
        {/* 5th item start */}
        <AccordionItem borderTop={border} borderBottom={border}>
          <AccordionButton py={3} borderRadius="md">
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm" fontWeight="semibold">
                Electronics
              </Heading>
            </Box>
            <AccordionIcon color="appBlue.600" mr={1} />
          </AccordionButton>
          {/* Children */}
          <AccordionPanel ml={6}>
            <VStack spacing={3} align="initial">
              <Link>Television & Video</Link>
              <Link>Cameras & Photos</Link>
              <Link>Home Audio</Link>
              <Link>Generators & Portable Power</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        {/* 5th item end */}
        {/* 6th item start */}
        <AccordionItem borderTop={border} borderBottom={border}>
          <AccordionButton py={3} borderRadius="md">
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm" fontWeight="semibold">
                Gaming
              </Heading>
            </Box>
            <AccordionIcon color="appBlue.600" mr={1} />
          </AccordionButton>
          {/* Children */}
          <AccordionPanel ml={6}>
            <VStack spacing={3} align="initial">
              <Link>Playstation</Link>
              <Link>Xbox</Link>
              <Link>Nintendo</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        {/* 6th item end */}
      </Accordion>
      {/* Accordion end */}
    </>
  );
};

export default Sidebar;
