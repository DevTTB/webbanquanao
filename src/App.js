import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProduct } from './redux/slice/product-slice';
import Routers from './router';
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
