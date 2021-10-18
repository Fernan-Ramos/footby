import * as Styled from './styles';

type InputProps = {
  id?: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ id, type, onChange, placeholder, value }) => (
  <Styled.Input id={id} type={type} value={value} placeholder={placeholder} onChange={onChange} />
);

export default Input;
