//let titulo = document.getElementById("titulo").value;
//console.log(titulo);


function submeter() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    
    //console.log(cpf);
    console.log(validaCPF(cpf));
}

function validaCPF(cpf) {
    console.log(typeof(cpf));
    
    if(cpf == "") {
        alert("Campo CPF não pode ser vazio");
        return false;
    }
    
    cpf = cpf.trim();

    if(/[a-zA-Z]/.test(cpf)) {
        alert("CPF não pode conter letras");
        return false;
    }

    if(!/^[\d.-]+$/.test(cpf)) {
        alert("CPF só pode conter números, '.' ou '-'");
        return false;
    } 

    if(cpf.length != 11 && cpf.length != 14) {
        alert("Formato inválido");
        return false;
    }

    cpf = cpf.replace("/[.-]/g", "");
    console.log(cpf);

    let soma = 0;
    for(let i = 1; i <= 9; i++) {
        //console.log(cpf.charAt(i-1));
        soma = soma + (cpf.charAt(i-1) * (10 - (i-1)));
    }
    console.log(soma);
    let resto = soma % 11;

    if(resto < 2) { 
        if(cpf.charAt(9) != 0) {
            alert("CPF inválido!");
            return false;
        }
        //return true;
    }
    let digitoVerificador1 = 11 - resto;
    if (digitoVerificador1 != cpf.charAt(9)) {
        alert("CPF inválido");
        return false;
    }
    
    // Multiplicar cada digito do cpf até o 1º digito verificador
    // por 11, 10, 9 ... 2
    // recuperar o resto da divisão da soma de todas as 
    // multiplicações por 11. Se o resto for menor que 2, o 2º
    // digito verificador deve ser 0. Caso contrário deve ser igual
    // ao resto
    // o segundo digito verificador é o cpf.charAt(10)
    // o primeiro digito verificador é o cpf.charAt(9)
    
    let soma2 = 0;
    for(let i = 1; i <= 10; i++) {
        soma2 = soma2 + (cpf.charAt(i-1) * (11 - (i-1)));
    }
    console.log(soma2);
    let resto2 = soma2 % 11;

    if(resto2 < 2) { 
        if(cpf.charAt(10) != 0) {
            alert("CPF inválido!");
            return false;
        }
        return true;
    }
    let digitoVerificador2 = 11 - resto2;
    if (digitoVerificador2 != cpf.charAt(10)) {
        alert("CPF inválido");
        return false;
    }

    return true;
}

