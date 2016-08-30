var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var personaSchema = new Schema({  
  rut: { type: String},
  nombre:    { type: String },
  apPat:     { type: String },
  apMat:  { type: String },
  edad:   { type: Number },
  fecNac:  { type: String },
  genre:    { type: String, enum:
  ['Hombre', 'Mujer']
        },
  oficio:  { type: String }
});

module.exports = mongoose.model('Persona', personaSchema); 