import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalles', dalleRoutes);

app.get('/', async(req, res) => {
    res.send('Hello from DALL-E')
});

const startServer = async() => {
    try {
        connectDB(process.env.URL_MONGODB_DEV);
        app.listen(9000, () => console.log('Server has started on port http://localhost:9000'));
    } catch (error) {
        console.log(error);
    }
};

startServer();