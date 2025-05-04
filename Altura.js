function MedidoAltura() {

    var inPes = document.getElementById("inPes");
    var inPolegada = document.getElementById("inPolegada");
    var outResutado = document.getElementById("outResutado");

    var Pes = Number(inPes.value);
    var polegada = Number(inPolegada.value);

    var calculo1 = Pes * 30.48;
    var calculo2 = polegada * 2.54;
    var soma = calculo1 + calculo2;

    outResutado.textContent = soma.toFixed()

    event.preventDefault();
    
}

var btConverte = document.getElementById("btConverte");
btConverte.addEventListener("click", MedidoAltura)