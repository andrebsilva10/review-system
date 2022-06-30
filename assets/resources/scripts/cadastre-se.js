const nome = $$('nome');
const id = $$('usuario');
const senha = $$('senha');
const confirmaSenha = $$('confirma-senha');
const botaoCadastre = $$('botao-cadastre');

(() => nome.value == 'null' ? nome.value = '' : nome.value = sessionStorage.getItem('Nome'))();

function focado() {
    id.style.padding = '1.3em';
}

function desfocado() {
    if (confirmaSenha.value !== senha.value) {
        confirmaSenha.style.border = '2px solid #fc0202';
        alert('As senhas são diferentes!');
    }
}

window.onload = () => botaoCadastre.onclick = function (e) { //Especificar o tratador de evento no carregamento da página HTML no modo tradicional - no onload
    if (confirmaSenha.value === senha.value) {
        localStorage.setItem('Nome', nome.value);
        localStorage.setItem('Usuario', id.value);
        localStorage.setItem('Senha', senha.value);
        location.href = 'login.html';
        alert('Cadastro realizado com sucesso!');
        alert('Faça login para cadastrar um review.');
    } else {
        e.preventDefault();
        alert('As senhas não coincidem!');
    }
}