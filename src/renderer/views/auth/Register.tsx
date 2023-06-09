import { ReactElement, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { signUp } from '../../api/auth/auth';
import { Label, Typography } from '../../components';
import { Button } from '../../components/common/Button/Button';
import { Container } from '../../components/common/Container/Container';
import { Dropdown } from '../../components/common/Dropdown/Dropdown';
import { DropdownItem } from '../../components/common/Dropdown/DropdownItem';
import { DropdownMenu } from '../../components/common/Dropdown/DropdownMenu';
import { DropdownTrigger } from '../../components/common/Dropdown/DropdownTrigger';
import { Form } from '../../components/common/Form/Form';
import { FieldError } from '../../components/common/Forms/FieldError/FieldError';
import { InputGroup } from '../../components/common/Input/InputGroup';
import { Link } from '../../components/common/Link/Link';
import { useToast } from '../../hooks/useToast/useToast';
import { RegisterModel } from '../../interfaces/interfaces/Register.props';
import { AuthResponseModel } from '../../interfaces/models/Response.model';
import { days, months, years } from '../../static/date/date';
import { RegisterValidator } from '../../validators/Auth/Auth.validator';

export const Register = (): ReactElement => {
  const [dayOfBirth, setDayOfBirth] = useState<string>('');
  const [monthOfBirth, setMonthOfBirth] = useState<string>('');
  const [yearOfBirth, setYearOfBirth] = useState<string>('');
  const [dayMenu, setDayMenu] = useState<boolean>(false);
  const [monthMenu, setMonthMenu] = useState<boolean>(false);
  const [yearMenu, setYearMenu] = useState<boolean>(false);

  const dayRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { pathname } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<RegisterModel>({
    reValidateMode: 'onChange',
    resolver: joiResolver(RegisterValidator()),
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

  console.log(errors, getValues('date_of_birth'));

  const onSubmit = async (data: RegisterModel) => {
    console.log(data);
    const res = await signUp(data);
    if (!res.statusIsOk) {
      return;
    }

    localStorage.setItem('access_token', (res as AuthResponseModel).token);
    localStorage.setItem(
      'access_token',
      (res as AuthResponseModel).user.id.toString()
    );
    navigate('/main');
  };

  document.body.classList.add('bg-image');

  return (
    <Container
      key="register"
      animatePresence
      className="register"
      flex
      size="sm"
      flexDirection="col"
      justifyContent="center"
      spacing="xl"
      style={{ boxShadow: '0px 0px 12px 2px rgba(0, 0, 0, 0.6)' }}
      // initial={{}}
      animate={{ x: [-500, 40, 0] }}
      exit={{ x: 500 }}
      transition={{ duration: 0.3 }}
    >
      <Typography
        as="h2"
        color="white"
        style={{ marginBottom: 24, textAlign: 'center' }}
      >
        Create an account
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container spacing="none" spaceBetween="lg" spaceDirection="y">
          <InputGroup
            containerClassName="full-width"
            inputProps={{
              type: 'email',
              fullWidth: true,
              id: 'email',
              name: 'email',
              register,
              autoComplete: 'email',
            }}
            labelProps={{ label: 'Email', htmlFor: 'email' }}
            error={errors.email}
          />
          <InputGroup
            containerClassName="full-width"
            inputProps={{
              type: 'text',
              fullWidth: true,
              id: 'username',
              name: 'username',
              register,
            }}
            labelProps={{ label: 'Username', htmlFor: 'username' }}
            error={errors.username}
          />
          <InputGroup
            containerClassName="full-width"
            inputProps={{
              type: 'password',
              fullWidth: true,
              id: 'password',
              name: 'password',
              register,
            }}
            labelProps={{ label: 'Password', htmlFor: 'password' }}
            error={errors.password}
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
            <Dropdown ref={dayRef} fullWidth onClose={() => setDayMenu(false)}>
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
                {months.find((month) => month.value === monthOfBirth)?.label ||
                  'Month'}
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
          {errors.date_of_birth && <FieldError error={errors.date_of_birth} />}
        </Container>
        <Button style={{ marginTop: 24 }} type="submit">
          Continue
        </Button>
        <Link style={{ marginTop: 12 }} to="/auth/login">
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
          By registring, you agree to this clone's Terms of Service and Privacy
          Policy.
        </Typography>
      </Form>
    </Container>
  );
};
