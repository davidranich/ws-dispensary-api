import express from 'express';
const app = express();
const port = process.env.PORT || 8888;
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import "regenerator-runtime";
import config from '../config';
import { authenticate } from './controllers/authenticationController';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

authenticate(config);


import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import strainsRoutes from './routes/strainsRoutes';
import promotionsRoutes from './routes/promotionsRoutes';
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/strains', strainsRoutes);
app.use('/promotions', promotionsRoutes);

mongoose.set('useCreateIndex', true);

app.get('/', (req, res) => {
    res.send('Welcome home!');
});

app.listen(port);

console.log(`Server is running on port ${port}`);