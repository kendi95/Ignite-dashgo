import { FC } from "react";
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { Profile } from "./Profile";
import { Notifications } from "./Notifications";
import { Search } from "./Search";
import { Logo } from "./Logo";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export const Header: FC = () => {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex 
      width="100%" 
      as="header" 
      height="20" 
      marginX="auto" 
      marginTop="4" 
      align="center" 
      paddingX="6" 
      maxWidth={1280}
    >

      {!isWideVersion && (
        <IconButton 
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen} 
          marginRight="2"
        >

        </IconButton>
      )}

      <Logo />

      {isWideVersion && <Search />}
    
      <Flex
        align="center"
        marginLeft="auto"
      >
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  );
}