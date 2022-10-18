const uri = 'http://localhost:5000/patrimonio/itens/'
const corpo = document.querySelector('#corpo')
var itens = []
function carregar() {
    const options = { method: 'GET' }
    fetch(uri, options)
        .then(res => res.json())
        .then(res => {
            itens = res
            preencherTabela()
        })
        .catch(err => { console.error(err) });
}

function preencherTabela() {
    itens.forEach(e => {
        let card = document.querySelector('.card').cloneNode(true)
        card.classList.remove('model')
        card.querySelector('#ni').innerHTML += e.ni
        card.querySelector('#aquisicao').innerHTML += e.aquisicao.split("T")[0]
        card.querySelector('#denominacao').innerHTML += e.denominacao
        card.querySelector('#valor').innerHTML += e.valor
        card.querySelector('#img').src = '../docs/assets/' + e.img
        card.querySelector('#del').setAttribute('onclick', `del(${e.ni})`)
        corpo.appendChild(card)

    });
    console.log(itens)
}

const del = (ni) => {

    if (confirm('Tem certeza que deseja excluir o item ' + ni + ' ?')) {
        fetch(uri + ni, {
            "method": "DELETE"
        })
            .then(res => res.status())
            .then(res => {
                if (res == 204) 
                    window.location.reload()
            })
            .catch(err => console.error(err));
    }

}

function showModal () {
    document.querySelector('.modal').classList.remove('model2')
}

function closeModal () {
    document.querySelector('.modal').classList.add('model2')
}