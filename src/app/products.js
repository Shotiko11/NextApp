import OnlyHeader from '@/app/OnlyHeader'
import React from 'react'
import '../cssfiles/Product.css'

const Products = ({ image, name, price, seller, description}) => {
  return (
    <div>
    <div className="container">
      <img src={image} alt={name} className="image" />
      <h2 className="name">{name}</h2>
      <p className="price">${price}</p>
      <p className="seller">Seller: {seller}</p>
      <p className="description">{description}</p>
    </div>
    </div>
  )
}

export default Products
