import React, { useEffect, useState } from 'react';
import { getMock } from '../../products/mock';

//import components
import ItemDetail from '../ItemDetail/ItemDetail';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        getMock
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
  
    }, [])


    
   

  return <div style={{textAlign:'center'}}>
        
        {
            loading ? <CircularProgress/> : <ItemDetail idParam={id} product={data} />
        } 
      </div>;
};

export default ItemDetailContainer;
