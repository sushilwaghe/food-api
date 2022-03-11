const express = require('express');
const { append } = require('express/lib/response');
require('dotenv').config();

const App = express();

const PORT = process.env.PORT || 5000;

const foodItems = [
    {
        Id: 1,
        name: 'Pizza',
        price: '$10.00',
        description:'A delicious pizza',
        image:'https://loremflickr.com/320/240/pizza'
    },
    {
        Id: 2,
        name: 'Burger',
        price: '$5.00',
        description:'A delicious Burger',
        image:'https://loremflickr.com/320/240/burger'
    },
    {
        Id: 3,
        name: 'Cake',
        price: '$3.00',
        description:'A delicious cake',
        image:'https://loremflickr.com/320/240/cake'
    },
    {
        Id: 4,
        name: 'Coffee',
        price: '$2.00',
        description:'A delicious coffee',
        image:'https://loremflickr.com/320/240/coffe'
    },
    {
        Id: 5,
        name: 'Tea',
        price: '$1.00',
        description:'A delicious tea',
        image:'https://loremflickr.com/320/240/tea'
    }
]

App.get("/food/random", (req, res)=> {
    const randomItem = foodItems[Math.floor(Math.random() * foodItems.length)]
    res.send(randomItem);
})

App.listen(PORT, ()=>{
    console.log(`Server Started on port ${PORT}`);
})
