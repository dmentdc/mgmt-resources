var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
//mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
mongoose.connect('mongodb://localhost/personas', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
//var models     = require('./models/tvshow')(app, mongoose);
//var TVShowCtrl = require('./controllers/tvshows');
var models     = require('./models/persona')(app, mongoose);
var PersonaCtrl = require('./controllers/personas');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
/*var tvshows = express.Router();

tvshows.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);
*/
var personas = express.Router();

personas.route('/personas')
  .get(PersonaCtrl.findAllPersonas)
  .post(PersonaCtrl.addPersona);

personas.route('/personas/:id')
  .get(PersonaCtrl.findById)
  .put(PersonaCtrl.updatePersona)
  .delete(PersonaCtrl.deletePersona);

  personas.route('/personas/:rut')
  .get(PersonaCtrl.findByRut)

app.use('/api', personas);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});