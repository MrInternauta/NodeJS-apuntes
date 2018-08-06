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
        id: 2,
        salario: 2000
    }
]
let getEmpleado = (id) => {
    return new Promise((resolve, reject)=>{
        let empleadodb = empleados.find(empleado => empleado.id == id)

        if (!empleadodb) {
            return reject(`No existe un empleado con el id: ${id}`)
        }
        resolve(empleadodb)
    })
   
    


}

let getSalario = (empleado) => {
    return new Promise((resolve, reject)=>{
        let empleadodb = salarios.find((trabajador) => trabajador.id == empleado.id)
        if (!empleadodb) {
            return reject(`No existe salario del trabajador ${empleado.nombre}`)
        }
        resolve( {
            nombre: empleado.nombre,
            salario: empleadodb.salario
        })
    })
    


}

getEmpleado(3).then((empleado) => getSalario(empleado))
.then((empleado)=>{
    console.log(empleado)
}).catch(err=>{ console.log(err)})