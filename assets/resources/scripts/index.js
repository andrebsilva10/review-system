(function () {
    if (sessionStorage.getItem('Nome') === null) {
        let nome = prompt('Qual é o seu nome?'); //prompt
        let nomeGrito = nome.toUpperCase(); //Usar pelo menos 3 métodos para manipulação de string
        sessionStorage.setItem('Nome', nome);
        if (nome !== null) {
            alert(`Olá ${nomeGrito}!! Seja bem-vindo(a)`); //setTimeout
        }
    }
})(); //Função auto-executável

const autor = document.getElementsByTagName('var')[0]; //getElementsByTagName
autor.textContent = `Por ${localStorage.getItem('Usuario')}`.toLowerCase();

function escritor(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => { //Usar laço de repetição (for..in ou for..of ou forEach)
        setTimeout(() => elemento.innerHTML += letra, 200 * i);
    });
}
escritor(autor);

setInterval(function () {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let relogio = document.getElementById("relogio");

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    relogio.innerHTML = horas + ":" + minutos + ":" + segundos;

}, 1000);