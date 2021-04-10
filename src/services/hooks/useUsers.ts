import { useQuery, UseQueryOptions } from 'react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

type GetUsersResponse = {
  users: User[];
  totalCount: number;
}

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const response = await api.get('/api/users', {
    params: {
      page,
    }
  });

  const {data, headers} = response;

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user: User) => {
    return {
      ...user,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  });

  return { users, totalCount };
}

export const useUsers = (page: number, options: UseQueryOptions) => {
  return useQuery(
    ['@dashgo/users', page], 
    () => getUsers(page), 
    { staleTime: 1000 * 60 * 10, ...options }
  );
}