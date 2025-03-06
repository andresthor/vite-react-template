import { useRoutes } from 'react-router-dom';

import { routes } from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  const element = useRoutes(routes);
  return (
    <UserProvider>
      <div className="app">
        <Header />
        <main className="container">{element}</main>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
