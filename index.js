const express = require('express');

const App = express();

const PORT = 5000;

const northIndianFood = ['Misal', 'Poha', 'Paratha', 'Biryani', 'chole Bature']
const southIndianFood = ['Dosa', 'Idli', 'Uttapa', 'Russam', 'vada']

App.get('/', (req, res)=>{
    res.send('Hello World!');
})

App.get('/food/north', (req, res)=>{
    const index = Math.floor(Math.random() * northIndianFood.length );
    res.send({
        food: northIndianFood[index],
        price: Math.floor(Math.random() * 100),
        category: 'north'
    });
})

App.get('/food/south', (req, res)=>{
    const index = Math.floor(Math.random() * southIndianFood.length );
    res.send({
        food: southIndianFood[index],
        price: Math.floor(Math.random() * 100),
        category: 'south'
    });
})

App.get('/food/mix', (req, res)=>{
    const combinedFood = northIndianFood.concat (southIndianFood);
    const index = Math.floor(Math.random() * combinedFood.length );
    res.send({
        food: combinedFood[index],
        price: Math.floor(Math.random() * 100),
        category: 'mix'
    });
})


App.get('/about', (req, res)=>{
    res.send('This is About Page')
})

App.get('/team', (req, res)=>{
    res.send('Aniket,Chetan,Amar,Deva,Chiku,sourabh,sushil')
})

App.listen(PORT, ()=>{
    console.log(`Server Started on port ${PORT}`);
})
