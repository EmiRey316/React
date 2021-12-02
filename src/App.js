import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartContextProvider from './context/cartContext';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartView from './components/Cart/CartView';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';

import './App.css';



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer message="Listado de productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer message="Listado de productos" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
