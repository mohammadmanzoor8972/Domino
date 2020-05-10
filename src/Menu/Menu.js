import React from "react";
import styled from "styled-components";
import { formatPrice, DominoData } from "../Data/FoodData";
import {
  FoodGrid,
  Food,
  FoodLabel,
  FoodDescription,
  MenuStyled
} from "./FoodGrid";

export function Menu({ setOpenFood }) {

  

  return (
    <MenuStyled>
      {DominoData.map(({ categoryName, data }) => (
        <div key={`${categoryName}`}>
          <h2>{categoryName} </h2>
          <FoodGrid>
            {data.map(food => (
              <div key={`${food.name}`}>
                <Food
                  img={`${process.env.REACT_APP_IMAGE_URL}${food.image}`}
                  onClick={() => {
                    setOpenFood(food);
                  }}
                >
                  <FoodLabel>
                    <div>{food.name}</div>
                    <div>
                      {categoryName === "Beverages"
                        ? formatPrice(food.defaultPrice)
                        : formatPrice(
                            food.defaultCrustPrice || food.defaultPrice
                          )}
                    </div>
                  </FoodLabel>
                </Food>
                <FoodDescription>{food.description}</FoodDescription>
              </div>
            ))}
          </FoodGrid>
        </div>
      ))}
    </MenuStyled>
  );
}
