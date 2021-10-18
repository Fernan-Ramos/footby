import * as Styled from './styles';

type HeadingTypes = {
  h1: string;
  h2: string;
  h3: string;
};

type HeaderProps = {
  type: keyof HeadingTypes;
};

const TYPE_TO_TEXT = {
  h1: Styled.HeaderH1,
  h2: Styled.HeaderH2,
  h3: Styled.HeaderH3,
};

const Header: React.FC<HeaderProps> = ({ type, children }) => {
  const HeaderComponent = type && TYPE_TO_TEXT[type];
  return <HeaderComponent>{children}</HeaderComponent>;
};

export default Header;
