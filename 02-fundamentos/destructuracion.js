let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder} `
    }
}
//let nombre = deadpool.nombre
//let apellido = deadpool.apellido
//let poder = deadpool.poder
let { nombre: primer, apellido, poder } = deadpool
console.log(deadpool.getNombre())
console.log(primer, apellido, poder);
