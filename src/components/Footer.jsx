import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaMailBulk, FaMap, FaPhone, FaPinterest, FaTwitter } from 'react-icons/fa';
import { mobile } from '../Responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})} 

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``; 
const Description = styled.p`
    margin: 20px 0px;

`; 

const SocialContainer = styled.div`
    display: flex;

`; 


const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`; 

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})} 

 `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#eee"})} 

`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Quinter.</Logo>
            <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus numquam iste repellat dolorum ratione eius vero tempore exercitationem, perferendis in?
            </Description>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FaFacebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <FaInstagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <FaTwitter />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <FaPinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>UseFull Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <FaMap style={{marginRight:"10px"}}/>  51, Leader Strom, South 520
            </ContactItem>
            <ContactItem>
               <FaPhone style={{marginRight:"10px"}}/>  +91 1234567890
            </ContactItem>
            <ContactItem>
               <FaMailBulk style={{marginRight:"10px"}}/>  contact@Aashish857
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer