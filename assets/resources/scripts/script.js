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
    let relogio = $('.conteudo-footer div'); //Uso de seletores hierárquicos estáticos

    if (horas < 10) {
        horas = `0${horas}`;
    }

    if (minutos < 10) {
        minutos = `0${minutos}`;
    }

    if (segundos < 10) {
        segundos = `0${segundos}`;
    }

    $(relogio).text(`${horas}:${minutos}:${segundos}`); //Manipulação do conteúdo de um input e div usando jQuery

}, 1000);

setInterval(() => $('.cabecalho-logo').fadeOut('2000').fadeIn('2000'), 2000); //Efeitos fade

$('#botao-tema').on('click', function () {
    if ($('body').hasClass('body-dark-mode')) {
        $('body').removeClass('body-dark-mode'); //Manipulação do CSS via função css() e addClass()/removeClass()
        $('.review').removeClass('review-dark-mode');

        $('form').find('input').css({
            'background-color': '',
            'color': ''
        });
        $('form').find('select').css({
            'background-color': '',
            'color': ''
        });
        $('form').children('textarea').css({
            'background-color': '',
            'color': ''
        });
        $($('#botao-tema').text('Dark mode'));
    } else {
        $('body').addClass('body-dark-mode');
        $('.review').addClass('review-dark-mode');

        $('form').find('input').css({
            'background-color': '#030541',
            'color': '#ffffff'
        });
        $('form').find('select').css({
            'background-color': '#030541',
            'color': '#ffffff'
        });
        $('form').children('textarea').css({
            'background-color': '#030541',
            'color': '#ffffff'
        });
        $($('#botao-tema').text('Light mode'));
    }
});