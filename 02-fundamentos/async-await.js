//Async y Await
/*let nombre = async ()=>{
    //Cualquier error activa el catch undefined.js 
    //throw new Error('Ocurrio algo') lanzar error
    return 'Felipe'
}*/
let getnombre = async () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Felipe') 
        }, 3000)
        
    })
    
}
let saludo = async () =>{
    let nombre = await getnombre()
    return 'Hola ' + nombre
}

saludo().then((nombre)=>  console.log(nombre))

