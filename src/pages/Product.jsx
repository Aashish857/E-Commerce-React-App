import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcment from '../components/Announcment';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { mobile } from '../Responsive';


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection:"column"})} 
`;


const ImageContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})} 

`;    

const InfoContainerr = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})} 
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Description = styled.p`
    margin:20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})} 
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px;
`;

const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})} 
`;

const AmmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Ammount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4; 
    }
`;


const Product = () => {
  return ( 
    <Container>
        <Navbar />
        <Announcment />
        <Wrapper>
            <ImageContainer>
                <Image src="https://images.mehar.xyz/product_thumbnail/1679889955-1.jpg" />
            </ImageContainer>
            <InfoContainerr>
                <Title>Denim JumpSuit</Title>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem minima molestiae officiis fuga. A doloribus aliquid distinctio. Autem, maiores?</Description>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmmountContainer>
                        <FaMinus/>
                        <Ammount>1</Ammount>
                        <FaPlus/>
                    </AmmountContainer>
                    <Button>Add To CART</Button>
                </AddContainer>
            </InfoContainerr>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
   )
}

export default Product