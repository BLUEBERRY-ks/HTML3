function calcular() {

    let hora= parseInt(document.getElementById("hora").value);
    let valor= parseFloat(document.getElementById("valor_hora").value);
    let horas_extra= 0;
    let valor_extra= 0;
    if (hora > 8)
        horas_extra= hora - 8
        valor_extra= valor * 0.20
    let resultado= (hora*valor)+(horas_extra+valor_extra);

    document.getElementById("resultado").value = `${resultado.toLocaleString()}`

}