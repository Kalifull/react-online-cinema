import { FormState, UseFormRegister } from 'react-hook-form';

import Field from '@/ui/form-elements/Field';

import { validateEmail } from '@/shared/regex';

interface IAuthFields {
  register: UseFormRegister<any>;
  formState: FormState<any>;
  isPasswordRequired?: boolean;
}

const AuthFields: React.FC<IAuthFields> = ({
  register,
  formState: { errors },
  isPasswordRequired = false,
}) => {
  return (
    <>
      <Field
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: validateEmail,
            message: 'Please enter a valid email address',
          },
        })}
        placeholder="Email"
        error={errors.email}
        autoComplete="off"
      />
      <Field
        {...register(
          'password',
          isPasswordRequired
            ? {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              }
            : {}
        )}
        placeholder="Password"
        type="password"
        error={errors.password}
        autoComplete="off"
      />
    </>
  );
};

export default AuthFields;
