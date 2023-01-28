import React from 'react'
import Product from './Product';
import { useSelector } from 'react-redux';

const Cart = () => {
    const data = useSelector(state => state.cartData);

    console.log(data, 'data')
  return (
    <>
        {data.map((i) => {
            return  <Product data={i} />
        })}
    </>
  )
}

export default Cart