const sCategoria = $('#seletor-categoria').val();
const iTitulo = $('#titulo').val();
const iImage = $('#imagem').val();
const tDescricao = $('#descricao-texto').val();
const sNota = $('#seletor-nota').val();
const botaoInserir = $('.botao-enviar').on('click', function () { //Especificar o tratador de algum evento via jQuery
    alert('Deseja cadastrar a review?');
});

function validaVazios() {
    if ($('#cadTitulo').val() === '' || $('#cadImg').val() === '' || $('#descricao-texto').val() === '') {
        return false
    }
    return true
};

$('#imagem').on('blur', function () {
    if (!validaURL()) {
        $('#imagem').css('border-color', 'red');
        alert('Url inválida!');
    } else {
        $('#imagem').css('border-color', '');
    }
});

function validaURL() {
    let exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
    let regex = new RegExp(exp);

    if (iImage.match(regex)) {
        return true
    } else {
        return false
    }
};


function validaSelect() {

    if (iCategoria <= 0 || iCategoria === null || iNota <= 0 || iCategoria === null) {
        return false
    }
    return true
};