import React from 'react';
import Head from 'next/head';
import styles from '../cssfiles/Product.css';
import Products from '@/app/products';
import OnlyHeader from '@/app/OnlyHeader';

const products = [
  {
    name: 'PC',
    price: 999,
    seller: "John's Electronics",
    description: 'Powerful desktop computer for all your needs.',
    image: '/images/imagefour.jpg',
  },
  {
    name: 'Laptop',
    price: 799,
    seller: 'Tech Haven',
    description: 'Portable and lightweight laptop for productivity on the go.',
    image: '/images/whyus.jpg',
  },
  {
    name: 'Video camera',
    price: 321,
    seller: 'gio gio',
    description: 'Portable and lightweight laptop for productivity on the go.',
    image: '/images/onlyinspired.png',
  },{
    name: 'CasePC',
    price: 543,
    seller: 'lasha chark',
    description: 'Portable and lightweight laptop for productivity on the go.',
    image: '/laptop_image.jpg',
  },{
    name: 'RAM',
    price: 123,
    seller: 'leqso sdas',
    description: 'Portable and lightweight laptop for productivity on the go.',
    image: '/simages/imagefour.jpg',
  },
];

const ProductPage = () => {
  return (
    <div>
      <OnlyHeader />
      <Head>
        <title>Product Page</title>
      </Head>
      <div className="page">
        {products.map((product, index) => (
          <Products key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
