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
  height: 50vh;
  display: flex;
`;
const Logo = styled.span`
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 60px;
  font-family: "Great Vibes", cursive;
  color: orangered;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 4px;
    width: 100%;
    position: absolute;
    background-color: orangered;
    bottom: 0px;
    transition: all 300ms ease-in-out;
    animation-name: baranimation;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  @keyframes baranimation {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
    
  }
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

const ContactItem = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  width: 90%;
  letter-spacing: 1px;
`;

const Payment = styled.img`
  width: 50%;
  margin-top: 10px;
`;

const Cleft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Cright = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 2;
  background-color: #ff4400;
  display: flex;
  width: 100%;
  position: relative;
  color:white;

`;

const List = styled.div`
  margin: 30px 0px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ListItem = styled.div`
  font-family: "Open Sans Condensed", sans-serif;
  list-style-type: none;
  font-weight: 300;
  font-size: 25px;
`;

const Cpyr = styled.p`
  color: #d3d2d2;
  font-weight: 300;
  letter-spacing: 1px;
  position: relative;
  top: 5%;
  a {
    text-decoration: none;
    font-weight: 500;
    color: #a8a7a7;
  }
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
        <Cpyr>
          Made by{" "}
          <a href="https://github.com/EL02HACHMI/EL02HACHMI">
            El Hachmi Abdessamade
          </a>{" "}
        </Cpyr>
      </Left>
      <Center>
        <Cleft>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
          </List>
        </Cleft>
        <Cright>
          <Title>Contact</Title>
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
        </Cright>
      </Center>
    </Container>
  );
};

export default Footer;
