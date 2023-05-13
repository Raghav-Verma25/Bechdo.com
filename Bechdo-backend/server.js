const express =require('express');
const cors =require('cors');
const mongoose =require('mongoose');  
// const dotenv =require('dotenv');
// import "./Model/User";
// dotenv.config({path:'./.env'});
require('dotenv').config();
const app = express();

//===========MIDDLEWARE============ 
app.use(cors());

//=================MONGODB CONFIG AND CONNECTION=============

const url = process.env.mongoURI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>  console.log("Server up and running!"))
.catch((error) => console.log(error.message) )
 
 //===============ROUTES ENTRY POINT==========================
// require('./Routes/Auth');

app.use(require('./Routes/Auth'))
app.use(require('./Routes/Upload/upload'))


// ==============SERVER CONFIG AND CONNECTION===============


const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server start at port ${PORT}`)
})

