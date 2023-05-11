import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import {mobile} from "../Responsive";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';



const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})} 
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})} 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})} 

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width: "30px"})} 

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  color: teal;
  ${mobile({fontSize: "24px"})} 

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent: "center"})} 

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})} 

`;

const A = styled.a`
  text-decoration: none;
  color: ${props=>props.name === "logo" ? "teal" : "black"}
`;

const Navbar = (props) => {
 

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <FaSearch />
          </SearchContainer>
        </Left>
        <Center>
          <Link style={{textDecoration: 'none'}} to={`/`}><Logo>Quinter.</Logo></Link>
        </Center>
        <Right id='right'>
          <Link style={{textDecoration: 'none', color:'black'}} to={`/Register`}><MenuItem >REGISTER</MenuItem></Link>
          <Link style={{textDecoration: 'none', color:'black'}} to={`/Login`}><MenuItem >SIGN IN</MenuItem></Link>
          <MenuItem>
             <Link style={{textDecoration: 'none',color:'black'}} to={`./Cart`} ><FaShoppingCart /></Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};


export default Navbar