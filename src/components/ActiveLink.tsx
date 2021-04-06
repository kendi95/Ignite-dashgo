import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, FC } from "react";

interface ActiveLinkProps extends LinkProps{
  children: JSX.Element
}

export const ActiveLink: FC<ActiveLinkProps> = ({ children, ...rest }) => {
  const { asPath } = useRouter();

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: 
          asPath === rest.href || 
          asPath.includes(rest.href as string) ? 'pink.400' : 'gray.50'
      })}
    </Link>
  );
}