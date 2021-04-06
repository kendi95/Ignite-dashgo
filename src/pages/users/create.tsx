import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { validationYupResolver } from "../../utils/validationYupResolver";

type CreateUserDataForm = {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Nome obrigatorio'),
  email: yup.string().email('E-mail inválida').required('E-mail obrigatorio'),
  password: yup.string().required('Senha obrigatoria').min(6, 'Mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null,
    yup.ref('password')
  ], 'As senhas precisam ser iguais')
});

export default function Create() {
  const { register, handleSubmit, formState } = useForm({ 
    resolver: validationYupResolver(schema)
  });
  const { errors } = formState;
  const { back } = useRouter();

  const handleCreate: SubmitHandler<CreateUserDataForm> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
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
          as="form"
          flex="1" 
          borderRadius={8} 
          background="gray.800"
          padding={['6', '8']}
          onSubmit={handleSubmit(handleCreate)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid gap="6" minChildWidth="240px" padding="8" width="100%">
              <Input 
                name="name" 
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              />
              <Input 
                name="email" 
                label="Seu e-mail" 
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid gap="6" minChildWidth="240px" padding="8" width="100%">
              <Input 
                name="passowd" 
                type="password" 
                label="Sua senha" 
                error={errors.password}
                {...register('password')}
              />
              <Input 
                name="password_confirmation" 
                type="password" 
                label="Confirmar sua senha" 
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Button 
                onClick={back}
                colorScheme="whiteAlpha"
                borderRadius="40"
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                colorScheme="pink"
                borderRadius="40"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}