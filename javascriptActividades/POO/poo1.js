//atributos == Propiedades
//1ra forma de generar objetos en JS
var persona=new Object();

persona.nombre='juan';
persona.apellido='Bautista';
persona.mostrar=function(){
    return nombre+ '' +apellido;
}

persona.telefono=3129382939; 


//2da forma de generar objetos en JS 
//JSON= java script object notation

var alumno={
    nombre:'Pedro',
    apellido:'Diaz',
    nombreCompleto:function(){
        return this.nombre +' '+this.apellido;
    }
};

console.log(alumno.nombreCompleto());
console.log(alumno.nombre);
console.log(alumno.apellido);

//acceso con operador llave

console.log(alumno['nombreCompleto']);
console.log(alumno['nombre']);
console.log(alumno['apellido']);

//recorrer claves de objeto con for in 

for (atributo in alumno ){
    console.log(atributo);
}

//convertir valores de objeto en array

var arreglo=Object.values(alumno);

console.log(arreglo)

//3ra forma de trabajar con objetos en JS 

function Aprendiz(nombre, apellido){
    this.nombre=nombre;
    this.apellido=apellido;
    this.nombreCompleto=function(){
        
    }
}

//console.log(typeof(alumno));


//4ta forma de crear un objeto
class Estudiante{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}