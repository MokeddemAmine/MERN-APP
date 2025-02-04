import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
import { connectDB } from './config/db.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());// allows use to accept JSON data in the body
app.use(routes);// all our routes
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/dist')));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'))
    })
}

app.listen(PORT,() => {
    connectDB();
    console.log('Server Started');
})

// Home page
app.get('/',(req,res) => {
    res.send("Server is ready");
})

