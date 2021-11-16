import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Footer from './components/Footer/Footer';

import './App.css';


{/*Lista de productos fija */}
let productsList = [
    {id: 1, name: "Jersey negra", category: "Jerseys", color: "Negro", stock: 15, price: 120, image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2772000/altimages/ff_2772188alt1_full.jpg&w=900", imageDescription: "Jersey de Steelers color negra"},
    {id: 2, name: "Jersey blanca", category: "Jerseys", color: "Blanco", stock: 5, price: 120, image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2906000/altimages/ff_2906880alt1_full.jpg&w=900", imageDescription: "Jersey de Steelers color blanca"},
    {id: 3, name: "Jersey oro", category: "Jerseys", color: "Amarillo", stock: 2, price: 90, image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4133000/altimages/ff_4133507-bdf5a6ee75b9da820924alt1_full.jpg&w=900", imageDescription: "Jersey de Steelers color oro"},
    {id: 4, name: "Gorro", category: "Ropa", color: "Gris", stock: 2, price: 26, image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2791000/ff_2791811_full.jpg&w=900", imageDescription: "Gorro de lana gris con logo de Steelers"},
    {id: 5, name: "Hoodie", category: "Ropa", color: "Negro", stock: 2, price: 75, image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3733000/altimages/ff_3733287-f6fecab07f49d9a2c54ealt1_full.jpg&w=900", imageDescription: "Hoodie negro con logo de Steelers"},
    {id: 6, name: "Botella y tazas", category: "Otros", color: "Negro", stock: 0, price: 80, image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_4545000/altimages/ff_4545335-029a6d9b40ba437d34dbalt1_full.jpg&w=900", imageDescription: "Botella y tazas de aluminio negras con logo de Steelers"}
];


function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer message="Este es un mensaje de ItemListContainer" productsList={productsList}/>} />
        <Route path="/category/:id" element={<ItemListContainer message="Este es un mensaje de ItemListContainer" productsList={productsList}/>} />
        <Route path="/item/:id" element={<ItemDetailContainer productsList={productsList}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
