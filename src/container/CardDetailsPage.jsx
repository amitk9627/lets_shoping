import { Container, Typography, Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import {Navbar }from "../component/Navbar"

import { useParams } from 'react-router';
import { ContextState } from '../context/Context';
import Loading from '../Loading';

const CardDetailsPage = () => {
  const GlobalState = useContext(ContextState);
  const { dispatch } = GlobalState;
 
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    (
      async () => {
       setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      

      }
    )()
  }, [id])

  let ratingValue = Math.round(product?.rating?.rate);

  // console.log(product);
  return (
    <>
    <Navbar />
    {loading ? <Loading /> :
    <Container md={6} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", mt: 5 }}>

      <Container md={12} sm={12} sx={{ display: "flex", justifyContent: "center", }}>
        <img src={product?.image} alt={product.title} width={500} height={400} style={{ objectFit: "contain" }} />
      </Container>

      <Container md={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>

        <Typography  color='text.secondary'>
         <u> {product.title}</u>
        </Typography>
        <Typography >
          <Rating name="read-only" value={ratingValue} readOnly />
        </Typography>

        <Typography variant="h3" color='text.secondary'>
          $ {product.price}
        </Typography>
        <Typography variant='h3' >
          <Button
            onClick={() => dispatch({ type: "AddToCart", payload: product })}
            variant="contained"
            color="success"
          >
            Add to Cart
          </Button>
        </Typography>

        <Typography variant="body1" sx={{textAlign:"justify"}}>
          <Typography>Description : </Typography>
          {product.description}
        </Typography>

      </Container>

    </Container>}
    </>
  )
}

export default CardDetailsPage
