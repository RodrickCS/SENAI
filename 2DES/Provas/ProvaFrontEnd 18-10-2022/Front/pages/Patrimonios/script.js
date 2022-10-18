const uriProds = 'https://patrimoniomongo.herokuapp.com/read/'
const uriCreateProds = 'https://patrimoniomongo.herokuapp.com/create'

function carregar() {
    fetch(uriProds, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': null
    })
        .then(res => { return res.json() })
        .then(resp => {
            let novoProd = document.querySelector('.clone').cloneNode(true)

            novoProd.classList.remove('model')

            novoProd.querySelector('#img').src = './assets/' + resp.img
            novoProd.querySelector('#id').innerHTML += resp._id
            novoProd.querySelector('#ni').innerHTML += resp.ni
            novoProd.querySelector('#aquis').innerHTML += resp.aquisicao
            novoProd.querySelector('#deno').innerHTML += resp.denominacao
            novoProd.querySelector('#valor').innerHTML += resp.valor

            document.querySelector('.modelo').appendChild(novoProd)

        })
}

function cadastrar() {

    let inpNi = document.querySelector('#inpNi').value
    let inpAquis = document.querySelector('#inpAquis').value
    let inpDeno = document.querySelector('#inpDeno').value
    let inpValor = document.querySelector('#inpValor').value
    let inpImg = document.querySelector('#inpImg').value

    let corpo = {
        'ni': inpNi,
        'aquisicao': inpAquis,
        'denominacao': inpDeno,
        'valor': inpValor,
        'img': inpImg
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }
    options.body = JSON.stringify(corpo)

    if (corpo.ni.length > 0 && corpo.aquisicao.length > 0 && corpo.denominacao.length > 0 && corpo.valor > 0) {
        fetch(uriCreateProds, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    alert('sucesso !')
                    window.location.reload()
                    document.querySelector('.modal').classList.add('model')
                } else {
                    alert('Erro ao enviar dados ao Banco de dados:' + resp)
                    window.location.reload()
                }
            })
            .catch(err => alerta(err))
    } else {
        alert('Preencha os campos obrigatórios')
    }
}


function showModal() {
    document.querySelector('.modal').classList.remove('model')
}

function closeModal() {
    document.querySelector('.modal').classList.add('model')
}
