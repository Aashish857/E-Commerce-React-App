import React from 'react'
import { FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
import styled from 'styled-components'


const Info = styled.div`
  opacity: 0;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.05)
  }
  &:hover ${Info}{
    opacity: 1;
  }
`;





const Image = styled.img`
max-width:250px;
height:75%;
z-index: 2;
`;


const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img}/>
      <Info>
        <Icon>
          <FaHeart/>
        </Icon>
        <Icon>
          <FaShoppingCart/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product