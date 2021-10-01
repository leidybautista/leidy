//FUNCIONES FLECHA
// No adecuadas como métodos y no sirven como constructores
//SINTAXIS: (param1,param2, ...,paramN) => {sentencias}
//          (param1,param2, ...,paramN) => expresión
//          () => {return expresión}
//Paréntesis opcionales cuando hay un solo parámetro
//          (parametro)=>{sentencias}
//           parametro => {sentencias}
//Paréntesis obligatorios si la función no tiene parámetros
//          ()=> {sentencias}

function saludo(){
    return 'hola mundo';
}
console.log(saludo());