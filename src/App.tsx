import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListPage from './pages/ProductListPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-50">
       <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
