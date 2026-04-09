import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider.tsx';
import { Home } from './pages/home/Home.tsx';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
