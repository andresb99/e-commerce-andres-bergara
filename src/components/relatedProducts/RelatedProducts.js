import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import Item from '../item/Item'

const RelatedProducts = ({ relatedProducts }) => {
    return <>
        {
            relatedProducts.length > 2 ?
                relatedProducts.map((productsRelated) => {
                    return (
                        <Grid key={productsRelated.id} item xs={12} sm={6} md={4}>
                            <Item key={productsRelated.id} product={productsRelated} />
                        </Grid>
                    )
                })
                :
                <CircularProgress />

        }
    </>

}

export default RelatedProducts