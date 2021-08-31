const {Schema, model, Types} = require('mongoose')

const UserAnswschema = new Schema({
    mark: {type: Number},
    date: {type: Date, default: Date.now},
    owner: {type: Types.ObjectId, ref: 'User'},
    subject_id: {type: Types.ObjectId, ref: 'Subject'}
})

 module.exports = model('UserAnswers', UserAnswschema)