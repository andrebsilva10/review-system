//MENU-RESPONSIVO

const botaoMenu = document.getElementById('botao-menu');

botaoMenu.addEventListener('click', (evento) => {

    nav.classList.toggle('esconder');
    document.addEventListener('click', function (e) {
        if (e.target.id === '') {
            nav.classList.remove('esconder');
        }
    });

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