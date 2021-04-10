import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export const PaginationItem: FC<PaginationItemProps> = ({ 
  isCurrent = false, 
  number,
  onPageChange
}) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        borderRadius="40"
        disabled
        _disabled={{
          background: "pink.500",
          cursor: "default"
        }}
      >{number}</Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      borderRadius="40"
      background="gray.700"
      _hover={{
        background: "gray.500"
      }}
      onClick={() => onPageChange(number)}
    >{number}</Button>
  );
  
}