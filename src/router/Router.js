import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//import components
import ItemListContainer from '../components/itemListContainer/ItemListContainer'
import NavBar from '../components/navbar/NavBar';
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer';
import NotFound from '../components/notFound/NotFound';


const Router = () => {
  return <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer greetings = {{greeting : 'Hello World! welcome to ', name : 'Home Page'}}/>} />
            <Route path='/category' element={<ItemListContainer greetings = {{greeting : 'Hello World! welcome to ', name : 'ItemListContainer'}}/>} />
            <Route path='/products' element={<ItemListContainer greetings = {{greeting : 'Hello World! welcome to ', name : 'ItemListContainer'}}/>} />
            <Route path='/products/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<ItemListContainer greetings = {{greeting : 'Hello World! welcome to ', name :`Cart`}}/>} />
            <Route path='/games-reviews' element={<h1>Game reviews in progress</h1>} />
            <Route path='/blog' element={<h1>Blog in progress</h1>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  </div>;
};

export default Router;
