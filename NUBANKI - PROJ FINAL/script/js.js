const valor_inic = document.querySelector("h1#valor_inic");
const valor_mes = document.querySelector("h1#valor_mes");
const res_final = document.querySelector("h1#res_final");
const total_inv = document.querySelector("h2#total_inv");
const poupanca = document.querySelector("h2#poupanca");
const prefixado = document.querySelector("h2#prefixado");
const anos = document.querySelector("span#anos");

let contador = 0;
let cal = 0;
let cal_mes = 0;

function calc() {

    contador += 250;
    cal += 250;
    valor_inic.innerHTML = `R$${cal},00`
    res_final.innerHTML = `R$${contador * 0.008 + contador},00`;
    total_inv.innerHTML = `Total investido: R$${cal},00`;
    poupanca.innerHTML = `Na poupanca, seu dinheiro renderia:  R$${contador * 0.004},00`;
    prefixado.innerHTML = `No Tesouro Prefixado, seu dinheiro renderia: R$${contador * 0.008},00`;
}

function diminu() {
    contador -= 250;
    cal -= 250;
    valor_inic.innerHTML = `R$${cal},00`
    res_final.innerHTML = `R$${contador},00`
    poupanca.innerHTML = `Na poupanca, seu dinheiro renderia:  R$${contador * 0.004},00`;
    prefixado.innerHTML = `No Tesouro Prefixado, seu dinheiro renderia: R$${contador * 0.008},00`;
    if (contador < 0) {
        valor_inic.innerHTML = `R$0,00`
        res_final.innerHTML = `R$0,00`
    }
    if (cal < 0) {
        cal = 0;
    }
}

function calc_mes() {
    contador += 250;
    cal_mes += 250;
    valor_mes.innerHTML = `R$${cal_mes},00`
    res_final.innerHTML = `R$${contador * 0.008 + contador},00`;
    total_inv.innerHTML = `Total investido: R$${cal},00`;
    poupanca.innerHTML = `Na poupanca, seu dinheiro renderia:  R$${contador * 0.004},00`;
    prefixado.innerHTML = `No Tesouro Prefixado, seu dinheiro renderia: R$${contador * 0.008},00`;
}

function diminu_mes() {
    contador -= 250;
    cal_mes -= 250;
    valor_mes.innerHTML = `R$${contador},00`
    res_final.innerHTML = `R$${contador},00`
    poupanca.innerHTML = `Na poupanca, seu dinheiro renderia:  R$${contador * 0.004},00`;
    prefixado.innerHTML = `No Tesouro Prefixado, seu dinheiro renderia: R$${contador * 0.008},00`;
    if (contador < 0) {
        valor_mes.innerHTML = `R$0,00`
        res_final.innerHTML = `R$0,00`
    }
    if (cal_mes < 0) {
        cal_mes = 0;
    }
}




function juros() {
    var tempo_investido = document.getElementById('tempo_investido').value;

    anos.innerHTML = `Em ` + tempo_investido + ` anos, você teria:`;
    alert(tempo_investido * cal * 0.1 + cal * tempo_investido);

}