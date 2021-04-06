import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType, FC } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  title: string;
  href: string;
}

export const NavLink: FC<NavLinkProps> = ({ icon, title, href, ...rest }) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}