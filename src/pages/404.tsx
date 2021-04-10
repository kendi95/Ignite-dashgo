import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiArrowLeftLine, RiEmotionSadLine } from 'react-icons/ri';

export default function NotFound() {
  const { replace, asPath, route } = useRouter();
  const [pathPage, setPathPage] = useState('');

  useEffect(() => {
    if (asPath !== '/404') {
      setPathPage(asPath)
      replace('/404');
    }
  }, []);

  return (
    <Flex 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
    >
      <Icon 
        as={RiEmotionSadLine} 
        fontSize="96" 
        color="red.600"
      />
      <Text marginTop="4" color="red.300" fontSize="20" fontWeight="bold">
        A página {pathPage.split('/')[1]} não foi encontrada.
      </Text>

      <Link href="/dashboard" passHref>
        <Button
          leftIcon={<Icon as={RiArrowLeftLine} fontSize="16" />}
          background="gray.800"
          transitionDuration="1"
          _hover={{
            background: 'gray.700',
          }}
          _focus={{
            outline: 'none'
          }}
          marginTop="20"
          borderRadius="40"
        >
          Voltar para página Dashboard
        </Button>
      </Link>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: false
  }
}