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
        price: 350.00
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
return res;
},{})