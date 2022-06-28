(function () {
    let nome = prompt('Qual é o seu nome?'); //prompt
    sessionStorage.setItem('Nome', nome);
    alert(`Olá ${nome}! Seja bem-vindo(a)`); //alert
})(); //Função auto-executável

const autor = document.getElementsByTagName('var')[0]; //getElementsByTagName
autor.textContent = `Por ${localStorage.getItem('Usuario')}`;