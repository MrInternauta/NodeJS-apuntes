let calificaciones = [8,9,7,8,9,7,9,10,10,8,10,10,8,10,10,10]
let creditos = [6,6,6,6,6,8,6,8,5,7,8,9,5,10,10,10]


let fac_ponderacion = 0
let suma_creditos = 0
if(calificaciones.length === creditos.length){
    for(let i = 0; i < calificaciones.length; i++){
        fac_ponderacion += Number(calificaciones[i]) * Number(creditos[i])
        suma_creditos += Number(creditos[i])
    }
    console.log(`===============`)
    console.log(`Factor de poderacion ${fac_ponderacion}`)
    console.log(`Suma de creditos ${suma_creditos}`)
    promedio_ponderado =  fac_ponderacion/suma_creditos
    console.log('Tu Promedio ponderado es: '+ promedio_ponderado )

}else{
    console.log('No cuadra calificaciones con los creditos')
}