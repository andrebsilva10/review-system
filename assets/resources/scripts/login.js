const login = { //Criar objeto usando função construtora ou notação literal
    id: localStorage.getItem('Usuario'),
    senha: localStorage.getItem('Senha')
};

const usuario = document.getElementsByName('usuario')[0]; //Via getElementsByName
usuario.focus();

const confirma = function () { //Função anônima sem argumento
    return confirm('Deseja fazer login?'); //confirm
}

function salvar(confirmacao) { //Passagem de uma função como parâmetro
    if (confirmacao) {
        const inputUsuario = document.querySelector('#cadastro-usuario input').value; //Via seletores CSS usados na função querySelector
        const inputSenha = document.querySelectorAll('#cadastro-usuario input')[1].value;

        if (login.id === inputUsuario && login.senha === inputSenha) {
            sessionStorage.setItem('Usuario', inputUsuario);
            location.href = 'cadastrar-review.html';
            alert('Login realizado com sucesso!');
            alert('Agora você pode cadastrar um review!');
        } else {
            alert(`Usuário e/ou senha incorretos!`); //alert
        }
    }
}

window.onload = aCadastre(); //Especificar o tratador de evento no carregamento da página HTML com a função addEventListener - no onload

function aCadastre() { //função com nome
    const cadastre = document.getElementsByTagName('a')[7]; //Via getElementsByTagName
    cadastre.style.color = '#003e8a';
    cadastre.addEventListener('mouseenter', function () {
        this.style.transition = '.3s'; //Usar o operador this em funções tratadoras de eventos.
        this.style.opacity = '.8';
        this.style.backgroundColor = '#dddddd';
        this.style.padding = '.3em';
        this.style.borderRadius = '.3em';
        this.style.fontSize = '1.2em';
    });
    cadastre.addEventListener('mouseout', function () {
        this.style.transition = '.3s';
        this.style.opacity = '1';
        this.innerText = 'Ei, cadastre-se aqui!';
        this.style.backgroundColor = 'inherit';
        this.style.fontSize = '1em';
    })
}