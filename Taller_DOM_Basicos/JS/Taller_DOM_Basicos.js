function sumar(){
    let num1= parseInt(document.getElementById("num1").value)
    let num2= parseInt(document.getElementById("num2").value)
    let suma=num1+num2;

    document.getElementById("resultado1").value= `${suma}`;
};

function restar(){
    let num1= parseInt(document.getElementById("num1").value)
    let num2= parseInt(document.getElementById("num2").value)
    let restar=num1-num2;

    document.getElementById("resultado1").value= `${restar}`;
};

function multiplicar(){
    let num1= parseInt(document.getElementById("num1").value)
    let num2= parseInt(document.getElementById("num2").value)
    let multiplicar=num1*num2;

    document.getElementById("resultado1").value= `${multiplicar}`;
};

function dividir(){
    let num1= parseInt(document.getElementById("num1").value)
    let num2= parseInt(document.getElementById("num2").value)
    let dividir=num1/num2;

    document.getElementById("resultado1").value= `${dividir}`;
};