import { HStack, Stack, Box } from "@chakra-ui/react";
import { FC } from "react";
import { PaginationItem } from "./PaginationItem";

export const Pagination: FC = () => {
  return (
    <Stack
      flexDirection={['column', 'row']}
      spacing="6"
      marginTop="8"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </HStack>
    </Stack>
  );
}