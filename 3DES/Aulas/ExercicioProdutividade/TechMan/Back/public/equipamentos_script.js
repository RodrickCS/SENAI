const uriCreateEquipamento = "localhost:80/equipamentos/create"
const uriGetComentarios = "http://localhost:80/equipamentos/readComments/"
const uriCreateComentarios = "http://localhost:80/equipamentos/addComment"

var idEquipamento

function openModalCriar() {
  document.querySelector(".backModal").classList.remove("model");
  document.querySelector(".modalCriarEquipamento").classList.remove("model");
}

function openModalCriarComentario() {
  document.querySelector(".backModal").classList.remove("model");
  document.querySelector(".modalCriarComentario").classList.remove("model");
  document.querySelector(".modalComentarios").classList.add("model");
}

function closeModalCriarComentario() {
  document.querySelector(".backModal").classList.add("model");
  document.querySelector(".modalCriarComentario").classList.add("model");
}

function openModalComentarios() {
  document.querySelector(".backModal").classList.remove("model");
  document.querySelector(".modalComentarios").classList.remove("model");

}

function closeModalComentarios() {
  document.querySelector(".backModal").classList.add("model");
  document.querySelector(".modalComentarios").classList.add("model");
}

function closeModalCriar() {
  document.querySelector(".backModal").classList.add("model");
  document.querySelector(".modalCriarEquipamento").classList.add("model");
}

function logout() {
  window.location.href = "http://localhost/";
}

function criarEquipamento() {
  var inputNome = document.querySelector(".inpNome").value;
  var inputImagem = document.querySelector(".inpImagem").value;
  var inputDescricao = document.querySelector(".inpDescricao").value;
  var inpCheckBox = 0;

  var checkBox = document.querySelector("#checkAtivo");

  checkBox.checked ? (inpCheckBox = 1) : inpCheckBox === 0;

  let form = {
    equipamento: inputNome,
    imagem: inputImagem,
    descricao: inputDescricao,
    ativo: inpCheckBox,
    data: new Date(),
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };

  fetch(uriCreateEquipamento, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function fetchComentarios(id) {
  const options = {
    method: "GET",
  }

  fetch(uriGetComentarios + id, options)
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      data.forEach(dado => {
        idEquipamento = dado.equipamento
      })
      openModalComentarios();
      buildComentarios(data);
    })
}


function buildComentarios(dados) {
  const modalComentarioBody = document.querySelector(".modalComentarioBody");

  while (modalComentarioBody.firstChild) {
    modalComentarioBody.removeChild(modalComentarioBody.firstChild);
  }

  dados.forEach(comentario => {

    const data = new Date(comentario.data);
    const dataFormatada = data.toLocaleDateString("pt-BR")


    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    div.style.borderBottom = "1px solid black"
    div.style.padding = "12px"
    div.style.gap = "12px"
    h2.classList.add("headerText")
    p.classList.add("descText")

    h2.innerHTML = comentario.perfil + " - " + dataFormatada
    p.innerHTML = comentario.comentario;

    div.appendChild(h2);
    div.appendChild(p);

    modalComentarioBody.appendChild(div);
  });
}

function cadastrarComentario() {


  const data = new Date();
  const dataBrasilia = new Date(data.getTime() - (3 * 60 * 60 * 1000));
  const dataIso = dataBrasilia.toISOString();
  

  let comentario = document.querySelector("#inpComentario").value;
  let info = JSON.parse(localStorage.getItem("info"))

  let form = {
    comentario: comentario,
    equipamento: idEquipamento,
    perfil: info.Perfil,
    data: dataIso
  }
  console.log(form);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };
}