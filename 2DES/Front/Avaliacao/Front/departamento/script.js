const uriDepto = 'http://localhost:3000/departamento/listar'
var tbody = document.querySelector('tbody')
var modelo = document.querySelector('.modelo')
var dados = []

function load() {
    const options = { method: 'GET' }
    fetch(uriDepto, options)
        .then(resp => resp.json())
        .then(resp => {
            dados = resp
            preencheTabela()
        })
        .catch(err => console.error(err))
}

function preencheTabela() {
    dados.forEach(depto => {

        let novoDepto = modelo.cloneNode(true)

        novoDepto.classList.remove('model')

        novoDepto.querySelector('#cod_depto').innerHTML = depto.Cod_Depto
        novoDepto.querySelector('#nome_depto').innerHTML = depto.Nome_Depto

        tbody.appendChild(novoDepto)


    })
}

function delDepto() {

    let data = {
        'cod_depto': document.querySelector('#cod_depto').innerHTML
    }
    
    console.log(data)

    fetch('http://localhost:3000/departamento/del', {
        'method': 'DELETE',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(data)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.Cod_Depto !== undefined) {
                alert('Departamento Excluido Com Sucesso!')
                window.location.reload()
            } else {
                alert('Falha ao excluir o departamento !')
            }
        })
}



