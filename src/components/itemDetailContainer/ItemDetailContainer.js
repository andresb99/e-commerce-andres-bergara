import React, { useEffect, useState } from 'react';

//import components
import ItemDetail from '../ItemDetail/ItemDetail';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {

        const db = getFirestore();

        const docRef = doc(db, "items", id)

        getDoc(docRef)
            .then((snapshot) => {
                setData({
                    id: snapshot.id,
                    ...snapshot.data()
                })
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [id])


    return <div style={{ textAlign: 'center' }}>

        {
            loading ? <CircularProgress /> : <ItemDetail idParam={id} product={data} productRelated={related} />
        }
    </div>;
};

export default ItemDetailContainer;
