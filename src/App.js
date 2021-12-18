import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartContextProvider from './context/cartContext';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import DiscountItems from './components/ItemListContainer/DiscountItems';
import CartView from './components/Cart/CartView';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import NotFound from './components/BasicComponents/NotFound';

import './App.css';
import "animate.css";



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer message="Listado de productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer message="Listado de productos" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/discounts" element={<DiscountItems />} />

          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
