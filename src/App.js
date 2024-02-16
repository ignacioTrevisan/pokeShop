import './App.css';
import { Navbar } from './components/navbar';
import { Inicio } from './components/inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contacto } from './components/contacto';
import { Carrito } from './components/carrito';
import { Nosotros } from './components/nosotros';
import { ItemListConteiner } from './components/itemListConteiner';
import { ItemDetail } from './components/itemDetail';
import { CartContext } from './context/cartContext';
import { useContext, useState } from 'react';
import { Probando } from './components/probando';
import { IdentificadorArrayContext } from './context/IdentificadorArrayContext';
function App() {
  const [carrito, setCarrito] = useState([]);
  let [identificadorArray, setIdentificadorArray] = useState(0);

  return (
    <div className="App">
      <IdentificadorArrayContext.Provider value={{ identificadorArray, setIdentificadorArray }}>
        <CartContext.Provider value={{ carrito, setCarrito }}>
          <BrowserRouter>
            <Navbar />
            <Routes >
              <Route path='/' element={<Inicio />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/probando' element={<Probando />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/busqueda/:tipo' element={<ItemListConteiner />} />
              <Route path='/item/:tipo' element={<ItemListConteiner />} />
              <Route path='/itemDetail/:params/:id' element={<ItemDetail />} />
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </IdentificadorArrayContext.Provider>
    </div>
  );
}

export default App;
