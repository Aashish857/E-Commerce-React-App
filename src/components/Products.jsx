import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';
import axios from "axios";

const Container = styled.div`
  margin-top: 50px;
    padding:20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProductsHeading = styled.h1`
  display: flex;
  background-color: #008080a2;
  margin-top: 100px;
  color: white;
  justify-content: center;
  padding: 5px;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 20px;
  font-size: 3em;

`;
const Products = () => {


  return (
    <>
    <ProductsHeading>PRODUCTS</ProductsHeading>
    <Container>
        {popularProducts.map((item)=>{
            return (
                <Product item={item} key={item.id}/>
            )
        })}
    </Container>
    </>
  )
}

export default Products