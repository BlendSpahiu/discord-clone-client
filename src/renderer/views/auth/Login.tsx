import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import jwtDecode from 'jwt-decode';
import { Container, InputGroup, Typography } from '../../components';
import { Button } from '../../components/common/Button/Button';
import { Form } from '../../components/common/Form/Form';
import { Link } from '../../components/common/Link/Link';
import { Loader } from '../../components/common/Loader/Loader';
import { ToastrEnums } from '../../enums/toaster/Toaster.enums';
import { useLoginMutation } from '../../graphql/gen/graphql';
import { useToast } from '../../hooks/useToast/useToast';
import { LoginModel } from '../../interfaces/interfaces/Login.props';
import { AuthResponseModel } from '../../interfaces/models/Response.model';
import { LoginValidator } from '../../validators/Auth/Auth.validator';

export const Login = (): ReactElement => {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>({
    reValidateMode: 'onChange',
    resolver: joiResolver(LoginValidator()),
  });

  const [login, { loading }] = useLoginMutation({
    onCompleted: ({ login }) => {
      const decoded = jwtDecode(login?.token || '');
      localStorage.setItem('access_token', login?.token || '');

      localStorage.setItem(
        'user_id',
        (decoded as { [k: string]: string }).user_id
      );
      navigate('/main');
    },
    onError: (error) => {
      addToast({
        type: ToastrEnums.ERROR,
        title: 'Login Error',
        description: error.message,
      });
    },
  });

  const onSubmit = async (data: LoginModel) => {
    login({ variables: { email: data.email, password: data.password } });
  };

  document.body.classList.add('bg-image');

  return (
    <Container
      className="login-container"
      flex
      size="sm"
      flexDirection="col"
      justifyContent="center"
      spacing="xl"
      style={{ boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.6)' }}
      initial={{ opacity: 1 }}
      animate={{ x: [-500, 40, 0] }}
      exit={{ x: [0, 500] }}
      transition={{
        duration: 0.3,
        // delay: 0.2,
        // ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Typography as="h2" color="white" style={{ textAlign: 'center' }}>
        Welcome back!
      </Typography>
      <Typography
        as="p"
        style={{
          marginTop: 8,
          fontSize: 14,
          fontWeight: 400,
          color: 'lightgray',
          opacity: 0.8,
          textAlign: 'center',
        }}
      >
        We're so excited to see you again!
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          required
          labelProps={{
            label: 'Email',
            style: { marginTop: 32 },
          }}
          inputProps={{
            name: 'email',
            id: 'email',
            register,
          }}
          error={errors.email}
        />
        <InputGroup
          required
          labelProps={{
            label: 'Password',
            style: { marginTop: 32 },
          }}
          inputProps={{
            name: 'password',
            id: 'password',
            register,
            type: 'password',
          }}
          error={errors.password}
        />
        <Link to="#" style={{ marginTop: 12 }}>
          Forgot your password?
        </Link>
        <Button loading={loading} type="submit" style={{ marginTop: 24 }}>
          Log In
        </Button>
        <Typography as="p" style={{ display: 'flex', marginTop: 12 }} helpText>
          Need an account?
          <Link style={{ marginLeft: 4 }} to="/auth/register">
            Register
          </Link>
        </Typography>
      </Form>
    </Container>
  );
};
