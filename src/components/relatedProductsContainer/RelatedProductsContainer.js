import { getFirestore, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InProgress from '../inProgress/InProgress';
import RelatedProducts from '../relatedProducts/RelatedProducts';

const RelatedProductsContainer = ({ related }) => {


    const [relatedProducts, setRelatedProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const db = getFirestore();

        related.forEach(productId => {
            const docRef = doc(db, "items", productId)
            getDoc(docRef).then((snapshot) => {
                setRelatedProducts(prevState => ([
                    ...prevState,
                    { id: snapshot.id, ...snapshot.data() }
                ]));
            })
                .catch(err => console.log(err));
        });


    }, [id, related])

    return <>
        {
            relatedProducts.length > 3 ?

                <InProgress name="Related Products" /> :

                <RelatedProducts relatedProducts={relatedProducts} />
        }
    </>

}

export default RelatedProductsContainer