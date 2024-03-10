const express = require('express');
const mongoose = require('mongoose');
const app = express();
const auth = require('./routes/auth');
const list = require('./routes/list');
const port = 3000;
app.use(express.json());

mongoose.connect('mongodb+srv://rahulgupta13ps:rahul123@cluster0.kqpfsyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((data) => {
  console.log('mongoDb connected');
})
.catch((err) => {
  console.error(err);  
})
mongoose.connect('mongodb+srv://rahulgupta13ps:rahul123@cluster0.kqpfsyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((data) => {
  console.log('mongoDb connected');
})
.catch((err) => {
  console.error(err);
})

app.get('/', (req, res) => {
  res.json({
    test: "okay",
  })
})

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})