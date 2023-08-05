const mongoose = require('mongoose')
const connectionString = process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log('Mongodb Atlas Connected to Server');
}).catch((err)=>{
    console.log(`Mongodb Connection Failed : ${err}`);
})