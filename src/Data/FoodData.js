export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: "INR"
    })
}


export const foodItem = [
    {
        name: "Chesse Pizza",
        img: "/img/pizza1.jpeg",
        section: "Pizza",
        price: 350.00,
    },
    {
        name: "Pepporani Pizza",
        img: "/img/pizza2.jpeg",
        section: "Pizza",
        price: 390.00
    },
    {
        name: "Brust Pizza",
        img: "/img/pizza3.jpeg",
        section: "Sandwich",
        price: 150.00
    },
    {
        name: "Peri Peri Pizza",
        img: "/img/pizza4.jpeg",
        section: "Sandwich",
        price: 280.00
    },
    {
        name: "Capcicum Pizza",
        img: "/img/pizza5.jpeg",
        section: "Bread",
        price: 150.00
    },
    {
        name: "Burger",
        img: "/img/pizza6.jpeg",
        section: "Burger",
        price: 120.00
    },
    {
        name: "Fries",
        img: "/img/pizza2.jpeg",
        section: "Burger",
        price: 90.00
    },
    {
        name: "Tandoori Pizza",
        img: "/img/pizza1.jpeg",
        section: "Burger",
        price: 650.00
    }
]

export const foods = foodItem.reduce((res, food)=>{
if(!res[food.section]){
    res[food.section] = [];
}
res[food.section].push(food);
res[food.section]["Topings"] = [1,2,3];

return res;
},{})


