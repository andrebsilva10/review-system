//MENU-RESPONSIVO
const $$ = function (id) { //Função anônima com retorno
    return document.getElementById(id);
}
const botaoMenu = $$('botao-menu'); //Via getElementByID

botaoMenu.addEventListener('click', (evento) => {

    nav.classList.toggle('esconder');

    let escondido = function (e) { //Função anônima com argumento
        if (e.target.id === '') { //Propagação de eventos no modelo bolha
            nav.classList.remove('esconder'); //Via referência DOM pelo id do elemento HTML
        }
    }
    document.addEventListener('click', escondido);

    //ACESSIBILIDADE
    const esconder = nav.classList.contains('esconder');
    evento.currentTarget.setAttribute('aria-expanded', esconder);
    if (esconder) {
        evento.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        console.log(`Clicou no elemento id: "${evento.currentTarget.id}".\nMenu aberto!`); //String Template
    } else {
        evento.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        console.log(`Clicou no elemento id: "${evento.currentTarget.id}".\nMenu Fechado!`); //Imprimir alguma propriedade do objeto event recebido como parâmetro
    }
    //-----
});
//------

setInterval(function () { //setInterval
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

    relogio.innerHTML = `${horas}:${minutos}:${segundos}`;

}, 1000);