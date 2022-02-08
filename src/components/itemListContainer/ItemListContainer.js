import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


//import components
import ItemList from '../item-list/ItemList';
import { getMock } from '../../products/mock'

//import styles
import './itemListContainer.css';


const ItemListContainer = (props) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      getMock
          .then(res => setData(res))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))

  }, [])


  return <>
        <div style={{ textAlign: 'center' }}>

                <h1>{ props.greetings.greeting }<span>{ props.greetings.name }</span></h1>
          
                {
                  loading ? <CircularProgress/> : <ItemList products={data} />
                }   
                
        </div>                
  </>;  
};

export default ItemListContainer;
