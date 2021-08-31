const {Schema, model, Types} = require('mongoose')

const Qsnschema = new Schema({
   question: {type: String, required: true},
   subject_ID: {type: Types.ObjectId, ref: 'Subject'}
})

// var Question = model('Question', Qsnschema)

module.exports =  model('Question', Qsnschema)