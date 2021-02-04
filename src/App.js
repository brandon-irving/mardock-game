import { ContextStateProvider } from 'dynamic-context-provider';
import { globalStateConfig } from './core/globalStateVars';
import AppRouter from './AppRouter';

function App() {
  return (
    <ContextStateProvider stateConfig={globalStateConfig}>
   <AppRouter />
  </ContextStateProvider>
  );
}

export default App;
