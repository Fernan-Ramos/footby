import * as Styled from './styles';

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => (
  <Styled.Button onClick={onClick} type={type}>
    {children}
  </Styled.Button>
);

export default Button;
