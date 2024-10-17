const {colors}       = require('../config/colors.js');

const fs = require('fs')
const crearArchivo = (base , listar,hasta) => {
 
   
    return new Promise ((resolve,reject) => {
       
            console.log('==============')
            console.log('Tabla del:'.rainbow, base)
            console.log('==============')
           
            let salida  = '';
            let consola = '';
            let i = 1
            for(i = 1; i<hasta;i++){
                salida +=`${(base)} x ${(i)} = ${(base*i)}\n`;
                consola+=(`${colors.green(base)} x ${colors.red(i)} = ${colors.blue(base*i)}\n`);
            }
            salida +=`${(base)} x ${(i)} = ${(base*i)}\n`;
            consola+=(`${colors.green(base)} x ${colors.red(i)} = ${colors.blue(base*i)}\n`);

            (listar)  ? console.log(consola) : "",

            fs.writeFile(`./salida/tabla-${base}.txt`,salida,(err) => {
                
                if(err){
                    return reject('Hubo un error al ejecutar el archivo'.red) 
                }
                resolve(`Tabla del   ${base}   creada exitosamente`.green);
            });
            
        
        
        
    }) 
}

module.exports = {
    crearArchivo
}