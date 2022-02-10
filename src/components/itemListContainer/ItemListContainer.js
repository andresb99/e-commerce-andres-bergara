import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';


//import components
import ItemList from '../item-list/ItemList';
import { getMock } from '../../products/mock'

//import styles
import './itemListContainer.css';


const ItemListContainer = (props) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
      getMock
          .then( res => setData(res.filter( (product) => id ? product.category === id : product )))
          .catch( err => console.log(err) )
          .finally( () => setLoading(false) )       
  }, [id])

  return <>
        <div style={{ textAlign: 'center' }}>
          
                {
                  loading ? <CircularProgress/> : <ItemList idParam={ id } products={ data } />
                }   
                
        </div>                
  </>;  
};

export default ItemListContainer;
