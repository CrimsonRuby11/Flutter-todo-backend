const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://skprithviraj8:crimsonmongo@nodeflutterdb.lixst.mongodb.net/ToDoApp?retryWrites=true&w=majority&appName=nodeflutterdb/ToDoApp/').on('open', () => {
    console.log('Mongo connected!');
}).on('error', () => {
    console.log('Error occurred');
});

module.exports = connection;

