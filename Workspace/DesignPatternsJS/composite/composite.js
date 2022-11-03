class pecas {

    nome = ""
    preco = 0

    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    mostrarPreco() {
        console.log(this.nome + "\t\n" + "Preço:" + "\t" + this.preco)
    }

}

class composite {

    nome = ""
    preco = 0
    componentes = []

    constructor(nome) {
        this.nome = nome
    }

    adicionarComponente(componente) {
        this.componentes.push(componente)
    }

    mostrarPreco() {
        console.log("Nome: " + this.nome + "\n" + "Componentes" + "\n" + "--------------")

        if (this.preco != 0) {
            console.log("Preço: " + this.preco)
        }
        this.componentes.forEach(c => {
            c.mostrarPreco()
        });
    }

}

const peca1 = new pecas("RAM", 800)
const peca2 = new pecas("CPU", 2000)
const peca3 = new pecas("SSD", 400)

const newComp = new composite("Placa Mãe", 500)

newComp.adicionarComponente(peca1)
newComp.adicionarComponente(peca2)
newComp.adicionarComponente(peca3)


console.log(newComp.mostrarPreco())