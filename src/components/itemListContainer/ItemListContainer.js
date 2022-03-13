import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';


//import components
import ItemList from '../item-list/ItemList';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


//import styles
import './itemListContainer.css';

const ItemListContainer = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {

    const db = getFirestore();

    const itemsCollection = id ? query(
      collection(db, 'items'),
      where("category", "==", id)
    ) :
      collection(db, 'items')

    getDocs(itemsCollection).then((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      )
    }
    )
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  }, [id])

  return <>
    <div style={{ textAlign: 'center' }}>

      {
        loading ? <CircularProgress sx={{ mt:10 }} /> : <ItemList idParam={id} products={data} />
      }

    </div>
  </>;
};

export default ItemListContainer;
