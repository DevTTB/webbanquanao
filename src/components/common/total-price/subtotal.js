import React from 'react'
const subTotal = (cart) => cart.reduce((sum, i) => (sum += i.quantity * i.price), 0)
export default subTotal