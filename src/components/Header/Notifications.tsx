import { HStack, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export const Notifications: FC = () => {
  return (
    <HStack 
      spacing={['8', '6']}
      marginX={['8', '6']}
      paddingRight={['8', '6']}
      paddingY="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}