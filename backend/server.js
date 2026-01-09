const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));


// Test route
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.listen(5000, () => console.log('Server running'));