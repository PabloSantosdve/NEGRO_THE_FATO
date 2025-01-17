import './App.css';
import Header from './Components/layout/Header';
import BemVindo from './Components/layout/BemVindo';
import Footer from './Components/layout/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Mudança para 'Routes' no React Router v6
import FunkPage from './Components/pages/FunkPage.jsx'; 
import RapPage from './Components/pages/RapPage.jsx'; 
import RBPage from './Components/pages/RbPage.jsx'; // Caminho correto para o arquivo RBPage.js

function App() {
  return (
    <Router> {/* Envolvendo a aplicação com BrowserRouter */}
      <Header /> {/* Cabeçalho com links de navegação */}
      
      <Routes> {/* Utilizando 'Routes' no React Router */}
        <Route path="/" element={<BemVindo />} /> {/* Página inicial */}
        <Route path="/funk" element={<FunkPage />} /> {/* Página do gênero Funk */}
        <Route path="/rap" element={<RapPage />} /> {/* Página do gênero Rap */}
        <Route path="/rb" element={<RBPage />} /> {/* Página do gênero R&B */}
      </Routes>

      <Footer /> {/* Rodapé */}
    </Router>
  );
}

export default App;
