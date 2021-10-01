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

//función flecha sin parámetros
//versión clásica
function sinParametros(){
    return 'Hola mundo';
}
console.log(sinParametros());
//versión flecha
var sinParam=()=>'Hola mundo';
console.log('flecha: '+sinParam());

//función flecha con un parámetro
//versión clásica
function cuadrado(num){
return num*num;
}
console.log(cuadrado(10));
//versión flecha
var r=num=>num*num;
console.log('flecha= '+r(5));

//función flecha con varios parámetros
function suma(n,m){
    return n+m;
}
console.log(suma(10,20));

var sumar=(n,m)=>n+m;
console.log('flecha '+sumar(20,30));

var vec=(array,tam)=>{
    for (let i = 0; i < tam; i++) {
        array.push(Math.round(Math.random()*100));         
    }
    return array;
}
v=[];
x=5;
console.log('flecha='+vec(v,x));
console.log('flecha='+vec(v,x)[0]);