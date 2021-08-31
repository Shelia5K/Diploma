const {Schema, model, Types} = require('mongoose')

const Subschema = new Schema({
   _id: Types.ObjectId,
   nameofsub: {type: String, required: true},
})

// var Subject = model('Subject', Subschema)

module.exports = model('Subject', Subschema)