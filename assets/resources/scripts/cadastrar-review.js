let inputImg = $('#cadImg');
const botaoInserir = $('.botao-enviar').on('click', function () { //Especificar o tratador de algum evento via jQuery
    alert('Deseja cadastrar a review?');
});

function validaVazios() {
    if ($('#cadTitulo').val() === '' || $('#cadImg').val() === '' || $('#descricao-texto').val() === '') {
        return false
    }
    return true
};

$(inputImg).on('blur', function () {
    if (!validaURL()) {
        $(inputImg).css('border-color', 'red');
        alert('Url inválida!');
    } else {
        $(inputImg).css('border-color', '');
    }
});

function validaURL() {
    let exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(exp);

    if (inputImg.val().match(regex)) {
        return true
    } else {
        return false
    }
};


function validaSelect() {
    const sCategoria = $$('seletor-categoria');
    const sNota = $$('seletor-nota');
    const iCategoria = sCategoria.selectedIndex;
    const iNota = sNota.selectedIndex;

    if (iCategoria <= 0 || iNota <= 0) {
        return false
    }
    return true
};