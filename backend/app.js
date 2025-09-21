import express from 'express';
import product from './routes/productRoutes.js';
import user from './routes/userRoutes.js';
import order from './routes/orderRoutes.js';
import errorHandleMiddleware from './middleware/error.js';
import cookieParser from 'cookie-parser';
import './utils/sentEmail.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
// allow from all the frontend web no block
app.use(cors({
    origin: ['*'],
    // origin: ['http://localhost:3000', 'http://192.168.0.12:3000'],
    credentials: true
}));

app.use("/api/v1", product); //we have to give only starting path here, because we have given the path in productRoutes.js
app.use("/api/v1", user);
app.use("/api/v1", order);

// Error handling middleware
app.use(errorHandleMiddleware);

export default app;
