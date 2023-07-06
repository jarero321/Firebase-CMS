import { TypeWithKey } from '@/models/TypeWithKey.model';

export const inputValidation = (
  type: string,
  required: boolean
): TypeWithKey<string> => {
  const optionsType: TypeWithKey<{}> = {
    default: {},
    text: {
      required: { value: required, message: 'Campo obligatorio' },
    },
    email: {
      required: { value: required, message: 'Campo obligatorio' },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
        message: 'Introduce un email valido',
      },
    },
    password: {
      required: { value: required, message: 'Campo obligatorio' },
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?])[\w\d-+_!@#$%^&*.,?]{8,}$/,
        message:
          'La contraseña debe contener 8 caracteres conformados por al menos 1 número, 1 carácter especial y 1 mayúscula.',
      },
    },
  };

  return optionsType[type] || optionsType.default;
};
