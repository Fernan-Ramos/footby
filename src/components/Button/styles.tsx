import styled from 'styled-components';
import { flexCenter } from 'styles/mixins';

export const Button = styled.button`
  height: 35px;
  width: 100%;
  ${flexCenter}
  color: #fff;
  border-radius: 4px;
  font-size: 13px;
  background: #2918e2;
  background: linear-gradient(90deg, #2918e2, #6236a3 100%, #705b8f 0);
`;
