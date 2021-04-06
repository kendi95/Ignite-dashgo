import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Input } from '../components/Form/Input';
import { validationYupResolver } from '../utils/validationYupResolver';

type SignInFormData = {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválida').required('E-mail obrigatorio'),
  password: yup.string().required('Senha obrigatoria')
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({ 
    resolver: validationYupResolver(schema)
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async ({ email, password }) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log({email, password});
  }

  return (
    <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            label="E-mail" 
            type="email" 
            error={errors.email}
            {...register('email')}
          />
          <Input 
            name="password" 
            label="Senha" 
            type="password" 
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button 
          type="submit" 
          marginTop="6" 
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
