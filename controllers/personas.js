//File: controllers/personas.js
var mongoose = require('mongoose');
var Persona  = mongoose.model('Persona');

//GET - Return all personas in the DB
exports.findAllPersonas = function(req, res) {
    Persona.find(function(err, personas) {
    if(err) res.send(500, err.message);

    console.log('GET /personas')
        res.status(200).jsonp(personas);
    });
};

//GET - Return a Persona with specified ID
exports.findById = function(req, res) {
    Persona.findById(req.params.id, function(err, persona) {
    if(err) return res.send(500, err.message);

    console.log('GET /persona/' + req.params.id);
        res.status(200).jsonp(persona);
    });
};

//GET - Return a Persona with specified Rut
exports.findByRut = function(req, res) {
    Persona.findByRut(req.params.rut, function(err, persona) {
    if(err) return res.send(500, err.message);

    console.log('GET /persona/' + req.params.rut);
        res.status(200).jsonp(persona);
    });
};

//POST - Insert a new Persona in the DB
exports.addPersona = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var persona = new Persona({
        rut:    req.body.rut,
        nombre:    req.body.nombre,
        apPat:     req.body.apPat,
        apMat:  req.body.apMat,
        edad:   req.body.edad,
        fecNac:  req.body.fecNac,
        genre:    req.body.genre,
        oficio:  req.body.oficio
    });

    persona.save(function(err, persona) {
        if(err) return res.send(500, err.message);
    res.status(200).jsonp(persona);
    });
};

//PUT - Update a register already exists
exports.updatePersona = function(req, res) {
    Persona.findById(req.params.id, function(err, persona) {
        persona.rut     = req.body.rut;
        persona.nombre   = req.body.nombre;
        persona.apPat    = req.body.apPat;
        persona.apMat = req.body.apMat;
        persona.edad  = req.body.edad;
        persona.fecNac = req.body.fecNac;
        persona.genre   = req.body.genre;
        persona.oficio = req.body.oficio;

        persona.save(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200).jsonp(persona);
        });
    });
};

//DELETE - Delete a Persona with specified ID
exports.deletePersona = function(req, res) {
    Persona.findById(req.params.id, function(err, persona) {
        persona.remove(function(err) {
            if(err) return res.send(500, err.message);
      res.status(200);
        })
    });
};