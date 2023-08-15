import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import agentRoutes from './routes/agentRoutes.js';
import { initializeDatabase } from './controller/agentController.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// routes
app.use("/", agentRoutes);

const dbRoute = process.env.REACT_APP_ATLAS_URI;
const dbName = "arcDb";
mongoose
    .connect(dbRoute, { dbName: dbName, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to MongoDB."))
    .catch((err) => console.error("Could not connect to MongoDB: ", err));



app.get('/', (req, res) => {
    res.send('Hello World!');
});
  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    initializeDatabase();
});