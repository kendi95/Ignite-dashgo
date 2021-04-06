import { ForwardRefRenderFunction, forwardRef } from "react";
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldErrors } from 'react-hook-form';

interface InputCustomProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldErrors;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputCustomProps> = 
  ({ name, label, error = null, ...rest }, ref) => {

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>} 

      <ChakraInput 
        id={name}
        name={name}
        focusBorderColor="pink.500"
        background="gray.900"
        variant="filled"
        _hover={{   
          bgColor: "gray.900", 
          borderColor: "pink.500"
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);