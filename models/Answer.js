const {Schema, model, Types} = require('mongoose')

const Answschema = new Schema({
    answer: {type:String, required: true},
    subject_id: {type: Types.ObjectId, ref: 'Subject'}
})

//  var Answer = model('Answer', Answschema)

 module.exports = model('Answer', Answschema)