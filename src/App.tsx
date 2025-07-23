import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
