import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartContextProvider from './context/cartContext';
import ItemListContextProvider from './context/itemListContext';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartView from './components/Cart/CartView';
import Footer from './components/Footer/Footer';

import './App.css';


function App() {
  return (
    <ItemListContextProvider>
      <CartContextProvider>
        <BrowserRouter className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer message="Listado de productos" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer message="Listado de productos" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </ItemListContextProvider>
  );
}

export default App;
