const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {connectMongoDB} = require('./connection');
const taskRouter = require('./routes/taskRouter');

const app = express();
const PORT = 8000;

connectMongoDB('mongodb://127.0.0.1:27017/task-list');

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use('/',taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});