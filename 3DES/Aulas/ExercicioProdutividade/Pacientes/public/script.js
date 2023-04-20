const uriDelete = "http://localhost:3000/delete/";
const uriUpdatePaciente = "http://localhost:3000/update/";

function excluirPaciente(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(uriDelete + id, options)
    .then((response) => {
      return response.status;
    })
    .then((data) => {
      if (data === 204) {
        window.location.reload();
      } else {
        alert("Houve um erro ao tentar excluir");
      }
    });
}

function openModalUpdate(btn) {
  document.querySelector(".modal").classList.remove("model");
  const row = btn.parentNode.parentNode;
  const id = row.cells[0].textContent;
  const nomeCompleto = row.cells[1].textContent;
  const nascimento = row.cells[2].textContent;
  const peso = row.cells[3].textContent;
  const altura = row.cells[4].textContent;

  document.querySelector("#modalId").value = id;
  document.querySelector("#modalNome").value = nomeCompleto;
  document.querySelector("#modalNascimento").value = nascimento;
  document.querySelector("#modalPeso").value = peso;
  document.querySelector("#modalAltura").value = altura;
}

function salvarAlteracoes() {
  let id = document.querySelector("#modalId").value;
  let nome = document.querySelector("#modalNome").value;
  let nascimento = document.querySelector("#modalNascimento").value;
  let peso = document.querySelector("#modalPeso").value;
  let altura = document.querySelector("#modalAltura").value;

  let form = {
    nomeCompleto: nome,
    nascimento: nascimento,
    peso: peso,
    altura: altura,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };
  fetch(uriUpdatePaciente + id, options)
    .then((response) => {
      return response.status;
    })
    .then((data) => {
      if (data === 200) {
        window.location.reload();
      } else {
        alert("Ocorreu um erro");
      }
    });
}

function closeModalUpdate() {
  document.querySelector(".modal").classList.add("model");
}

function openModalCreate() {
  document.querySelector(".backModal").classList.remove("model");
  document.querySelector(".form").classList.remove("model");
}
function closeModalCreate() {
  document.querySelector(".form").classList.add("model");
  document.querySelector(".backModal").classList.add("model");

}