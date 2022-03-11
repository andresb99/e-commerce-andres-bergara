import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//import components
import ItemListContainer from '../components/itemListContainer/ItemListContainer'
import NavBar from '../components/navbar/NavBar';
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer';
import NotFound from '../components/notFound/NotFound';
import Cart from '../components/cart/Cart';
import { CartContext } from '../components/context/CartContext';
import BoxMessage from '../components/NotCartItems/BoxMessage';
import InProgress from '../components/inProgress/InProgress';
import Home from '../components/home/Home';
import Footer from '../components/footer/Footer';



const Router = () => {

  const { totalQuantity, order } = useContext(CartContext);

  return <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/category' element={<ItemListContainer/>} />
            <Route path='/category/:id' element={<ItemListContainer/>} />
            <Route path='/item' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/success' element={ <BoxMessage order={order} title={'Congratulations !'} subtitle={'The purchase was successful'} />} />
            <Route path='/cart' element={totalQuantity === 0 ? <BoxMessage title={'There is a cart to fill !'} subtitle={'You currently have no products in your cart.'} /> : <Cart/>} />
            <Route path='/games-reviews' element={<InProgress name={'GAMES REVIEWS'} />} />
            <Route path='/blog' element={<InProgress name={'BLOG'} />} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  </div>;
};

export default Router;
