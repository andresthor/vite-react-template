import { useRoutes } from 'react-router-dom'

import { routes } from './routes'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const element = useRoutes(routes);
  return (
    <div className="app">
      <Header />
      <main className="container">
        {element}
      </main>
      <Footer />
    </div>
  );
}

export default App;
