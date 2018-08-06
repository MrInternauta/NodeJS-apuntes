let empleados = [
    {
        id: 1,
        nombre: 'Felipe'
    },
    {
        id: 2,
        nombre: 'Citlalli'
    },
    {
        id: 3,
        nombre: 'Jose'
    }
]

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id:2,
        salario: 2000
    }
]
let getEmpleado = (id, callback) =>{
    let empleadodb = empleados.find(empleado=>empleado.id == id)

    if(!empleadodb){
        return callback(`No existe un empleado con el id: ${id}`)
    }
    callback(null, empleadodb)
    

}
let getSalario = (empleado, callback) =>{
    let empleadodb = salarios.find((trabajador)=>  trabajador.id == empleado.id )
    if(!empleadodb){
         return callback(`No existe salario del trabajador ${empleado.nombre}`)
    }
        callback(null, {
            nombre: empleado.nombre,
            salario: empleadodb.salario
        })
    

}
getEmpleado(3 ,(err, empleado)=>{
    if(err){
        return console.error('ERROR: ', err)
    }
    console.log(empleado)
    getSalario(empleado, (err, empleado)=>{
        if(err){
            return console.log(err)
        }else{
            console.log(empleado)
        }
    })
   
})

