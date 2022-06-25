import React from 'react';
import styled from 'styled-components';
import Cake from "../assets/Desktop/Cake.png"
import Pizza from "../assets/Desktop/Pizza.png";
import Smoothie from "../assets/Desktop/Smoothie.png";

const Cards = styled.div`
margin-left: 17%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
grid-gap: 5%;
`;
const Card = styled.div`
display: grid;
grid-template-rows: max-content 200px 1fr;
`;
const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`;
const Content = styled.div`
background-color: #fff;
box-shadow: 0px 7px 6px #00000029;
`;
const RecipesName = styled.h4`
padding: 35% 15% 15% 25%;
font: normal normal normal 20px/32px Saira Condensed;
color: #373737;
opacity: 1;
`;

function cards() {
  return (
    <>
    <Cards>
      <Card>
        <Image src={Cake} alt="Red Velvet Cake"/>
        <Content>
          <RecipesName>Red Velvet Cake</RecipesName>
        </Content>
        </Card>
        <Card>
            <Image src={Pizza} alt="Pizza Margherita"/>
        <Content>
          <RecipesName>Margherita Pizza</RecipesName>
        </Content>
        </Card>
        <Card>
            <Image src={Smoothie} alt="Peanut Smoothie"/>
        <Content>
          <RecipesName>Peanut Smoothie</RecipesName>
        </Content>
        </Card>
    </Cards>
    </>
  )
}

export default cards