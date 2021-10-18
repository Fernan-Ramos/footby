import ThemeProvider from 'components/Theme';
import RouterHandler from 'containers/RouteHandler';

const App: React.FC = () => (
  <ThemeProvider>
    <RouterHandler />
  </ThemeProvider>
);

export default App;
