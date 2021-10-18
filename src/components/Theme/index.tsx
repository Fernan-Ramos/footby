import { ThemeProvider as Theme } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { colors } from 'styles/colors';

export const theme = {
  ...colors,
};

const ThemeProvider: React.FC = ({ children }) => (
  <Theme theme={theme}>
    <GlobalStyle />
    {children}
  </Theme>
);

export default ThemeProvider;
