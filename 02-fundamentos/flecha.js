/*function sumar(a, b){
    return a + b
}*/
//let sumar = (a,b)=> a+b
//console.log(sumar(20, 10))



/*function saludar (){
    return 'Hola mundo'
}*/
//let saludar = ()=> 'Hola mundo'
//let saludar = (NOMBRE) => 'Hola ' + NOMBRE
//let saludar = NOMBRE => 'Hola ' + NOMBRE
//console.log(saludar('Felipe'))


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() { return `${this.nombre} ${this.apellido} - Poder: ${this.poder} `}
    
}
console.log(deadpool.getNombre());

