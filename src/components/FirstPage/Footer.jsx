import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  display: flex;
  margin: 10px 0px 0px 0px;
  position: relative;
  bottom: 0;
  width: 100%;
`;
const Logo = styled.span`
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 60px;
  font-family: "Great Vibes", cursive;
  color: black;
`;

const Desc = styled.p`
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 300;
  margin: 10px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  color: white;
`;
const List = styled.div`
  display: flex;
  margin: 30px 0px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
`;
const ListItem = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  list-style-type: none;
  font-weight: 300;
  display: flex;
  justify-content: center;
  font-size: 25px;
  width: 50%;
  text-align: left;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px;
`;

const ContactItem = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  width: 90%;
  letter-spacing: 1px;
`;
const Title2 = styled.h2`
  margin: 30px 0px;
  font-size: 40px;
  font-weight: 500;
  color: black;
`;
const Payment = styled.img`
  width: 50%;
  margin-top: 10px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Illumi.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon className="Ic" color="#3B5999" />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon className="Ic" color="#E4405F" />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon className="Ic" color="#55ACEE" />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon className="Ic" color="#E60023" />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title2>Contact</Title2>
        <ContactItem>
          <RoomIcon />
          617 Dixie Path , South Tobinchester 78382
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          +212 364 593 623
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          contact@Chamesy/ContactItem
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
