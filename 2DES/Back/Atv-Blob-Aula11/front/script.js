const uriClientes = 'http://localhost:5000/clientes_blob/clientes'

var dados = []

const carregar = () => {
    const options = { method: 'GET' }
    fetch(uriClientes, options)
        .then(resp => resp.json())
        .then(resp => {
            dados = resp
            loadContent()
        })
        .catch(err => alert('Erro ao carregar dados do BD: ' + err))
}

const loadContent = () => {

    Array.from(dados).forEach(cli => {

        let clone = document.querySelector('.body')

        let novoCli = clone.cloneNode(true)

        novoCli.classList.remove('model')

        novoCli.querySelector('#nome').innerHTML += ' ' + cli.nome
        novoCli.querySelector('#nasc').innerHTML += ' ' + cli.nascimento.split('T')[0]
        novoCli.querySelector('#tel').innerHTML += ' ' + cli.telefone
        // novoCli.querySelector('#img').src = montaImg(cli.avatar)
        novoCli.querySelector('#login').innerHTML += ' ' + cli.login

        document.querySelector('#btnExcluir').setAttribute('onclick', `excluirCli("${cli.login}")`)

        document.querySelector('.clone').appendChild(novoCli)
    })
}

// function montaImg(img) {
//     if (img != null) {
//         return `data:image/png;base64,${img}`;
//     } else
//         return `./default.png`;
// }

function excluirCli(login) {
    if (confirm('Certeza que deseja excluir o usuário ' + login + ' do banco de dados?')) {
        const body = {
            'login': login
        }
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(body);
        fetch(uriClientes, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 200) {
                    window.location.reload();
                }
            })
            .catch(err => alert('Erro ao enviar dados, Erro: ' + err));
    }
}

