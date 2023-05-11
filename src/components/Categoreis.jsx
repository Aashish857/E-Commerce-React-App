import React from 'react'
import styled from 'styled-components'
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../Responsive';

const Container = styled.div`
    display:flex;
    padding: 0px 200px 200px 200px;
    margin-top: 50px;
    justify-content:space-between;
    ${mobile({padding: "0px", flexDirection: "column"})} 
    `;



const CategoryHeading = styled.h1`
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
`



const Categoreis = () => {
  return (
    <>
        <CategoryHeading>Categories</CategoryHeading>
    <Container>
        {categories.map((item)=>{
            return (
                <CategoryItem item={item} key={item.id}/>
            )
        })}
    </Container>
    </>
  )
}

export default Categoreis