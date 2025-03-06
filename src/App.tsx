import { useRoutes } from 'react-router-dom'

import { routes } from './routes'
import Header from './components/Header';
import './App.css';

function App() {
  const element = useRoutes(routes);
  return (
    <div className="app">
      <Header />
      <main className="container">
        {element}
      </main>
    </div>
  );
}

export default App;
