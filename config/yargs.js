
const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                description: "numero a multiplicar"
            })
            .check((argv,options) => {
                if(isNaN(argv.b)){
                    throw ('La base tiene que ser un número')
                }
                return true;
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                default: 10,
                description: 'Limite hasta donde se mostrara la tabla'
            })
            .check((argv,options) => {
                if(isNaN(argv.b)){
                    throw ('Hasta tiene que ser un número')
                }
                return true;
            })
            .option('l',{
                alitas:'listar',
                type: 'boolean',
                default:false,
                description: "muestra o no la salida por consola"
            })
            .argv;



module.exports = {
    argv
}