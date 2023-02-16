import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
