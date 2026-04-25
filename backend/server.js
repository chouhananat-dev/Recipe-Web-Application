require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/api/recipe/:query', async(req, res)=>{
    const query = req.params.query;
    const apiUrl = process.env.WEATHER_API_KEY;
    try{
        const response = await axios.get(`${apiUrl}${query}`);
        return res.json(response.data);
    }
    catch(err){
        return res.status(500).json({ error: 'Failed to fetch recipe data' });
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})