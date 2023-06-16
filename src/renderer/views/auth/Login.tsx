import { ReactElement, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { AnimatePresence } from 'framer-motion';
import jwtDecode from 'jwt-decode';
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  FieldError,
  InputGroup,
  Label,
  Typography,
} from '../../components';
import { Button } from '../../components/common/Button/Button';
import { Form } from '../../components/common/Form/Form';
import { Link } from '../../components/common/Link/Link';
import { Loader } from '../../components/common/Loader/Loader';
import { ToastrEnums } from '../../enums/toaster/Toaster.enums';
import { useLoginMutation } from '../../graphql/gen/graphql';
import { useToast } from '../../hooks/useToast/useToast';
import { LoginModel } from '../../interfaces/interfaces/Login.props';
import { RegisterModel } from '../../interfaces/interfaces/Register.props';
import { AuthResponseModel } from '../../interfaces/models/Response.model';
import { days, months, years } from '../../static/date/date';
import {
  LoginValidator,
  RegisterValidator,
} from '../../validators/Auth/Auth.validator';
import { AuthProps } from './Auth.props';

export const Login = ({ onClick }: AuthProps): ReactElement => {
  const [dayOfBirth, setDayOfBirth] = useState<string>('');
  const [monthOfBirth, setMonthOfBirth] = useState<string>('');
  const [yearOfBirth, setYearOfBirth] = useState<string>('');
  const [dayMenu, setDayMenu] = useState<boolean>(false);
  const [monthMenu, setMonthMenu] = useState<boolean>(false);
  const [yearMenu, setYearMenu] = useState<boolean>(false);
  const [activeAuth, setActiveAuth] = useState<number>(0);

  const navigate = useNavigate();
  const { addToast } = useToast();
  const { pathname } = useLocation();
  const dayRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>({
    reValidateMode: 'onChange',
    resolver: joiResolver(LoginValidator()),
  });

  const {
    register: registerForm,
    handleSubmit: registerSubmit,
    formState: { errors: registerErrors },
    getValues,
    setValue,
  } = useForm<RegisterModel>({
    reValidateMode: 'onChange',
    resolver: joiResolver(RegisterValidator()),
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

  const handleSetDayOfBirth = (value: string) => () => {
    setDayOfBirth(value);
    setDayMenu(false);
    setValue('date_of_birth', `${value}/${monthOfBirth}/${yearOfBirth}`);
  };
  const handleSetMonthOfBirth = (value: string) => () => {
    setMonthOfBirth(value);
    setMonthMenu(false);
    setValue('date_of_birth', `${dayOfBirth}/${value}/${yearOfBirth}`);
  };
  const handleSetYearOfBirth = (value: string) => () => {
    setYearOfBirth(value);
    setYearMenu(false);
    setValue('date_of_birth', `${dayOfBirth}/${monthOfBirth}/${value}`);
  };
  const handleToggleMenu = (value: number) => () => {
    switch (value) {
      case 1:
        setDayMenu(!dayMenu);
        break;
      case 2:
        setMonthMenu(!monthMenu);
        break;
      case 3:
        setYearMenu(!yearMenu);
        break;
      default:
        return;
    }
  };

  const onSubmit = async (data: LoginModel) => {
    login({ variables: { email: data.email, password: data.password } });
  };

  document.body.classList.add('bg-image');

  return (
    <AnimatePresence>
      {activeAuth === 1 && (
        <Container
          flex
          key="login"
          size="sm"
          layout
          flexDirection="col"
          justifyContent="center"
          spacing="xl"
          style={{ boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.6)' }}
          className="login-container"
          initial={{ opacity: 1 }}
          animate={{ x: [-500, 40, 0] }}
          exit={{ x: 900 }}
          onAnimationEnd={() => {
            console.log('tets');
          }}
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
            <Typography
              as="p"
              style={{ display: 'flex', marginTop: 12 }}
              helpText
            >
              Need an account?
              <Link
                onClick={() => setActiveAuth(0)}
                style={{ marginLeft: 4 }}
                to="/auth/register"
              >
                Register
              </Link>
            </Typography>
          </Form>
        </Container>
      )}
      {activeAuth === 0 && (
        <Container
          key="register"
          className="register"
          flex
          size="sm"
          flexDirection="col"
          justifyContent="center"
          spacing="xl"
          style={{ boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.6)' }}
          initial={{}}
          animate={{ x: [-500, 40, 0] }}
          exit={{ x: 900 }}
          transition={{ duration: 0.3 }}
        >
          <Typography
            as="h2"
            color="white"
            style={{ marginBottom: 24, textAlign: 'center' }}
          >
            Create an account
          </Typography>
          <Form onSubmit={registerSubmit(onSubmit)}>
            <Container spacing="none" spaceBetween="lg" spaceDirection="y">
              <InputGroup
                containerClassName="full-width"
                inputProps={{
                  type: 'email',
                  fullWidth: true,
                  id: 'email',
                  name: 'email',
                  register: registerForm,
                  autoComplete: 'email',
                }}
                labelProps={{ label: 'Email', htmlFor: 'email' }}
                error={registerErrors.email}
              />
              <InputGroup
                containerClassName="full-width"
                inputProps={{
                  type: 'text',
                  fullWidth: true,
                  id: 'username',
                  name: 'username',
                  register: registerForm,
                }}
                labelProps={{ label: 'Username', htmlFor: 'username' }}
                error={registerErrors.username}
              />
              <InputGroup
                containerClassName="full-width"
                inputProps={{
                  type: 'password',
                  fullWidth: true,
                  id: 'password',
                  name: 'password',
                  register: registerForm,
                }}
                labelProps={{ label: 'Password', htmlFor: 'password' }}
                error={registerErrors.password}
              />
            </Container>
            <Container
              flex
              flexDirection="col"
              spacing="none"
              style={{ marginTop: 24 }}
            >
              <Label>Date of birth</Label>
              <Container
                flex
                flexDirection="row"
                justifyContent="space-between"
                spacing="none"
                spaceBetween="md"
                spaceDirection="x"
              >
                <Dropdown
                  ref={dayRef}
                  fullWidth
                  onClose={() => setDayMenu(false)}
                >
                  <DropdownTrigger onShow={handleToggleMenu(1)}>
                    {dayOfBirth ? dayOfBirth : 'Day'}
                  </DropdownTrigger>
                  <DropdownMenu isOpen={dayMenu}>
                    {days.map((day) => (
                      <DropdownItem
                        key={day.value}
                        buttonProps={{ color: 'secondary', variant: 'text' }}
                        onItemClick={handleSetDayOfBirth(day.value)}
                      >
                        {day.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  ref={monthRef}
                  fullWidth
                  onClose={() => setMonthMenu(false)}
                >
                  <DropdownTrigger onShow={handleToggleMenu(2)}>
                    {months.find((month) => month.value === monthOfBirth)
                      ?.label || 'Month'}
                  </DropdownTrigger>
                  <DropdownMenu isOpen={monthMenu}>
                    {months.map((month) => (
                      <DropdownItem
                        key={month.value}
                        buttonProps={{ color: 'secondary', variant: 'text' }}
                        onItemClick={handleSetMonthOfBirth(month.value)}
                      >
                        {month.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  ref={yearRef}
                  fullWidth
                  onClose={() => setYearMenu(false)}
                >
                  <DropdownTrigger onShow={handleToggleMenu(3)}>
                    {yearOfBirth ? yearOfBirth : 'Year'}
                  </DropdownTrigger>
                  <DropdownMenu isOpen={yearMenu}>
                    {years
                      .map((year) => (
                        <DropdownItem
                          key={year.value}
                          buttonProps={{ color: 'secondary', variant: 'text' }}
                          onItemClick={handleSetYearOfBirth(year.value)}
                        >
                          {year.label}
                        </DropdownItem>
                      ))
                      .reverse()}
                  </DropdownMenu>
                </Dropdown>
              </Container>
              {registerErrors.date_of_birth && (
                <FieldError error={registerErrors.date_of_birth} />
              )}
            </Container>
            <Button style={{ marginTop: 24 }} type="submit">
              Continue
            </Button>
            <Link
              onClick={() => setActiveAuth(1)}
              style={{ marginTop: 12 }}
              to="/auth/login"
            >
              Already have an account?
            </Link>
            <Typography
              style={{
                marginTop: 24,
                fontSize: 12,
                fontWeight: 400,
                color: 'lightgray',
                opacity: 0.8,
              }}
              as="p"
            >
              By registring, you agree to this clone's Terms of Service and
              Privacy Policy.
            </Typography>
          </Form>
        </Container>
      )}
    </AnimatePresence>
  );
};
