import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import men_banner from "./Components/Assets/banner_mens.png"
import banner_women from "./Components/Assets/banner_women.png"
import banner_kids from "./Components/Assets/banner_kids.png"
import Success from './Pages/Success';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category={'men'} banner={men_banner} />} />
          <Route path='/women' element={<ShopCategory category={'women'} banner={banner_women} />} />
          <Route path='/kids' element={<ShopCategory category={'kid'} banner={banner_kids} />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/order' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
