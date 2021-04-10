import { HStack, Stack, Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCount: number;
  perPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0);
}

export const Pagination: FC<PaginationProps> = ({ 
  totalCount,
  currentPage = 1,
  perPage = 10,  
  onPageChange,
}) => {
  const lastPage = Math.floor(totalCount / perPage);
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];
  const nextPages = currentPage < lastPage
    ? generatePagesArray(
        currentPage, 
        Math.min(currentPage + siblingsCount, lastPage)
      )
    : [];

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

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange}  />
            {currentPage > (2 + siblingsCount) && (
              <Text 
                color="gray.300" 
                width="8" 
                textAlign="center"
              >...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem 
            key={page} 
            number={page}
            onPageChange={onPageChange} 
          />
        ))}
        <PaginationItem 
          number={currentPage} 
          isCurrent
          onPageChange={onPageChange} 
        />
        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem 
            key={page} 
            number={page}
            onPageChange={onPageChange}
          />
        ))}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text 
                color="gray.300" 
                width="8" 
                textAlign="center"
              >...</Text>
            )}
            <PaginationItem 
              number={lastPage}
              onPageChange={onPageChange}
            />
          </>
        )}

      </HStack>
    </Stack>
  );
}