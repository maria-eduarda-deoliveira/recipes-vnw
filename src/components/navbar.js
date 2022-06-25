import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = styled.nav`
position: absolute;
top: 5%;
left: 66%;
max-width: 100%;
`;
const Navigation = styled.ul`
display: flex;
list-style: none;
justify-content: space-evenly;
color: #373737;
`;
const List = styled.li`
width: 10vw;
height: 7vh;
display:flex;
justify-content: center;
align-items: center;
cursor: pointer;
font: normal normal normal 24px/32px Saira Condensed;
letter-spacing: 2.52px;

&:hover{
    font-weight: bold;
    border: 3px solid #373737;
}
`;

export default function Nav (){
    return(
        <>
     <Navbar>
      <Navigation>
        <Link 
        activeClass="active"
        to="Recipes" 
        smooth={true}
        offset={1000}
        duration={500}>
        <List id="Recipes">Recipes</List>
        </Link>

        <Link 
        activeClass="active"
        to="About" 
        smooth={true}
        offset={2000}
        duration={500}>
        <List id="About">About</List>
        </Link>

        <Link
        activeClass="active"
        to="About" 
        smooth={true}
        offset={3000}
        duration={500}>
        <List id="Subscribe">Subscribe</List>
        </Link>
      </Navigation>
    </Navbar>
        </>
    )
}