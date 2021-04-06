import { yupResolver } from "@hookform/resolvers/yup"
import { AnyObjectSchema } from 'yup';

export const validationYupResolver = (schema: AnyObjectSchema) => {
  return yupResolver(schema)
}