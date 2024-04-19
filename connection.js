require('dotenv').config();
const mongoose = require('mongoose');
const connectionStr = `mongodb+srv://shreysavani7667:${process.env.MONGO_PW}@cluster0.l7o38f8.mongodb.net/Eshop?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
});
