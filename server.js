// const express = require('express');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const cors = require('cors');

// dotenv.config();
// mongoose.connect(process.env.MONGO_URI);

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/products', require('./routes/productRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));
// app.use('/api/payments', require('./routes/paymentRoutes'));


// // Test route
// app.get('/', (req, res) => {
//     res.send('Backend is working!');
// });

// app.listen(5000, () => console.log('Server running'));



const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));

// Test route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// PORT (IMPORTANT FOR RAILWAY)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
