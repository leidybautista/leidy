//Generar el array
var vec=(array,tam)=>{
    for (let i = 0; i < tam; i++) {
        array.push(Math.round(Math.random()*100));
        
    }
    return array;
}
v=[];
x=5;
document.write (' Flecha: '+vec(v,x));

document.write ('<br>');

//Mayor del array
var mayor=v=>{
    let may=0;
    for (let i = 0; i< v.length; i++) {
        if (v[i]>may) {		
            posicion=i;
            may=v[i];
        }
    }  
    return may; 
}
document.write('El numero mayor de los elementos del array es: ' + mayor(v) +' y su posicion es: ' +posicion);
document.write ('<br>');
//Menor del array
var menor =v=>Math.min(...v);
document.write('<b> El numero menor es:<b> '+menor(v));
document.write ('<br>');
//Suma del array
var sum=v=>{
    let suma=0;
    for (let i = 0; i< v.length; i++) {
        suma+=v[i];
    }  
    return suma; 
}
document.write('La suma de los elementos del array es: ' + sum(v));
document.write ('<br>');
//Promedio del array
var prom=(v,x)=>{
    let promedio=0;
    for (let i = 0; i< v.length; i++) {
        promedio+=v[i]/x;
    }  
    return promedio; 
}
document.write('El promedio de los elementos del array es: ' + prom(v,x));