import './App.css';
import './main.css'
import './navbar.css'
import './itemList.css';
import { Navbar } from './components/navbar';
import { Inicio } from './components/inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contacto } from './components/contacto';
import { Carrito } from './components/carrito';
import { Nosotros } from './components/nosotros';
import { ItemListConteiner } from './components/itemListConteiner';
import { ItemDetail } from './components/itemDetail';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Inicio />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/busqueda/:tipo' element={<ItemListConteiner />} />
          <Route path='/item/:tipo' element={<ItemListConteiner />} />
          <Route path='/itemDetail/:params/:id' element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
