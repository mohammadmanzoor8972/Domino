import styled from "styled-components";
import { Title } from "../Styles/title";

export const FoodGrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
margin:5px;
`
export const FoodLabel = styled.div`
position: absolute;
background-color: #ffffff59;
`
export const Food = styled(Title)`
height: 100px;
background-image: ${({img})=> `url(${img});`}
background-size: cover;
position:centre;
padding: 10px;
filter: contrast(75%);
border-radius: 5px;
box-shadow: 4px 3px 10px black;
&:hover {
    cursor: pointer;
    opacity: 0.8;
    font-size: 1.05em;
}
`