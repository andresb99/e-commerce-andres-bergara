import React, { useEffect, useState } from 'react';
import { getMock } from '../../products/mock';

//import components
import ItemDetail from '../ItemDetail/ItemDetail';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    

    const [data, setData] = useState({});
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getMock
            .then(res => {
                
                setData(res.find((items) => items.id === parseInt(id)))
                
                Object.entries(data).length > 0 && setRelated(res.filter((product) => {
                    return product.id === data.related[0] || product.id === data.related[1] || product.id === data.related[2]
                })
                )
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [id, data])


    return <div style={{ textAlign: 'center' }}>

        {
            loading ? <CircularProgress /> : <ItemDetail idParam={id} product={data} productRelated={related} />
        }
    </div>;
};

export default ItemDetailContainer;
