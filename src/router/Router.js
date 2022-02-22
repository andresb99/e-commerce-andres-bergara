import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//import components
import ItemListContainer from '../components/itemListContainer/ItemListContainer'
import NavBar from '../components/navbar/NavBar';
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer';
import NotFound from '../components/notFound/NotFound';
import Cart from '../components/cart/Cart';
import { CartContext } from '../components/context/CartContext';
import NotCartItems from '../components/NotCartItems/NotCartItems';
import InProgress from '../components/inProgress/InProgress';



const Router = () => {

  const { totalQuantity } = useContext(CartContext);

  return <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category' element={<ItemListContainer/>} />
            <Route path='/category/:id' element={<ItemListContainer/>} />
            <Route path='/item' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={totalQuantity === 0 ? <NotCartItems /> : <Cart/>} />
            <Route path='/games-reviews' element={<InProgress name={'GAMES REVIEWS'} />} />
            <Route path='/blog' element={<InProgress name={'BLOG'} />} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  </div>;
};

export default Router;
