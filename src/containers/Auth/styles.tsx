import styled from 'styled-components';
import { flexCenter } from 'styles/mixins';

type StyleProps = {
  move?: boolean;
};

export const Container = styled.div`
  ${flexCenter}
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#a7cff1, #b19fd8 64%);

  @keyframes translate-left {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-100%, 0);
    }
  }
  @keyframes translate-right {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(100%, 0);
    }
  }
`;

export const Content = styled.div`
  border-radius: 5px;
  background-color: #fff;
  min-height: 400px;
  max-height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
`;

export const ImageBg = styled.div<StyleProps>`
  background: linear-gradient(#534f5c, #a7cff1 64%);
  transform: translate(0, 0);
  transition: transform 1s ease;
  ${({ move }) =>
    move &&
    `
    animation: translate-left 1s ease;
    transform: translate(-100%, 0);
  `}
`;

export const Form = styled.div<StyleProps>`
  padding: 20px;
  transform: translate(0, 0);
  transition: transform 1s ease;
  ${({ move }) =>
    move &&
    `
    animation: translate-right 1s ease;
    transform: translate(100%, 0);
  `}
`;
