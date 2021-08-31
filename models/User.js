const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    userans: [{ type: Types.ObjectId, ref: 'UserAnswers' }]
})

module.exports = model('User', schema)