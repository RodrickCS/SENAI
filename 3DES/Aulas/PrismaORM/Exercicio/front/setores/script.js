const uriSetores = "http://localhost:3000/setores";
const uriCreateSetor = "http://localhost:3000/setoresCreate";

const fechaIntro = () => {
  let item = document.querySelector(".introducao");
  item.classList.add("introModel");
  localStorage.setItem("intro", "closed");
  localStorage.setItem("id", 1);
};

const checkIntro = () => {
  let item = document.querySelector(".introducao");
  let closed = localStorage.getItem("intro");
  if (closed === "closed") {
    item.classList.add("introModel");
  }
};

function carregaSetores() {
  let index = 1;
  const options = {
    method: "GET",
  };
  fetch(uriSetores, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Object.entries(data).forEach(([key, value]) => {
        const cloned = document.querySelector(".cardModel").cloneNode(true);
        cloned.setAttribute("index", index);

        cloned.classList.remove("model");

        cloned.querySelector("#idSetor").innerHTML += " " + value.id_setor;
        cloned.querySelector("#nomeSetor").innerHTML += " " + value.nome;
        cloned.querySelector("#comissaoSetor").innerHTML +=
          " " + value.comissao + " % ";

        document.querySelector(".container").appendChild(cloned);

        index++;
      });
    });
}

const cadastrarSetor = () => {
  let form = {
    nome: document.getElementById("setorNome").value,
    comissao: Number(document.getElementById("setorComissao").value),
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };

  fetch(uriCreateSetor, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.affectedRows === 0) {
        alert("Setor não foi criado");
      } else {
        document.querySelector(".modalSucc").classList.remove("modelSucesso");
        document.querySelector(".backModal").classList.add("backModalModel");
        setInterval(modalSucessoClose, 3000);
      }
    });
};

function openModal() {
  document.querySelector(".modalSetor").classList.remove("modelModal");
  document.querySelector(".backModal").classList.remove("backModalModel");
}

function closeModal() {
  document.querySelector(".modalSetor").classList.add("modelModal");
  document.querySelector(".backModal").classList.add("backModalModel");
}

function modalSucessoClose() {
  document.querySelector(".modalSucc").classList.add("modelSucesso");
  setTimeout(window.location.reload(), 3000);
}

carregaSetores();
