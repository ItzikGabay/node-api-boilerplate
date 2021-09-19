const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
// const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema({
   username: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
   email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
   joined_at: { type: Date, default: Date.now },
   id: Schema.Types.ObjectId,
   snippet_info: {
      title: { type: String, default: uuidv4 },
      date_created: { type: Date, required: true, default: Date.now },
      owner_id: { type: String, default: 'Annonymous' },
   },
   snippet_settings: {
      public_view: Boolean,
   },
   views: { type: Number, default: 0 }
}, { timestamps: true });

userSchema.plugin(uniqueValidator, { message: 'is already taken.' });

module.exports = mongoose.model('User', snippetsSchema);