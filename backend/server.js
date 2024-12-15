import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import groupRoutes from './routes/groupRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import paimentRoutes from './routes/paimentRoutes.js';
import programRoutes from './routes/programRoutes.js';



dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse URL-encoded and form-data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', groupRoutes);
app.use('/api', studentRoutes);
app.use('/api', programRoutes);
app.use('/api', paimentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
