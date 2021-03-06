var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    profile: String,
    role: String,
    photoId: String
}, {collection: 'user'});
module.exports = userSchema;