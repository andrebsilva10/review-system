(function () {
    if (sessionStorage.getItem('Nome') === null) {
        let nome = prompt('Qual é o seu nome?'); //prompt
        let nomeFormatado = nome[0].toUpperCase() + nome.substring(1); //Usar pelo menos 3 métodos para manipulação de string
        sessionStorage.setItem('Nome', nomeFormatado);
        if (nome !== null) {
            alert(`Olá ${nomeFormatado}!! Seja bem-vindo(a)`);
        }
    }
})(); //Função auto-executável

const autor = document.getElementsByTagName('var')[0]; //getElementsByTagName
autor.textContent = `Por ${localStorage.getItem('Usuario')}`.toLowerCase();
// Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent

function escritor(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => { //Usar laço de repetição (for..in ou for..of ou forEach)
        setTimeout(() => elemento.innerHTML += letra, 200 * i);
    });
}
escritor(autor);

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) { //Evento de teclado - usar charCode ou keyCode
        case 73: //I
            location.href = '/app/cadastrar-review.html';
            break;
        case 76: //L
            location.href = '/app/login.html';
            break;
        case 67: //C
            location.href = '/app/cadastre-se.html';
            break;
        default:
            break;
    }
});