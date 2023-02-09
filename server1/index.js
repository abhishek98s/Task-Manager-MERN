import express from "express";
const app = express();
import tasks from './routes/tasks.js'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
import errorHandler from './middelware/errorHandler.js'

dotenv.config();

// middleware
app.use(express.json())

app.use("/tasks", tasks);

app.use(errorHandler)

const PORT = process.env.PORT || 6001;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listning on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();