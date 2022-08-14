const entrada = document.querySelector("#input1");
const resultado = document.querySelector("#input-des");

function encriptar(txtcifrar) {
    let cambio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    txtcifrar = txtcifrar.toLowerCase();
    for (let i = 0; i < cambio.length; i++) {
        if (txtcifrar.includes(cambio[i][0])) {
            txtcifrar = txtcifrar.replaceAll(cambio[i][0], cambio[i][1])
        }
    }
    return txtcifrar;
}

function btnencriptar() {
    const txtcifrado = encriptar(entrada.value);
    resultado.value = txtcifrado;

}

/* ================================================ */

function desencriptar(txtdescifrar) {

    let cambio = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    txtdescifrar = txtdescifrar.toLowerCase();
    for (let i = 0; i < cambio.length; i++) {
        if (txtdescifrar.includes(cambio[i][1])) {
            txtdescifrar = txtdescifrar.replaceAll(cambio[i][1], cambio[i][0])
        }
    }
    return txtdescifrar;

}

/* ================================================ */

function btndesencriptar() {
    const txtdescifrado = desencriptar(entrada.value);
    resultado.value = txtdescifrado;
}

/* ================================================ */

function btncopy() {

    let copy = document.querySelector('#input-des');

    copy.select();
    document.execCommand('copy');

    alert("Texto copiado");
}

/* ================================================ */

function btnclear() {

    document.querySelector("#input-des").value = "";
    document.querySelector("#input1").value = "";

}