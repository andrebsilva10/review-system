const nome = document.forms[0].nome; //Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements
const id = document.getElementsByTagName('form')[0].usuario;
const senha = document.forms[0].elements[2];
const confirmaSenha = $$('confirma-senha');
const form = $$('cadastro-usuario');

(() => nome.value === 'null' ? nome.value = '' : nome.value = sessionStorage.getItem('Nome'))();

function focado(el) {
    el.style.padding = '1.3em';
}

function desfocado(el) {
    el.style.padding = '';
}

function validaSenha() {
    if (confirmaSenha.value !== senha.value) {
        confirmaSenha.style.borderColor = '#fc0202';
        alert('As senhas são diferentes!');
    } else {
        confirmaSenha.style.border = '';
    }
}

function validaVazios() {
    if (nome.value === '' || id.value === '' || senha.value === '' || confirmaSenha.value === '') {
        return false;
    }
    return true;
}

window.onload = () => form.onsubmit = function () { //Especificar o tratador de evento no carregamento da página HTML no modo tradicional - no onload
    if (validaVazios() && validaSenha()) {
        localStorage.setItem('Nome', nome.value);
        localStorage.setItem('Usuario', id.value);
        localStorage.setItem('Senha', senha.value);
        location.href = 'login.html';
        alert('Cadastro realizado com sucesso!');
        alert('Faça login para cadastrar um review.');
    } else {
        alert('informações inválidas!');
        e.preventDefault();
    };
};

$(function () {
    $('#cep').mask('00.000-000');
});