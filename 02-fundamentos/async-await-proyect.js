//"Base de datos"
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
//Funcion asincrona (promesa) para obtener el empleado apartir del id
let getEmpleado = async (id) => {
    //recorre el arrar y busca el empleado con el id
    let empleadodb = empleados.find(empleado => empleado.id == id)
    //si no existe este usuario
    if(!empleadodb){
        //crea un error (este seria el reject de una promesa)
        throw new Error('No existe el empleado con id '+ id)
    }else{
        //si lo encuestra regresa el objeto usuario (este seria el resolve de una promesa)
        return (empleadodb)
    }
    
}
//Funcion asincrona para obtener el sueldo de un empleado apartir de el objeto
let getSueldo =  async (empleado) => {
    //Busca el objetos salario apatir de su id
    let sueldo = salarios.find((salario) =>  salario.id == empleado.id )
    //Si no existe el sueldo
    if(!sueldo){
        //crea un error (este seria el reject de una promesa)
        throw new Error('No existe salario para el empleado ' + empleado.nombre)
    }else{
        //si lo encuentra regresa un objeto
        return {
            nombre: empleado.nombre,
            sueldo: sueldo.salario
        }
    }
    
}
//Funcion flecha recibe (id)  obtiene el usuario de una funcion asincrona usuario = await getEmpleado(), sueldoEmp = await getSueldo(empleado)
let main = async (id) =>  await getSueldo( await getEmpleado(id) )

main(3)
.then((sal)=>console.log(sal))
.catch((e)=>console.log(e))