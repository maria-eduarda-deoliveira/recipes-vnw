import React from 'react';
import Navbar from "./navbar";
import Header from '../assets/Desktop/Header.png';
import Logo from "../assets/Desktop/RC.png";
import styled from 'styled-components';

const ImgHeader = styled.img`
width: 100%;
height: 100%;
padding: 1% 1% 1% 1%;
`;
const ImgLogo = styled.img`
position: absolute;
top: 5%;
left: 5%;
`;
const Title = styled.h1`
position: absolute;
top: 75%;
left: 30%;
font: normal normal 600 150px/191px Saira Condensed;
letter-spacing: 15.75px;
color: #373737;
opacity: 1;
`;


function header() {
  return (
    <>
    <Navbar />
    <header>
      <ImgHeader src={Header} alt="Header" />
      <Title>RECIPES</Title>
    </header>
    <ImgLogo 
    src={Logo} 
    alt="RC"/>
    </>
  )
}

export default header