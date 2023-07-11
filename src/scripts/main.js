document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-cadastro');
    const nomeCadastrado = document.getElementById('nome-cadastro');
    let formEValido = false;

    function validaNome(nomeCompleto) {
        const nomeComoArry = nomeCompleto.split(' ');
        return nomeComoArry.length >= 2;
    }

    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const emailCadastrado = document.getElementById('email-cadastro');
        const telefoneCadastrado = document.getElementById('numero-de-contato-cadastro');
        const senhaCadastrada = document.getElementById('senha-cadastro');
        const mensagemSucesso = `O cadastro foi feito com sucesso. Redirecionando em 3s...`;


        formEValido = validaNome(nomeCadastrado.value)
        if (formEValido) {
            const containerMensagemSucesso = document.querySelector('.success-message');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';
            
            nomeCadastrado.value = '';
            emailCadastrado.value = '';
            telefoneCadastrado.value = '';
            senhaCadastrada.value = '';
            
            setTimeout(function() {
                location.reload(1);
            }, 3000);
        } else {
            document.querySelector('.error-message').style.display = 'block';
        };
    })

    nomeCadastrado.addEventListener('change', function(e) {
        formEValido = validaNome(e.target.value);
        
        if (!formEValido) {
            document.querySelector('.error-message').style.display = 'block';
        } else {
            document.querySelector('.error-message').style.display = 'none';
        }
    })
})