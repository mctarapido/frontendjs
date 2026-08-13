let n1 = parseFloat(prompt("Ingrese numero 1"));
let n2 = parseFloat(prompt("Ingrese numero 2"));

let nombre = prompt("Hola como se llama?");
let edad = parseFloat(prompt("Cuantos años tiene?"));


if(!isNaN(n1) && !isNaN(n2)){
    hacerCosas(n1,n2);
}   

if(!isNaN(edad)){

    console.log("Hola " + nombre);
    if(edad>18){
        console.log("Bienvenido! Puede pasar es mayor de edad");
    }else{
        console.log("Lamentablemente no puede pasar");
    }
    
}

function hacerCosas(n1,n2){

    let suma =  n1 + n2;
    let resta = n1 - n2;
    let division = n1 /n2;
    let multiplicacion = n1*n2;
    let modulo = n1 % n2;


    console.log("La suma es: " + suma);
    console.log("La resta es: " + resta);
    console.log("La multiplicacion es: " + multiplicacion)
    console.log("La division es: " + division);
    console.log("El modulo es: " + modulo);

}


let nombrep = "Roger";
let correo  = "ricky@fobmail.com";
let mensaje = "Me gusta el arte";

function ningunaVacia(n,c,m){
    if(n.length == 0 || c.length == 0 || m.length == 0){
        console.log("Falta completar algunos campos obligatorios.");
    }else{
        console.log("Formulario completo");
    }
}

ningunaVacia(nombrep,correo,mensaje);

const productos = [
    { nombre: "Remera"  ,precio:1500 },
    { nombre: "Pantalon",precio:1000 },
    { nombre: "Pulover" ,precio:1000 },
    { nombre: "Camiseta",precio:2000 },
    { nombre: "Camisa"  ,precio:3520 }
];

let contador = 1;

for(let p of productos){
    alert(p.nombre + 
         " tiene este precio: " + p.precio +
         "\n" + "Mostrados: " + contador + " de un total de " +
          productos.length + " productos.")
    contador++;
};

console.log("Lista de productos mostradas correctamente...");

