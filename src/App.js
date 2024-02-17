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
import { useState } from 'react';
import { Probando } from './components/probando';
import { IdentificadorArrayContext } from './context/IdentificadorArrayContext';
import { ScrollContext } from './context/scrollContext';
function App() {
  const [carrito, setCarrito] = useState([]);
  let [identificadorArray, setIdentificadorArray] = useState(0);
  let [scroll, setScroll] = useState(0);


  return (
    <div className="App">
      <ScrollContext.Provider value={{ scroll, setScroll }} >
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
      </ScrollContext.Provider>
    </div>
  );
}

export default App;
