const usuario = {
    id : 'teste',
    senha : 'teste123'
};

const botaoEnviar = document.getElementsByName('botao-envia');//Via getElementsByName
botaoEnviar[0].addEventListener('click', function(){
});

function salvar () {
    let confirma = confirm('Deseja fazer login?');
    if(confirma){
        const inputUsuario = document.querySelector('#cadastro-usuario input');
        const inputSenha = document.querySelectorAll('#cadastro-usuario input')[1];

        if(usuario.id === inputUsuario.value && usuario.senha === inputSenha.value){
            localStorage.setItem('Usuario', inputUsuario.value);
            localStorage.setItem('Senha', inputSenha.value);
            alert('Login realizado com sucesso!');
        }else{
            alert(`Usuário e/ou senha incorretos!`);
    }
    }
}