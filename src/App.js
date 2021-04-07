import { Container, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Navigation from './components/navigation';
import ProductCard from './components/product';
import Footer from './components/organisms/footer';
const ex = [
  {
    name: 'T-Shirt',
    price: '500.000',
    url: 'https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/8ts21s009-sk010-l-1-.jpg'
  },
  {
    name: 'T-Shirt',
    price: '500.000',
    url: 'https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/8ts21s009-sk010-l-1-.jpg'
  },
  {
    name: 'T-Shirt',
    price: '500.000',
    url: 'https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/8ts21s009-sk010-l-1-.jpg'
  },
  {
    name: 'T-Shirt',
    price: '500.000',
    url: 'https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/8ts21s009-sk010-l-1-.jpg'
  },
  {
    name: 'T-Shirt',
    price: '500.000',
    url: 'https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/8ts21s009-sk010-l-1-.jpg'
  },
  {
    name: 'T-Shirt',
    price: '500.000',
    url: 'https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/8ts21s009-sk010-l-1-.jpg'
  }
]
function App() {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getProductList = async () => {
      setIsLoading(true)
      const data = await axios.get('https://6055490ad4d9dc001726e8ec.mockapi.io/product')
      setProductList(data.data)
      setIsLoading(false)
    }
    getProductList()
  }, [])
  return (
    <div className="App">
      <Navigation />
      {
        isLoading ? <div>Loading...</div> : <Container maxWidth='md'>
          <Grid container spacing={4}>
            {
              productList.map(item => item.id <= 10 && (
                <ProductCard props={item} />
              ))
            }
          </Grid>
        </Container>
      }
      <Footer />
    </div>
  );
}

export default App;
