import { ContextStateProvider } from 'dynamic-context-provider';
import { globalStateConfig } from './core/globalStateVars';
import { ThemeProvider } from '@material-ui/core/styles';
import AppRouter from './AppRouter';
import theme from './core/theme'

function App() {
  return (
    <ContextStateProvider stateConfig={globalStateConfig}>
      <ThemeProvider theme={theme}>
      <AppRouter />
      </ThemeProvider>
  </ContextStateProvider>
  );
}

export default App;
