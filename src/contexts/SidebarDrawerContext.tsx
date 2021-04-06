import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, FC, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {

}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn);

export const SidebarDrawerProvider: FC<SidebarDrawerProviderProps> = ({ children }) => {
  const disclosure = useDisclosure();
  const { asPath } = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);