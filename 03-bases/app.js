const {Multiplicacion, Listar} = require('./multiplicar/multiplicar')
const colors = require('colors/safe');
const argv = require('./config/yargs').argv
let base = argv.base
let comando = argv._[0]
let limite

if (argv.limite != true ) limite = argv.limite
switch(comando){
        case 'listar':
                Listar(base, limite)
        break
        case 'crear':
                Multiplicacion(base, limite)
                .then((arc) => console.log(`Archivo ${colors.blue(arc)} creado.`))
                .catch((err) => { console.error(err) })
        break
        default:
                console.log('Comando no reconocido.')
}


