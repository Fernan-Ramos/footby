import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import * as Styled from './styles';

const Auth: React.FC = () => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleOnShow = () => {
    setIsTranslating(!isTranslating);
    setTimeout(() => {
      setShowSignUp(!showSignUp);
    }, 300);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Form move={isTranslating}>
          {showSignUp ? <SignUp onShow={handleOnShow} /> : <SignIn onShow={handleOnShow} />}
        </Styled.Form>
        <Styled.ImageBg move={isTranslating} />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Auth;
