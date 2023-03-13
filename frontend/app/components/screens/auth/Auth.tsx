import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/ui/form-elements/Button';
import Heading from '@/ui/heading/Heading';

import { useAuth } from '@/hooks/useAuth';

import Meta from '@/utils/meta/Meta';

import { useAuthRedirect } from './useAuthRedirect';

import { IAuthInput } from './auth.interface';

import AuthFields from './AuthFields/AuthFields';

import styles from './Auth.module.scss';

const Auth: React.FC = () => {
  useAuthRedirect();
  const { isLoading } = useAuth();

  const [type, setType] = useState<'login' | 'register'>('login');
  const { register, handleSubmit, formState, reset } = useForm<IAuthInput>({ mode: 'onChange' });

  const login = (data: any) => {
    console.table(data);
  };

  const registerInput = (data: any) => {
    console.table(data);
  };

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === 'login') {
      login(data);
    } else if (type === 'register') {
      registerInput(data);
    }
    reset();
  };

  return (
    <Meta title="Auth">
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading title="Auth" className="mb-6" />
          <AuthFields register={register} formState={formState} isPasswordRequired />
          <div className={styles.buttons}>
            <Button
              type="submit"
              onClick={() => {
                setType('login');
              }}
              disabled={isLoading}
            >
              Login
            </Button>
            <Button
              type="submit"
              onClick={() => {
                setType('register');
              }}
              disabled={isLoading}
            >
              Register
            </Button>
          </div>
        </form>
      </section>
    </Meta>
  );
};

export default Auth;
