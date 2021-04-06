import { 
  Box, 
  Button, 
  Checkbox, 
  Flex, 
  Heading, 
  Icon, 
  Table, 
  Tbody, 
  Td, 
  Text, 
  Th, 
  Thead, 
  Tr, 
  useBreakpointValue
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from 'next/link';

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";


export default function Users() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Box>
      <Header />

      <Flex 
        width="100%" 
        marginY="6" 
        maxWidth={1280} 
        marginX="auto" 
        paddingX="6"
      >
        <Sidebar />

        <Box 
          flex="1" 
          borderRadius={8} 
          background="gray.800"
          padding="8"
        >
          <Flex 
            marginBottom="8" 
            justifyContent="space-between" 
            alignItems="center"
          >
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button 
                as="a" 
                size="sm" 
                fontSize="sm" 
                colorScheme="pink"
                borderRadius="40"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="6" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alisson Kohatsu</Text>
                    <Text fontSize="sm" color="gray.300">kohatsukendi@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm" 
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      borderRadius="40"
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>

              <Tr>
                <Td paddingX={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alisson Kohatsu</Text>
                    <Text fontSize="sm" color="gray.300">kohatsukendi@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm" 
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      borderRadius="40"
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>

              <Tr>
                <Td paddingX={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alisson Kohatsu</Text>
                    <Text fontSize="sm" color="gray.300">kohatsukendi@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>03 de Abril, 2021</Td>}
                {isWideVersion && (
                  <Td>
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm" 
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      borderRadius="40"
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}