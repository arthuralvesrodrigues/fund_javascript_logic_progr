function insert(num) {
    document.querySelector(".tela").innerHTML += num;
}

function clean() {
    document.querySelector(".tela").innerHTML = "";
}

function back {
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = tela.slice(0, -1);
}

function calcular() {
    let tela = document.querySelector(".tela").innerHTML;
    if (tela) {
        try {
            document.querySelector(".tela").innerHTML = eval(tela);
        } catch (error) {
            document.querySelector(".tela").innerHTML = "Erro!";
            console.error("Erro ao calcular:", error);
        }
    } else {
        document.querySelector(".tela").innerHTML = "Sem Calculo...";
    }
}














