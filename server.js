const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./ProductRoutes');
require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
