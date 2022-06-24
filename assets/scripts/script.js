//MENU-RESPONSIVO
const botaoMenu = document.getElementById('botao-menu'); //Via getElementByID

botaoMenu.addEventListener('click', (evento) => {

    nav.classList.toggle('esconder');

    let escondido = function (e) { //Função anônima com argumento
        if (e.target.id === '') {
            nav.classList.remove('esconder'); //Via referência DOM pelo id do elemento HTML
        }
    }
    document.addEventListener('click', escondido);

    //ACESSIBILIDADE
    const esconder = nav.classList.contains('esconder');
    evento.currentTarget.setAttribute('aria-expanded', esconder);
    if (esconder) {
        evento.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        evento.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
    //-----
});
//------