import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { setProduct } from './redux/slice/product-slice';
import Routers from './router';
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
  const dispatch = useDispatch()
  useEffect(() => {
    const productData = async () => {
      const actionResult = await dispatch(setProduct())
      const listProduct = unwrapResult(actionResult)
    }
    productData()
  }, [])
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
