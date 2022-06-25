import React from 'react';
import styled from 'styled-components';
import Cards from "../cards";

const Background = styled.body`
background: #F2F4F1;
padding: 15% 0 10% 0;
opacity: 1;
`;
const Latest = styled.h2`
position: absolute;
top: 26.5em;
left: 40%;
color: #373737;
font: normal normal 600 40px/50px Saira Condensed;
border-bottom: 5px solid #373737;
`;

function recipes() {
  return (
    <Background>
      <Latest>Latest Recipes</Latest>
      <Cards />
    </Background>
  )
}

export default recipes