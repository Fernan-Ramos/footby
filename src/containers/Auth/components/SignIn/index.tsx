import { Header, Input, Button } from 'components';
import { useState } from 'react';
import * as Styled from './styles';

const initialState = {
  email: '',
  password: '',
};

type SignInProps = {
  onShow: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SignIn: React.FC<SignInProps> = ({ onShow }) => {
  const [values, setValues] = useState(initialState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleOnSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Styled.Container>
      <Header type="h1">Welcome!</Header>
      <Styled.Form onSubmit={handleOnSubmit}>
        <Input
          id="email"
          type="text"
          value={values.email}
          onChange={handleOnChange}
          placeholder={'Email'}
        />
        <Input
          id="password"
          type="password"
          value={values.password}
          onChange={handleOnChange}
          placeholder={'Password'}
        />
        <Button type="submit">SingIn</Button>
      </Styled.Form>
      <Styled.LinkButton onClick={onShow}>SignUp</Styled.LinkButton>
    </Styled.Container>
  );
};

export default SignIn;
