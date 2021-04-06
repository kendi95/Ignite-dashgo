import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile: FC<ProfileProps> = ({ showProfileData = true }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Alisson Kohatsu</Text>
          <Text color="gray.300" fontSize="small">
            kohatsukendi@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md" 
        name="Alisson Kohatsu" 
        src="https://avatars.githubusercontent.com/u/36816259?v=4" 
      />
    </Flex>
  );
}