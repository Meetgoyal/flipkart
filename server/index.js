const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoute');
const mongoose = require('mongoose');
const PORT = 5004;

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/users',userRoutes);

//database connection
mongoose.connect("mongodb+srv://meetashgoyal:gtAhRTHXP1rhPsQZ@cluster0.pf3s9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("DB connected")).catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log('server Started');
})