var mongoose = require('mongoose');
var enrollmentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PropertyModel'
    }
}, {collection: 'wishlist'});
module.exports = enrollmentSchema;