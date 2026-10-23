function calcular(){
    let nombre =document.getElementById("producto").value;
    let cantidad=parseInt(document.getElementById("cantidad").value);
    let precio=parseFloat(document.getElementById("precio").value);

    let subtotal=cantidad*precio;
    document.getElementById("subtotal").value=`${subtotal.toLocaleString()}`;

    let iva=subtotal*1.19;
    document.getElementById("iva").value=`${iva.toLocaleString()}`;

    let descuento=subtotal*1.10;
    document.getElementById("descuento").value=`${descuento.toLocaleString()}`;

    let total=subtotal+iva-descuento;
    document.getElementById("total").value=`${total.toLocaleString()}`;


}