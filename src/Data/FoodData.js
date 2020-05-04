export const foodItem = [
    {
        name: "Chesse Pizza",
        img: "/img/pizza1.jpeg",
        section: "Pizza"
    },
    {
        name: "Pepporani Pizza",
        img: "/img/pizza2.jpeg",
        section: "Pizza"
    },
    {
        name: "Brust Pizza",
        img: "/img/pizza3.jpeg",
        section: "Sandwich"
    },
    {
        name: "Peri Peri Pizza",
        img: "/img/pizza4.jpeg",
        section: "Sandwich"
    },
    {
        name: "Capcicum Pizza",
        img: "/img/pizza5.jpeg",
        section: "Bread"
    },
    {
        name: "Burger",
        img: "/img/pizza6.jpeg",
        section: "Burger"
    },
    {
        name: "Fries",
        img: "/img/pizza2.jpeg",
        section: "Burger"
    },
    {
        name: "Tandoori Pizza",
        img: "/img/pizza1.jpeg",
        section: "Burger"
    }
]

export const foods = foodItem.reduce((res, food)=>{
if(!res[food.section]){
    res[food.section] = [];
}
res[food.section].push(food);
return res;
},{})