import * as yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

const LoginValidatorSchema = yup.object().shape({
  cpf: yup
    .string()
    .required('Informe seu CPF.')
    .test('cpf-validator', 'Informe um CPF válido.', value =>
      cpf.isValid(value),
    ),
  birthday: yup
    .date()
    .nullable()
    .typeError('Informe uma data de nascimento válida.')
    .required('Informe sua data de nascimento.'),
});

export { LoginValidatorSchema };
