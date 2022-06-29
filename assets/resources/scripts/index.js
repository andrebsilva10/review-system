(function () {
    if (sessionStorage.getItem('Nome') === null) {
        let nome = prompt('Qual é o seu nome?'); //prompt
        sessionStorage.setItem('Nome', nome);
        if (nome !== null) {
            alert(`Olá ${nome}!! Seja bem-vindo(a)`); //setTimeout
        }
    }
})(); //Função auto-executável

const autor = document.getElementsByTagName('var')[0]; //getElementsByTagName
autor.textContent = `Por ${localStorage.getItem('Usuario')}`;

function escritor(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => { //Usar laço de repetição (for..in ou for..of ou forEach)
        setTimeout(() => elemento.innerHTML += letra, 200 * i);
    });
}
escritor(autor);