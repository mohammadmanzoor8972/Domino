import styled from "styled-components";
import { Title } from "../Styles/title";

const defaultWidth = window.document.body.scrollWidth;

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: ${defaultWidth<600 ? '1fr 1fr' : '1fr 1fr 1fr 1fr'};
  gap: 20px;
  margin: 5px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: #ffffff59;
`;

export const Food = styled(Title)`
height: 100px;
background-image: ${({ img }) => `url(${img});`};
background-size: cover;
position:centre;
padding: 10px;
filter: contrast(75%);
border-radius: 8px;
cursor:pointer;
`;


export const FoodDescription = styled(Title)`
font-size: .8rem;
font-weight: normal;
font-family: Arial, Helvetica, sans-serif;
padding:5px;
`

export const MenuStyled = styled.div`
height: 1000px;
margin: 5px;
padding: 10px;
`