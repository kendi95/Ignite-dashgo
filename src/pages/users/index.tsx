import { 
  Box, 
  Button, 
  Checkbox, 
  Flex, 
  Heading, 
  Icon, 
  Link, 
  Spinner, 
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
import NextLink from 'next/link';

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface UsersProps {
  users: User[];
}

export default function Users({ users }: UsersProps) {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isFetching } = useUsers(page, {
    initialData: users
  });
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const getUserById = async (user_id: number): Promise<User> => {
    const { data } = await api.get(`/api/users/${user_id}`);
    return data;
  }

  const handlePrefetchUser =  async (user_id: number) => {
    await queryClient.prefetchQuery(
      ['@dashgo/users', user_id],
      () => getUserById(user_id),
      { staleTime: 1000 * 60 * 10 }
    );
  }

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
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && 
                <Spinner 
                  size="sm" 
                  color="gray.500"
                  marginLeft="4" 
                />
              }
            </Heading>
            <NextLink href="/users/create" passHref>
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
            </NextLink>
          </Flex>

          { isLoading ? (
            <Flex justifyContent="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justifyContent="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map((user: User) => (
                    <Tr key={user.id}>
                      <Td paddingX={['4', '4', '6']}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Link 
                            color="purple.400"
                            onMouseEnter={() => handlePrefetchUser(Number(user.id))}
                          >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.created_at}</Td>}
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
                  ))}
                </Tbody>
              </Table>
              <Pagination  
                totalCount={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { users, totalCount } = await getUsers(1);
  
  return {
    props: {
      users
    }
  }
}