import React, { useEffect, useState } from 'react'
import CardList from '../component/CardList';
import { Container, Grid } from '@mui/material';
import {Navbar }from "../component/Navbar"
import Loading from '../Loading';
import {useUserAuth} from '../context/UserAuthContext'
const Home = () => {

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

  const {user,logOut}=useUserAuth();

  return (<>
  <Navbar />
  
    <Container >
      <button onClick={logOut}>LogOut</button>
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
    </>
  )
}

export default Home
