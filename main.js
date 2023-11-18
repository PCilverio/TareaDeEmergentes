console.log("Práctica N°2");
//SUMA
let sumar = document.getElementById('sumar')

function suma(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) + parseInt(num2);
    console.log("La suma es: "+resultado);
    document.getElementById('total').innerText = resultado
}
sumar.addEventListener('click', suma);

//RESTA
let restar = document.getElementById('restar')

function resta(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) - parseInt(num2);
    console.log("La resta es: "+resultado);
    document.getElementById('total').innerText = resultado
}
restar.addEventListener('click', resta);

//multiplicación
let multimplicar = document.getElementById('multiplicar')

function multiplica(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(parseInt(num1) * parseInt(num2));
    console.log("La mutiplicacion es: "+resultado);
    document.getElementById('total').innerText = resultado
}
multimplicar.addEventListener('click', multiplica);

//DIVISION
let division = document.getElementById('dividir')

function dividir(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(parseInt(num1) / parseInt(num2));
    console.log("La division es: "+resultado);
    document.getElementById('total').innerText = resultado
}
division.addEventListener('click', dividir);

//MASA CORPORAL
let masaCorporal = document.getElementById('imc')
function masaCorp(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resul = (parseFloat(peso) / (parseFloat(altura)*parseFloat(altura)));
    let resulta = resul.toFixed(2);
    if(resulta < 18){
        console.log("¡Bajo peso! ❌🙍"+ resulta);
    }
    else if(resulta < 24.9){
        console.log("¡Peso Normal! ✅🙍"+ resulta);
    }
    else if (resulta > 29.9){
        console.log("¡Sobre Peso! ❌🙍"+ resulta);
    }
    else if(30 < resulta){
        console.log("¡Obesidad! ❌🙍"+ resulta);
    }
    document.getElementById('resultadoMC').innerText = resulta
    
}

masaCorporal.addEventListener('click',masaCorp);



//MARCAR OPCION
function seleccionado() {
    var selecciona = document.getElementById("sexoM").checked;

    if (!selecciona) {
        alert("Marque la opcion");
        return;
    }
}