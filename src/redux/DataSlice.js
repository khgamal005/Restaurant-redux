import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    //_____________________________Data-Website_____________________
    products: [
        { id: 1, name: 'Biscuits with fruit and juice', image: '../images/Breakfast/1.png', price: 20, cat: "breakFast" },
        { id: 2, name: 'marinated chicken', image: '../images/Lunch/1.png', price: 30, cat: "lunch" },
        { id: 3, name: 'Grilled beef ribs', image: '../images/Dinner/1.png', price: 100, cat: "dinner" },
        { id: 4, name: 'Soft drinks', image: '../images/Drinks/1.png', price: 10, cat: "drinks" },
        { id: 5, name: 'Croissant with coffee', image: '../images/Breakfast/2.png', price: 20, cat: "breakFast" },
        { id: 6, name: 'Eggs and bread', image: '../images/Breakfast/3.png', price: 40, cat: "breakFast" },
        { id: 7, name: 'Eggs, bread and sausage', image: '../images/Breakfast/4.png', price: 20, cat: "breakFast" },
        { id: 8, name: 'eggs and bread', image: '../images/Breakfast/5.png', price: 35, cat: "breakFast" },
        { id: 9, name: 'Eggs, bread and cheese', image: '../images/Breakfast/6.png', price: 45, cat: "breakFast" },
        { id: 10, name: 'French fries with sauce', image: '../images/Lunch/2.png', price: 55, cat: "lunch" },
        { id: 11, name: 'Gobi Manchurian Chinese Cuisine', image: '../images/Lunch/3.png', price: 40, cat: "lunch" },
        { id: 12, name: 'Seafood', image: '../images/Lunch/4.png', price: 65, cat: "lunch" },
        { id: 13, name: 'hamburger sandwiches', image: '../images/Lunch/5.png', price: 70, cat: "lunch" },
        { id: 14, name: 'Meat with rice and potatoes', image: '../images/Lunch/6.png', price: 100, cat: "lunch" },
        { id: 15, name: 'Ceviche with vegetables', image: '../images/Dinner/2.png', price: 120, cat: "dinner" },
        { id: 16, name: 'Asian flavor from Sugar Bone Borneo', image: '../images/Dinner/3.png', price: 105, cat: "dinner" },
        { id: 17, name: 'shish kebab', image: '../images/Dinner/4.png', price: 89, cat: "dinner" },
        { id: 18, name: 'Grilled lamb dish', image: '../images/Dinner/5.png', price: 90, cat: "dinner" },
        { id: 19, name: 'stirring pasta', image: '../images/Dinner/6.png', price: 100, cat: "dinner" },
        { id: 20, name: 'white tea', image: '../images/Drinks/2.png', price: 25, cat: "drinks" },
        { id: 21, name: 'lemon drink', image: '../images/Drinks/3.png', price: 15, cat: "drinks" },
        { id: 22, name: 'Milkshake cocktail', image: '../images/Drinks/4.png', price: 40, cat: "drinks" },
        { id: 23, name: 'Soft drinks', image: '../images/Drinks/5.png', price: 20, cat: "drinks" },
        { id: 24, name: 'coffee latte', image: '../images/Drinks/6.png', price: 10, cat: "drinks" },
    ]
}

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }

})
export default ProductSlice.reducer