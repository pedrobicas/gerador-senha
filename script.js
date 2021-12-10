const pw_element = document.getElementById("pw");
const copiar_element = document.getElementById("copiar");
const len_element = document.getElementById("len");
const minusc_element = document.getElementById("minusc");
const maiusc_element = document.getElementById("maiusc");
const num_element = document.getElementById("num");
const simbolo_element = document.getElementById("simbolo");
const gerar_element = document.getElementById("gerar");

const letra_minus = "abcdefghijklmnopqrstuvwxyz";
const letra_maiusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const simbolo = "+-*&%$#@!?/|[]{}.,<>;:";

function getLowercase() {
    return letra_minus[Math.floor(Math.random() * letra_minus.length)];
}

function getUppercase() {
    return letra_maiusc[Math.floor(Math.random() * letra_maiusc.length)];
}

function getNumber() {
    return num[Math.floor(Math.random() * num.length)];
}

function getSymbol() {
    return simbolo[Math.floor(Math.random() * simbolo.length)];
}

function gerador_senha() {
    const len = len_element.value;

    let senha = "";

    if (maiusc_element.checked) {
        senha += getUppercase();
    }

    if (minusc_element.checked) {
        senha += getLowercase();
    }

    if (num_element.checked) {
        senha += getNumber();
    }

    if (simbolo_element.checked) {
        senha += getSymbol();
    }

    for (let i = senha.length; i < len; i++) {
        const x = generateX();
        senha += x;
    }

    pw_element.innerText = senha;
}

function generateX() {
    const xs = [];
    if (maiusc_element.checked) {
        xs.push(getUppercase());
    }

    if (minusc_element.checked) {
        xs.push(getLowercase());
    }

    if (num_element.checked) {
        xs.push(getNumber());
    }

    if (simbolo_element.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

gerar_element.addEventListener("click", gerador_senha);

copiar_element.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pw_element.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();

    document.getElementById("copiar").innerText = "Senha Copiada!"
});