export const DominoData = [
    {
      "categoryName": "Bestsellers",
      "categoryId": 1,
      "categoryType": 2,
      "data": [
        {
          "id": 4062,
          "selectedCrustId": "1",
          "description": "A classic delight with 100% Real mozzarella cheese",
          "name": "Margherita",
          "image": "new_margherita_2502.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 99,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 199,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 249,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 174,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 298,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 129,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 239,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 99,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 239,
          "code": "PIZ0117",
          "sizeCode": "Pc",
          "sortOrder": 1,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4064,
          "selectedCrustId": "1",
          "description": "Delightful combination of onion, capsicum, tomato & grilled mushroom",
          "name": "Farmhouse",
          "image": "farmhouse.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 595,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 245,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 435,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            60,
            61,
            64,
            65
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 435,
          "code": "PIZ0119",
          "sizeCode": "Fa",
          "sortOrder": 2,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4079,
          "selectedCrustId": "1",
          "description": "Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !",
          "name": "Cheese n Corn",
          "image": "new_cheese_n_corn.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 305,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 495,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 355,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 240,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 404,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 195,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 345,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            70
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 345,
          "code": "PIZ0128",
          "sizeCode": "Ah",
          "sortOrder": 3,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4082,
          "selectedCrustId": "1",
          "description": "Pepper barbecue chicken for that extra zing",
          "name": "Pepper Barbecue Chicken",
          "image": "new_pepper_barbeque_chicken.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 185,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 335,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 535,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 385,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 260,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 434,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 375,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 185,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            393
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 375,
          "code": "PIZ5119",
          "sizeCode": "Ej",
          "sortOrder": 4,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4065,
          "selectedCrustId": "1",
          "description": "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
          "name": "Peppy Paneer",
          "image": "new_peppy_paneer.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 595,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 245,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 435,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            64,
            67,
            68
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 435,
          "code": "PIZ0120",
          "sizeCode": "Pa",
          "sortOrder": 5,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4075,
          "selectedCrustId": "1",
          "description": "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
          "name": "Veggie Paradise",
          "image": "new_veggie_paradise.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 595,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 245,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 435,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            63,
            64,
            68,
            70
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 435,
          "code": "PIZ0125",
          "sizeCode": "Vw",
          "sortOrder": 6,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4068,
          "selectedCrustId": "1",
          "description": "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
          "name": "Veg Extravaganza",
          "image": "new_veg_extravaganza.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 450,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 695,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 500,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 310,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 549,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 265,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 490,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            60,
            61,
            63,
            64,
            65,
            69,
            70
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 490,
          "code": "PIZ0124",
          "sizeCode": "Xx",
          "sortOrder": 7,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4083,
          "selectedCrustId": "1",
          "description": "American classic! Spicy, herbed chicken sausage on pizza",
          "name": "Chicken Sausage",
          "image": "new_chicken_sausage.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 305,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 495,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 355,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 240,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 404,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 195,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 345,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            396
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 345,
          "code": "PIZ5106",
          "sizeCode": "Eq",
          "sortOrder": 8,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        }
      ]
    },
    {
      "categoryName": "Veg Pizza",
      "categoryId": 2,
      "categoryType": 0,
      "data": [
        {
          "id": 4062,
          "selectedCrustId": "1",
          "description": "A classic delight with 100% Real mozzarella cheese",
          "name": "Margherita",
          "image": "new_margherita_2502.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 99,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 199,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 249,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 174,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 298,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 129,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 239,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 99,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4062",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 239,
          "code": "PIZ0117",
          "sizeCode": "Pc",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4079,
          "selectedCrustId": "1",
          "description": "Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !",
          "name": "Cheese n Corn",
          "image": "new_cheese_n_corn.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 305,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 495,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 355,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 240,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 404,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 195,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 345,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4079",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            70
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 345,
          "code": "PIZ0128",
          "sizeCode": "Ah",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4441,
          "selectedCrustId": "1",
          "description": "A delectable combination of cheese and juicy tomato",
          "name": "Cheese n Tomato",
          "image": "cheese_and_tomato.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4441",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6"
                  }
                },
                {
                  "price": 305,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4441",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7"
                  }
                },
                {
                  "price": 495,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4441",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 355,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4441",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 240,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4441",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6"
                  }
                },
                {
                  "price": 404,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4441",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 195,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4441",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6"
                  }
                },
                {
                  "price": 345,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4441",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4441",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            65
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397
          ],
          "productType": 0,
          "defaultCrustPrice": 345,
          "code": "PIZ0150",
          "sizeCode": "Iz",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4444,
          "selectedCrustId": "1",
          "description": "Tangy & spicy achari flavours on a super cheesy onion pizza- as desi as it gets!",
          "name": "Achari Do Pyaza",
          "image": "updated_achari_do_pyaza.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4444",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 305,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4444",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 495,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4444",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 355,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4444",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 240,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4444",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 404,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4444",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 195,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4444",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 345,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4444",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4444",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            61
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 345,
          "code": "PIZ0162",
          "sizeCode": "Ah",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4063,
          "selectedCrustId": "1",
          "description": "A classic delight loaded with extra 100% real mozzarella cheese",
          "name": "Double Cheese Margherita",
          "image": "double_cheese_margherita_2502.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 185,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4063",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 335,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4063",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 535,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4063",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 385,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4063",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 260,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4063",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 434,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4063",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4063",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 375,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4063",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 185,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4063",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 375,
          "code": "PIZ0118",
          "sizeCode": "1",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4080,
          "selectedCrustId": "1",
          "description": "Delectable combination of onion & capsicum, a veggie lovers pick",
          "name": "Fresh Veggie",
          "image": "new_fresh_veggie.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 185,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4080",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 335,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4080",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 535,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4080",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 385,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4080",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 260,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4080",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 434,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4080",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4080",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 375,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4080",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 185,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4080",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            61,
            64
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 375,
          "code": "PIZ0126",
          "sizeCode": "Aj",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4064,
          "selectedCrustId": "1",
          "description": "Delightful combination of onion, capsicum, tomato & grilled mushroom",
          "name": "Farmhouse",
          "image": "farmhouse.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 595,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 245,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 435,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4064",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            60,
            61,
            64,
            65
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 435,
          "code": "PIZ0119",
          "sizeCode": "Fa",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4065,
          "selectedCrustId": "1",
          "description": "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
          "name": "Peppy Paneer",
          "image": "new_peppy_paneer.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 595,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 245,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 435,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4065",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            64,
            67,
            68
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 435,
          "code": "PIZ0120",
          "sizeCode": "Pa",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4066,
          "selectedCrustId": "1",
          "description": "Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
          "name": "Mexican Green Wave",
          "image": "new_mexican_green_wave.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4066",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4066",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 595,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4066",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4066",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4066",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4066",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 245,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4066",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 435,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4066",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4066",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            61,
            64,
            65,
            69
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 435,
          "code": "PIZ0121",
          "sizeCode": "Me",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4075,
          "selectedCrustId": "1",
          "description": "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
          "name": "Veggie Paradise",
          "image": "new_veggie_paradise.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 595,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 245,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 435,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4075",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            63,
            64,
            68,
            70
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 435,
          "code": "PIZ0125",
          "sizeCode": "Vw",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4081,
          "selectedCrustId": "1",
          "description": "Flavorful twist of spicy makhani sauce topped with paneer & capsicum",
          "name": "Paneer Makhani",
          "image": "updated_paneer_makhani.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4081",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4081",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 595,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4081",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4081",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4081",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4081",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 245,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4081",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 435,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4081",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4081",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            64,
            67
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 435,
          "code": "PIZ0127",
          "sizeCode": "Ew",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4067,
          "selectedCrustId": "1",
          "description": "Veg delight - onion, capsicum, grilled mushroom, corn & paneer",
          "name": "Deluxe Veggie",
          "image": "new_deluxe_veggie.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4067",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 450,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4067",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 695,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4067",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 500,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4067",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 310,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4067",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 549,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4067",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 265,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4067",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 490,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4067",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4067",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            60,
            61,
            64,
            67,
            70
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 490,
          "code": "PIZ0122",
          "sizeCode": "De",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4068,
          "selectedCrustId": "1",
          "description": "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
          "name": "Veg Extravaganza",
          "image": "new_veg_extravaganza.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 450,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 695,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 500,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 310,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 549,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 265,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 490,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4068",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            60,
            61,
            63,
            64,
            65,
            69,
            70
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 490,
          "code": "PIZ0124",
          "sizeCode": "Xx",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4434,
          "selectedCrustId": "1",
          "description": "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo",
          "name": "Indi Tandoori Paneer",
          "image": "IndianTandooriPaneer.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4434",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 450,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4434",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 695,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4434",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 500,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4434",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 310,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4434",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 549,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4434",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 265,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4434",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 490,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4434",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4434",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            64,
            68,
            411
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 490,
          "code": "PIZ0148",
          "sizeCode": "Iw",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4446,
          "selectedCrustId": "1",
          "description": "Paneer chunks in your favourite spicy kadhai masala flavors, with toppings of onion & capsicum",
          "name": "Kadhai Paneer",
          "image": "updated_kadhai_paneer.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4446",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4446",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4446",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4446",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4446",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4446",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            61,
            64,
            67
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 494,
          "code": "PIZ0163",
          "sizeCode": "Ah",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4464,
          "selectedCrustId": "1",
          "description": "Delight of capsicum, yellow & red bell peppers, jalapeno and red paprika",
          "name": "5 Pepper",
          "image": "5_pepper_pizza.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4464",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 450,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4464",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 500,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4464",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 310,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4464",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 549,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4464",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4464",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            64,
            68,
            69
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 0,
          "defaultCrustPrice": 549,
          "code": "PIZ0123",
          "sizeCode": "Fp",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        }
      ]
    },
    {
      "categoryName": "Non-Veg Pizza",
      "categoryId": 3,
      "categoryType": 1,
      "data": [
        {
          "id": 4083,
          "selectedCrustId": "1",
          "description": "American classic! Spicy, herbed chicken sausage on pizza",
          "name": "Chicken Sausage",
          "image": "new_chicken_sausage.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 305,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 495,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 355,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 240,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 404,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 195,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 345,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 165,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4083",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            396
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 345,
          "code": "PIZ5106",
          "sizeCode": "Eq",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4082,
          "selectedCrustId": "1",
          "description": "Pepper barbecue chicken for that extra zing",
          "name": "Pepper Barbecue Chicken",
          "image": "new_pepper_barbeque_chicken.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 185,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 335,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 535,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 385,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 260,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 434,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 375,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 185,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4082",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            393
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 375,
          "code": "PIZ5119",
          "sizeCode": "Ej",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4084,
          "selectedCrustId": "1",
          "description": "A classic favourite with pepper barbeque chicken & onion",
          "name": "Pepper Barbecue & Onion",
          "image": "new_chicken_onion_barbeque.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4084",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 395,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4084",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 595,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4084",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 445,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4084",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 290,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4084",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 494,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4084",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 245,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4084",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 435,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4084",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 215,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4084",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            61,
            393
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 435,
          "code": "PIZ5120",
          "sizeCode": "Ek",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4069,
          "selectedCrustId": "1",
          "description": "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
          "name": "Chicken Golden Delight",
          "image": "new_chicken_golden_delight.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4069",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 450,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4069",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 695,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4069",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 500,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4069",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 310,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4069",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 549,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4069",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 265,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4069",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 490,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4069",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4069",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            51,
            70
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 490,
          "code": "PIZ5123",
          "sizeCode": "Gd",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4073,
          "selectedCrustId": "1",
          "description": "Grilled chicken rashers, peri-peri chicken, onion & capsicum, a complete fiesta",
          "name": "Chicken Fiesta",
          "image": "new_chicken_fiesta.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4073",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 450,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4073",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 695,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4073",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 500,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4073",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 310,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4073",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 549,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4073",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 265,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4073",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 490,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4073",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 235,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4073",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            61,
            64,
            394,
            395
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 490,
          "code": "PIZ5122",
          "sizeCode": "Cy",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4070,
          "selectedCrustId": "1",
          "description": "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken & grilled chicken rashers",
          "name": "Non Veg Supreme",
          "image": "new_non_veg_supreme.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 305,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4070",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 570,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4070",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 835,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4070",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 620,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4070",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 380,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4070",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 669,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4070",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 335,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4070",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 610,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4070",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 305,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4070",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            60,
            61,
            63,
            64,
            393,
            394,
            395
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": true,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 610,
          "code": "PIZ5125",
          "sizeCode": "Xn",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4071,
          "selectedCrustId": "1",
          "description": "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
          "name": "Chicken Pepperoni",
          "image": "cheesepepperoni.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 305,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4071",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 570,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4071",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 835,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4071",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 620,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4071",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 380,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4071",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 669,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4071",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 335,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4071",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 610,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4071",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 305,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4071",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            75,
            399
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 610,
          "code": "PIZ5131",
          "sizeCode": "Pe",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4076,
          "selectedCrustId": "1",
          "description": "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers",
          "name": "Chicken Dominator",
          "image": "new_chicken_dominator.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 305,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4076",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 570,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4076",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 835,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4076",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 620,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4076",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 380,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4076",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 669,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4076",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 335,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4076",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 610,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4076",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 305,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4076",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            394,
            395,
            397
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 610,
          "code": "PIZ5124",
          "sizeCode": "Cd",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4439,
          "selectedCrustId": "1",
          "description": "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
          "name": "Indi Chicken Tikka",
          "image": "IndianTandooriChickenTikka.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 305,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "BHT07",
                  "uniqGeneratedPriceId": "6#1#4439",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 570,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BHT95",
                  "uniqGeneratedPriceId": "7#1#4439",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                },
                {
                  "price": 835,
                  "description": "Serves 4",
                  "name": "Large",
                  "sizeId": 8,
                  "code": "BHT125",
                  "uniqGeneratedPriceId": "8#1#4439",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#8",
                    "61": "61#8",
                    "63": "63#8",
                    "64": "64#8",
                    "65": "65#8",
                    "67": "67#8",
                    "68": "68#8",
                    "69": "69#8",
                    "70": "70#8",
                    "393": "393#8",
                    "394": "394#8",
                    "395": "395#8",
                    "396": "396#8",
                    "397": "397#8",
                    "399": "399#8"
                  }
                }
              ],
              "crustId": 1,
              "name": "New Hand Tossed",
              "code": "BHT"
            },
            {
              "sizes": [
                {
                  "price": 620,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "TC95",
                  "uniqGeneratedPriceId": "7#3#4439",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 3,
              "name": "Wheat Thin Crust",
              "code": "WTC"
            },
            {
              "sizes": [
                {
                  "price": 380,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "CB07",
                  "uniqGeneratedPriceId": "6#115#4439",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 669,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "BU95",
                  "uniqGeneratedPriceId": "7#115#4439",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 115,
              "name": "Cheese Burst",
              "code": "CB"
            },
            {
              "sizes": [
                {
                  "price": 335,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4439",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                },
                {
                  "price": 610,
                  "description": "Serves 2",
                  "name": "Medium",
                  "sizeId": 7,
                  "code": "FP95",
                  "uniqGeneratedPriceId": "7#128#4439",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#7",
                    "61": "61#7",
                    "63": "63#7",
                    "64": "64#7",
                    "65": "65#7",
                    "67": "67#7",
                    "68": "68#7",
                    "69": "69#7",
                    "70": "70#7",
                    "393": "393#7",
                    "394": "394#7",
                    "395": "395#7",
                    "396": "396#7",
                    "397": "397#7",
                    "399": "399#7"
                  }
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 305,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4439",
                  "uniqGeneratedToppingsPriceId": {
                    "60": "60#6",
                    "61": "61#6",
                    "63": "63#6",
                    "64": "64#6",
                    "65": "65#6",
                    "67": "67#6",
                    "68": "68#6",
                    "69": "69#6",
                    "70": "70#6",
                    "393": "393#6",
                    "394": "394#6",
                    "395": "395#6",
                    "396": "396#6",
                    "397": "397#6",
                    "399": "399#6"
                  }
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "defaultToppings": [
            61,
            68,
            397
          ],
          "selectedSizeId": "7",
          "isCustomizable": true,
          "isReplaceable": false,
          "allowedToppings": [
            60,
            61,
            63,
            64,
            65,
            67,
            68,
            69,
            70,
            393,
            394,
            395,
            396,
            397,
            399
          ],
          "productType": 1,
          "defaultCrustPrice": 610,
          "code": "PIZ5135",
          "sizeCode": "Ic",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        }
      ]
    },
    {
      "categoryName": "Meals & Combos",
      "categoryId": 50,
      "categoryType": 2,
      "data": [
        {
          "id": 4533,
          "description": "Large Non Veg Supreme Pizza + 2 Stuffed Garlic Bread + 4 Choco lava cake + 2 Pepsi",
          "name": "Family House Party – Non Veg Premium Combo",
          "image": "meal_4_party_combo_non_veg_supreme.jpg",
          "defaultPrice": 1499,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "CMB1148",
          "sizeCode": "MCT0006",
          "sortOrder": 1,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4532,
          "description": "Large Chicken Golden Delight Pizza + 2 Garlic Bread + 4 Choco lava cake + 2 Pepsi",
          "name": "Family House Party – Non Veg Deluxe Combo",
          "image": "meal_4_party_combo_chicken_golden_delight.jpg",
          "defaultPrice": 1299,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "CMB1147",
          "sizeCode": "MCT0006",
          "sortOrder": 2,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4531,
          "description": "Large Veg Extravaganza Pizza + 2 Garlic Bread + 4 Choco lava cake + 2 Pepsi",
          "name": "Family House Party – Veg Deluxe Combo",
          "image": "meal_4_party_combo_veg_extravaganza.jpg",
          "defaultPrice": 1299,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "CMB1146",
          "sizeCode": "MCT0006",
          "sortOrder": 3,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4530,
          "description": "Large Pepper BBQ Chicken Pizza + Garlic Bread + 4 Brownie Fantasy + 2 Pepsi",
          "name": "Family House Party – Non Veg Value Combo",
          "image": "meal_4_party_combo_pepper_bbq_chicken.jpg",
          "defaultPrice": 899,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "CMB1145",
          "sizeCode": "MCT0006",
          "sortOrder": 4,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4529,
          "description": "Large Fresh Veggie Pizza + Garlic Bread + 4 Brownie Fantasy + 2 Pepsi",
          "name": "Family House Party – Veg Value Combo",
          "image": "meal_4_party_combo_fresh_veggie.jpg",
          "defaultPrice": 899,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "CMB1144",
          "sizeCode": "MCT0006",
          "sortOrder": 5,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4420,
          "description": "2 Med Pizzas(Farmhouse + Peppy Paneer) + 2(Garlic Bread + Pepsi)",
          "name": "Stay at Home Family Special (Veg)",
          "image": "pizza_feast_veg.jpg",
          "defaultPrice": 899,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "CMB1065",
          "sizeCode": "MCT0006",
          "sortOrder": 7,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4410,
          "description": "Med Pepper BBQ Chicken Pizza + Garlic Bread + Pepsi",
          "name": "Family Treat Non Veg meals",
          "image": "the-perfect-meal-for-two-nv.jpg",
          "defaultPrice": 485,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "CMB1064",
          "sizeCode": "MCT0006",
          "sortOrder": 8,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4400,
          "description": "Med Peppy Paneer Pizza + Garlic Bread + Pepsi",
          "name": "Family Treat Paneer Meals",
          "image": "meal_4_2_gb_peppy_paneer.jpg",
          "defaultPrice": 485,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "CMB1063",
          "sizeCode": "MCT0006",
          "sortOrder": 9,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4390,
          "description": "Med Farmhouse Pizza + Garlic Bread + Pepsi",
          "name": "Family Treat Veg Meals",
          "image": "meal_4_2_gb_farmhouse.jpg",
          "defaultPrice": 485,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "CMB1062",
          "sizeCode": "MCT0006",
          "sortOrder": 10,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4380,
          "description": "Reg Pepper BBQ Chicken Pizza + Garlic Bread + Pepsi",
          "name": "Movie Marathon specials (N.Veg)",
          "image": "meal_4_1_gb_combo_nvg.jpg",
          "defaultPrice": 295,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "CMB1061",
          "sizeCode": "MCT0006",
          "sortOrder": 11,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4370,
          "description": "Reg Fresh Veggie Pizza + Garlic Bread + Pepsi",
          "name": "Movie marathon specials (Veg)",
          "image": "meal_4_1_gb_combo_veg.jpg",
          "defaultPrice": 295,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "CMB1060",
          "sizeCode": "MCT0006",
          "sortOrder": 12,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4360,
          "description": "Reg Chicken Sausage Pizza + Pepsi",
          "name": "Work from Home Non Veg treat",
          "image": "meal_4_1_classic_nvg.jpg",
          "defaultPrice": 199,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "CMB1088",
          "sizeCode": "MCT0006",
          "sortOrder": 13,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4350,
          "description": "Reg Cheese & Corn Pizza + Pepsi",
          "name": "Work from Home Veg treat",
          "image": "meal_4_1_classic_veg.jpg",
          "defaultPrice": 199,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "CMB1058",
          "sizeCode": "MCT0006",
          "sortOrder": 14,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        }
      ]
    },
    {
      "categoryName": "Pizza Mania",
      "categoryId": 20,
      "categoryType": 0,
      "data": [
        {
          "id": 3972,
          "selectedCrustId": "128",
          "description": "Chicken sausage, pepper barbecue chicken & peri-peri chicken in a fresh pan crust",
          "name": "Non Veg Loaded",
          "image": "pizza_mania_non-veg_loaded.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 155,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#3972"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 155,
          "code": "PIZ5127",
          "sizeCode": "Ln",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 3969,
          "selectedCrustId": "128",
          "description": "Tomato, jalapeno & grilled mushroom served in a fresh pan crust",
          "name": "Veg Loaded",
          "image": "pizza_mania_veg_loaded.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 135,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#3969"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 135,
          "code": "PIZ0140",
          "sizeCode": "Lv",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4107,
          "selectedCrustId": "391",
          "description": "Pepper barbecue chicken for that extra zing",
          "name": "Pepper Barbecue Chicken",
          "image": "pizza_mania_pepper_barbeque_chicken.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 135,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4107"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 105,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4107"
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 105,
          "code": "PIZ5126",
          "sizeCode": "Ev",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4099,
          "selectedCrustId": "391",
          "description": "Cheese lovers paradise, loaded with mozzarella, cheddar & gouda cheese",
          "name": "Cheesy",
          "image": "pizza_mania_cheesy.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 129,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4099"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 99,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4099"
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 99,
          "code": "PIZ0133",
          "sizeCode": "Zx",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4098,
          "selectedCrustId": "391",
          "description": "Creamy Paneer & Onion",
          "name": "Paneer & Onion",
          "image": "pizza_mania_paneer_onion.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 125,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4098"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 95,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4098"
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 95,
          "code": "PIZ0132",
          "sizeCode": "PO",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4106,
          "selectedCrustId": "391",
          "description": "American classic! Spicy, herbed chicken sausage on pizza",
          "name": "Chicken Sausage",
          "image": "pizza_mania_chicken_sausage.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 125,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4106"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 95,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4106"
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 95,
          "code": "PIZ5109",
          "sizeCode": "ES",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4096,
          "selectedCrustId": "391",
          "description": "Sweet & juicy golden corn for that lipsmacking taste",
          "name": "Golden Corn",
          "image": "pizza_mania_golden_corn.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 109,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4096"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 79,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4096"
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 79,
          "code": "PIZ0130",
          "sizeCode": "Go",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4094,
          "selectedCrustId": "391",
          "description": "Fresh & crisp capsicum for the perfect crunch in pizza",
          "name": "Capsicum",
          "image": "pizza_mania_capsicum.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 105,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4094"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 75,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4094"
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 75,
          "code": "PIZ0131",
          "sizeCode": "Um",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4095,
          "selectedCrustId": "391",
          "description": "Crunchy onion on a cheesy base. The pizza mania classic",
          "name": "Onion",
          "image": "pizza_mania_onion.png",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 89,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4095"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 59,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4095"
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 59,
          "code": "PIZ0129",
          "sizeCode": "On",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4097,
          "selectedCrustId": "391",
          "description": "Juicy tomato in a flavourful combination with cheese & tangy sauce ",
          "name": "Tomato",
          "image": "new_pizza_mania_tomato.jpg",
          "defaultPrice": 0,
          "crust": [
            {
              "sizes": [
                {
                  "price": 89,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "FP07",
                  "uniqGeneratedPriceId": "6#128#4097"
                }
              ],
              "crustId": 128,
              "name": "Fresh Pan Pizza",
              "code": "FPP"
            },
            {
              "sizes": [
                {
                  "price": 59,
                  "description": "Serves 1",
                  "name": "Regular",
                  "sizeId": 6,
                  "code": "HT07",
                  "uniqGeneratedPriceId": "6#391#4097"
                }
              ],
              "crustId": 391,
              "name": "Classic Hand Tossed",
              "code": "CHT"
            }
          ],
          "selectedSizeId": "6",
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 59,
          "code": "PIZ0134",
          "sizeCode": "Sh",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        }
      ]
    },
    {
      "categoryName": "Speciality Chicken",
      "categoryId": 46,
      "categoryType": 1,
      "data": [
        {
          "id": 4039,
          "description": "Tender, Juicy, Melt in Mouth Chicken Meatballs in Peri Peri seasoning",
          "name": "Chicken Meatballs Peri-Peri Seasoning",
          "image": "Chicken-Meat-balls.png",
          "defaultPrice": 109,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "SID0037",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4042,
          "description": "Boneless Delight! Baked to Golden Perfection with Peri Peri Sauce",
          "name": "Boneless Chicken Wings Peri-Peri",
          "image": "Boneless-Chicken-wings.png",
          "defaultPrice": 149,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "SID0040",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4456,
          "description": "Tender, Juicy, Melt in Mouth Chicken Meatballs in Peri Peri Sauce",
          "name": "Chicken Meatballs Peri-Peri Sauce",
          "image": "chicken_meatballs_peri_peri_sauce.jpg",
          "defaultPrice": 109,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "SID0062",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        }
      ]
    },
    {
      "categoryName": "Sides",
      "categoryId": 4,
      "categoryType": 2,
      "data": [
        {
          "id": 21,
          "description": "Baked to perfection. Your perfect pizza partner! Tastes best with dip",
          "name": "Garlic Breadsticks",
          "image": "Garlic_bread.png",
          "defaultPrice": 99,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "BRD0020",
          "sizeCode": "GB95",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 23,
          "description": "A spicy, tangy flavored cheese dip is a an absolute delight with your favourite Garlic Breadsticks & Stuffed Garlic Bread",
          "name": "Cheesy Jalapeno Dip",
          "image": "new_jalapeno.png",
          "defaultPrice": 25,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "DIP0006",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 29,
          "description": "An all-time favorite with your Garlic Breadsticks & Stuffed Garlic Bread for a Cheesy indulgence",
          "name": "Cheesy Dip",
          "image": "new_cheesy.png",
          "defaultPrice": 25,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "DIP0005",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 44,
          "description": "Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake",
          "name": " Choco Lava Cake",
          "image": "Choco_Lava.png",
          "defaultPrice": 99,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "CAKE02",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 45,
          "description": "Creamy white pasta with herb grilled mushrooms",
          "name": "White Pasta Italiano Veg",
          "image": "White-Pasta_Veg.png",
          "defaultPrice": 135,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "PAS0007",
          "sizeCode": "PAS-VEG",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 46,
          "description": "Creamy white pasta with pepper barbecue chicken",
          "name": "White Pasta Italiano Non-Veg",
          "image": "White-Pasta_Nvg.png",
          "defaultPrice": 145,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "PAS0009",
          "sizeCode": "PAS-NVEG",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 56,
          "description": "Sweet temptation! Butterscotch flavored mousse ",
          "name": "Butterscotch Mousse Cake",
          "image": "Butterscotch.png",
          "defaultPrice": 99,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "DST0089",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 155,
          "description": "Truly irresistible! Crispy taco with non-veg patty & creamy harissa sauce",
          "name": "Taco Mexicana Non Veg",
          "image": "Taco_Nvg.png",
          "defaultPrice": 135,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "TACNV06",
          "sizeCode": "TNV03",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 157,
          "description": "Truly irresistible! Crispy taco with veg patty & creamy harissa sauce",
          "name": "Taco Mexicana Veg",
          "image": "Taco_Veg.png",
          "defaultPrice": 118,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "TACVG04",
          "sizeCode": "TVG03",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 185,
          "description": "Snacky bites! Pizza rolls with chicken sausage & creamy harissa sauce",
          "name": "Chicken Parcel",
          "image": "Parcel_Nonveg.jpg",
          "defaultPrice": 45,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "NVPARCEL",
          "sizeCode": "PNVG01",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 187,
          "description": "Snacky bites! Pizza rolls with paneer & creamy harissa sauce",
          "name": "Veg Parcel",
          "image": "Parcel_Veg.jpg",
          "defaultPrice": 39,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "VGPARCEL",
          "sizeCode": "PVEG01",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4093,
          "description": "Freshly baked garlic bread with cheese, juicy corn & tangy jalapeno",
          "name": "Stuffed Garlic Breadsticks",
          "image": "Stuffed_garlic_Bread.png",
          "defaultPrice": 145,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "BRD0024",
          "sizeCode": "BR-SGB",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4100,
          "description": "Oven-baked buns with cheese, tomato & capsicum in creamy mayo",
          "name": "Burger Pizza - Classic Veg",
          "image": "Burger_PizzaVeg_423X420_Pixel.png",
          "defaultPrice": 105,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "SID0046",
          "sizeCode": "PBCV01",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4101,
          "description": "Oven-baked buns with cheese, paneer, tomato, capsicum & red paprika in creamy mayo",
          "name": "Burger Pizza - Premium Veg",
          "image": "Burger_PizzaVeg_423X420_Pixel.png",
          "defaultPrice": 135,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "SID0046",
          "sizeCode": "PBSV01",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4102,
          "description": "Oven-baked buns with cheese, peri-peri chicken, tomato & capsicum in creamy mayo",
          "name": "Burger Pizza - Classic Non Veg",
          "image": "Burger_PizzaNonVeg_nvg.png",
          "defaultPrice": 145,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 1,
          "defaultCrustPrice": 0,
          "code": "SID0046",
          "sizeCode": "PBCN02",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4110,
          "description": "Goodness of Tomato Ketchup in mini sachets",
          "name": "Tomato Ketchup",
          "image": "SACHET.JPG",
          "defaultPrice": 1,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "SID003",
          "sizeCode": "SACHET",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4190,
          "description": "Crisp and golden outside, flavorful burst of cheese, potato & spice inside",
          "name": "Potato Cheese Shots",
          "image": "potato_cheese_shots.png",
          "defaultPrice": 59,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "SID0058",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4200,
          "description": "Truly irresistible! Crispy taco with a delicious veg patty & creamy sauce",
          "name": "Taco Mexicana-Veg (Single)",
          "image": "taco.png",
          "defaultPrice": 59,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "TACVG05",
          "sizeCode": "TVG03",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4210,
          "description": "Oven baked wheat thin crispies with peri peri seasoning & cheesy jalapeno dip",
          "name": "Crunchy Strips",
          "image": "crunchy_strips.png",
          "defaultPrice": 59,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "SID0057",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4240,
          "description": "Crispy wavy masala coated fries served with a spicy tomato chilli sauce",
          "name": "Crinkle Fries",
          "image": "Crinkle_Fries.png",
          "defaultPrice": 59,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "SID0059",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4250,
          "description": "Sweet Temptation! Hot Chocolate Brownie drizzled with chocolate fudge sauce",
          "name": "Brownie Fantasy",
          "image": "Brownie_Fantasy.png",
          "defaultPrice": 59,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "SID0060",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        }
      ]
    },
    {
      "categoryName": "Beverages",
      "categoryId": 5,
      "categoryType": 0,
      "data": [
        {
          "id": 4260,
          "description": "Sparkling and Refreshing Beverage",
          "name": "Pepsi (500ml)",
          "image": "pepsi_new_20190312.png",
          "defaultPrice": 60,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "BEV0119",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4290,
          "description": "Great Mango Taste",
          "name": "Slice (350ml)",
          "image": "slice.jpg",
          "defaultPrice": 50,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "BEV0125",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4300,
          "description": "Refreshing clear drink with a natural lemon flavor",
          "name": "7Up (500ml)",
          "image": "7up_new_2202.jpg",
          "defaultPrice": 60,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "BEV0120",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4310,
          "description": "Delicious Orange Flavoured beverage",
          "name": "Mirinda (500ml)",
          "image": "mirinda.jpg",
          "defaultPrice": 60,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "BEV0123",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4320,
          "description": "Naturally Refreshing, Not Too Sweet, No Gas",
          "name": "Lipton Ice Tea (250ml)",
          "image": "lit.jpg",
          "defaultPrice": 50,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "BEV0124",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4340,
          "description": "Maximum Taste Zero Calories",
          "name": "Pepsi Black Can",
          "image": "pepsi_black.png",
          "defaultPrice": 60,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "BEV0126",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 4498,
          "description": "NIMBOOZ",
          "name": "NIMBOOZ (250Ml)",
          "image": "7up_nimbooz.jpg",
          "defaultPrice": 50,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "BEV0139",
          "sizeCode": ".",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        }
      ]
    },
    {
      "categoryName": "Dessert",
      "categoryId": 26,
      "categoryType": 0,
      "data": [
        {
          "id": 44,
          "description": "Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake",
          "name": " Choco Lava Cake",
          "image": "Choco_Lava.png",
          "defaultPrice": 99,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "CAKE02",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        },
        {
          "id": 56,
          "description": "Sweet temptation! Butterscotch flavored mousse ",
          "name": "Butterscotch Mousse Cake",
          "image": "Butterscotch.png",
          "defaultPrice": 99,
          "isCustomizable": false,
          "isReplaceable": false,
          "productType": 0,
          "defaultCrustPrice": 0,
          "code": "DST0089",
          "sortOrder": 0,
          "disableClick": false,
          "buttonText": "ADD TO CART"
        }
      ]
    }
  ]