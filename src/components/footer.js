import React from 'react';
import styled from 'styled-components';
import Instagram from "../assets/Desktop/Instagram.png";
import Facebook from "../assets/Desktop/Facebook.png";
import Twitter from "../assets/Desktop/Twitter.png";
import Pinterest from "../assets/Desktop/Pinterest.png";
import { Link } from "react-scroll";

const Body = styled.body`
background-color: #F2F4F1;
`;
const ContainerSociais = styled.div`
display: flex;
`;
const ImgSociais = styled.img`
width: 40px;
height: 40px;
margin: 4.5% 0.5%;
cursor: pointer;
`;
const NavigationFooter = styled.ul`
display: flex;
list-style: none;
width: 20%;
margin-left: 70%;
justify-content: space-between;
color: #373737;
`;
const List = styled.li`
position: absolute;
top: 282%;
cursor: pointer;
font: normal normal 100 24px/32px Saira Condensed;
letter-spacing: 2.52px;
`;
const Disclaimer = styled.div`
background-color: #446061;
padding: 0.2% 10%;
p{
font: normal normal normal 12px/24px Roboto;
color: #FFFFFF;
}
`;

function footer() {
  return (
    <Body>
      <ContainerSociais>
    <ImgSociais src={Instagram} alt="Instagram" />
    <ImgSociais src={Twitter} alt="Twitter" />
    <ImgSociais src={Facebook} alt="Facebook" />
    <ImgSociais src={Pinterest} alt="Pinterest" />
    </ContainerSociais>

    <NavigationFooter>
    <Link 
        activeClass="active"
        to="Recipes" 
        smooth={true}
        offset={1000}
        duration={500}>
      <List id="Recipes">Recipes</List>
      </Link>

      <Link
      activeClass='active'
      to="About"
      smooth={true}
      offset={2000}
      duration={500}>
      <List id="About">About</List>
      </Link>

      <Link
      activeClass="active"
      to="Subscribe"
      smooth={true}
      offset={3000}
      duration={500}>
      <List id="Subscribe">Subscribe</List>
      </Link>
    </NavigationFooter>

    <Disclaimer>
      <p>Layout produzido por Vai na Web para fins exclusivamente educacionais. 
        Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
        </p>
    </Disclaimer>
    </Body>
  )
}

export default footer