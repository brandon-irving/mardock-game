import { ContextStateProvider } from 'dynamic-context-provider';
import { globalStateConfig } from './core/globalStateVars';
import { ThemeProvider } from '@material-ui/core/styles';
import AppRouter from './AppRouter';
import theme from './core/theme'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ContextStateProvider stateConfig={globalStateConfig}>
      <ThemeProvider theme={theme}>
      <AppRouter />
      <ToastContainer />
      </ThemeProvider>
  </ContextStateProvider>
  );
}

export default App;
