import React, { useEffect, useState, useContext } from 'react'
import CardList from '../component/CardList';
import { Container, Grid } from '@mui/material';
import { Navbar } from "../component/Navbar"
import Footer from '../component/Footer'
import Loading from '../Loading';

import { InputContextValue } from '../context/InputContext'


const Home = () => {
  
  const { inputValue } = useContext(InputContextValue);

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

 

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProductData(json);
        setLoading(false);
      })

  }, []);
  const searchProduct = (inputValue) => {
    setLoading(true);
    const result = productData.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()));
   
    setProductData(result);
    setLoading(false);
   

  }
  useEffect(() => {
    if (inputValue) {
      setTimeout(() => {
      searchProduct(inputValue);
       
      }, 1000)
    }
    if (!inputValue) {
      setLoading(true);
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          setProductData(json);
          setLoading(false);
        })
    }


  }, [inputValue])







  return (
    <>
      <Navbar />

      <Container >
       
        <p></p>
        {
          loading ? <Loading /> :
            <Grid container sx={{ mt: '20px' }}>
              {
                productData?.map((item) => {
                  return <CardList key={item.id} prodData={item} />
                })
              }
            </Grid>
        }
      </Container >
      <Footer />
    </>
  )
}

export default Home
