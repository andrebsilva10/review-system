//MENU-RESPONSIVO

const botaoMenu = document.getElementById('botao-menu');

botaoMenu.addEventListener('click', (event) => {

    nav.classList.toggle('esconder');

    //ACESSIBILIDADE

    const esconder = nav.classList.contains('esconder');
    event.currentTarget.setAttribute('aria-expanded', esconder);
    if (esconder) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
    //-----
})

//------