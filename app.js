const {crearArchivo} = require('./helpers/multiplicar.js');
const {argv}         = require('./config/yargs.js');



crearArchivo(argv.b,argv.l,argv.h)
            .then(resultado => console.log(resultado))
            .catch(err => console.log(err))
