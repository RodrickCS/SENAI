function carregaVendedores(container, val) {
  for (let i = 0; i < Object.keys(val.vendedores).length; i++) {
    let element = document.createElement("p");
    element.innerHTML = `ID Vendedor: ${val.vendedores[i].id_vend} <br>
    Nome: ${val.vendedores[i].nome}  <br>
    Salario: ${val.vendedores[i].salario} <br>
    ID Setor: ${val.vendedores[i].idSetor} <br>`
    container.querySelector("#vendedoresSetor").appendChild(element);
    container.classList.remove("model");
  }
}

function carregaSetor() {
  fetch("http://localhost:3000/setores")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      Object.entries(data).forEach((entry) => {
        const [key, value] = entry;
        let novoSetor = document.querySelector(".setores").cloneNode(true);

        novoSetor.classList.remove("model");

        novoSetor.querySelector("#idSetor").innerHTML += value.id_setor;
        novoSetor.querySelector("#nomeSetor").innerHTML += value.nome;
        novoSetor.querySelector("#comissaoSetor").innerHTML += value.comissao;

        carregaVendedores(novoSetor, value);

        

        document.querySelector(".setoresContainer").appendChild(novoSetor);
      });
    });
}
carregaSetor();
