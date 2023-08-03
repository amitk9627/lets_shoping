import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';
/*
category
: 
"men's clothing"
description
: 
"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id
: 
1
image
: 
"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price
: 
109.95
rating
: 
{rate: 3.9, count: 120}
title
: 
"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"


*/


const CardList = ({ prodData }) => {
   
    return (

        <Grid item md={3} sm={6} xs={12} sx={{ mb: "20px" }}>
            <Card sx={{ maxWidth: 350, }} key={prodData.id}>
                <NavLink to={`/products/${prodData.id}`} style={{ textDecoration: 'none' }}>
                    <CardMedia
                        component="img"
                        alt={prodData.title}
                        image={prodData.image}
                        sx={{ objectFit: "contain",height:200, }}
                    />
                </NavLink>
                <CardContent>
                    <Typography variant="h5" component="div" color="text.secondary" >
                        {(prodData.title).slice(0, 15)}
                    </Typography>

                </CardContent>

                <CardContent>
                    <Typography variant='h6' sx={{ m: 0, p: 0 }}>
                        ${prodData.price}
                    </Typography>
                </CardContent>

                <CardContent sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Typography variant='body1'>
                        {/* Rate: {prodData.rating.rate} */}
                        
                         <Rating name="read-only" value={prodData.rating.rate} readOnly />
                    </Typography>
                    <Typography variant='body1'>
                        Stock : {prodData.rating.count}
                    </Typography>
                </CardContent>


            </Card>
        </Grid>

    )
}

export default CardList
