const uriCreateEquipamento = "http://localhost:80/equipamentos/create";

function openModalCriar() {
  document.querySelector(".backModal").classList.remove("model");
  document.querySelector(".modalCriarEquipamento").classList.remove("model");
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

async function carregaImagem(link) {
  const response = await fetch(
    `https://api.apiflash.com/v1/urltoimage?access_key=5c38e433a59b42b0aac2052e7959a67b&url=${link}&format=png&width=500&height=500 `
  );
  const blob = await response.blob();
  const urlImagem = URL.createObjectURL(blob);

  const img = document.createElement("img");
  img.src = urlImagem;
  img.alt = "Imagem";

  document.querySelector(`.imgContainer`).appendChild(img);
}
