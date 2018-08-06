const fs = require('fs');
var colors = require('colors');

let data = ''

let Listar = (base, limite=10) =>{
    if (!Number(base)) {
        return console.log('El valor base introduccido no es un numero.'.red)
    }
    if (!Number(limite)) {
        return console.log('El valor limite introduccido no es un numero.'.red)
    }

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${i * base} \n`
    }
    console.log('====================='.green)
    console.log(`Tabla de ${base} `.green)
    console.log('====================='.green)
    console.log(data.blue)
}

//module.export.Multiplicacion
let Multiplicacion = async (base, limite =10)=>{
    return new Promise((resolve, reject)=>{

        if(!Number(base)){
            return reject('El valor base introduccido no es un numero.'.red)
        }
        if (!Number(limite)) {
            return reject('El valor limite introduccido no es un numero.'.red)
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base} \n`
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                return reject(err)
            }
            resolve (`tablas/tabla-${base}.txt`)

        });
    })
    
   
    

}

module.exports = {
    Multiplicacion,
    Listar
}

