const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const dateNow = new Date()


const AuthorSchema = new Schema({
    first_name: {type:String, required:true, maxLength:100},
    family_name: {type:String, required:true, maxLength:100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});

AuthorSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

AuthorSchema
.virtual('dateBirth')
.get(() => {
  return moment(this.date_of_birth).format("YYYY")
    
})

AuthorSchema
.virtual('lifespan')
.get(() => {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString()
})

AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});


module.exports = mongoose.model('Author', AuthorSchema);