const nome = $$('nome');
const id = $$('usuario');
const senha = $$('senha');
const confirmaSenha = $$('confirma-senha');
const botaoCadastre = $$('botao-cadastre');

nome.value = sessionStorage.getItem('Nome');

function focado() {
    id.style.padding = '1.3em';
}

confirmaSenha.onblur = function () {
    if (confirmaSenha.value !== senha.value) {
        alert('As senhas são diferentes!')
        this.style.border = '2px solid #fc0202'
    }
}

window.onload = () => botaoCadastre.onclick = function (e) { //Especificar o tratador de evento no carregamento da página HTML no modo tradicional - no onload
    if (confirmaSenha.value === senha.value) {
        localStorage.setItem('Nome', nome.value);
        localStorage.setItem('Usuario', id.value);
        localStorage.setItem('Senha', senha.value);
        alert('Cadastro realizado com sucesso!');
    } else {
        e.preventDefault();
        alert('As senhas não coincidem!');
    }
}