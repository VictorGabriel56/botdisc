const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-nfulh.gcp.mongodb.net/cats3?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
mongoose.Promise = global.Promise;

module.exports= mongoose;
