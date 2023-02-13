const uriProdutos = "http://localhost:3000/produtos";
const uriCreateProd = "http://localhost:3000/produtosCreate";
const uriVenderProd = "http://localhost:3000/vendasCreate";

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

function carregaProdutos() {
  let index = 1;
  const options = {
    method: "GET",
  };
  fetch(uriProdutos, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Object.entries(data).forEach(([key, value]) => {
        const cloned = document.querySelector(".cardModel").cloneNode(true);
        cloned.setAttribute("index", index);

        cloned.classList.remove("model");

        cloned.querySelector("#idProd").innerHTML += " " + value.id_prod;
        cloned.querySelector("#produto").innerHTML += " " + value.nome;
        cloned.querySelector("#valorProduto").innerHTML += " R$ " + value.valor;
        cloned.querySelector("#setorProduto").innerHTML += " " + value.setor_id;

        document.querySelector(".container").appendChild(cloned);

        index++;
      });
    });
}

const cadastrarProd = () => {
  let form = {
    nome: document.getElementById("nomeProd").value,
    valor: Number(document.getElementById("valorProd").value),
    setor_id: Number(document.getElementById("setorProd").value),
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };

  fetch(uriCreateProd, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.affectedRows === 0) {
        alert("Produto não cadastrado");
      } else {
        document.querySelector(".modalSucc").classList.remove("modelSucesso")
        document.querySelector(".backModal").classList.add("backModalModel")
        setInterval(modalSucessoClose, 3000);
      }
    });
};

const venderProd = () => {
  let form = {
    data: new Date(),
    idVendedor: Number(localStorage.getItem("id")),
    idProd: Number(document.getElementById("idProduto").value),
    quantidade: Number(document.getElementById("qtdProd").value),
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };
  fetch(uriVenderProd, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data !== undefined) {
        document.querySelector(".backModal").classList.add("backModalModel");
        document.querySelector(".modalSucc").classList.remove("modelSucesso")
        setInterval(modalSucessoClose, 3000);
      } else {
        alert("Erro ao efetuar a venda");
      }
    });
};

function openModalProd() {
  document.querySelector(".modalProd").classList.remove("modelModalProd");
  document.querySelector(".backModal").classList.remove("backModalModel");
}
function openModalVenda() {
  document.querySelector(".modalVender").classList.remove("modelModalVender");
  document.querySelector(".backModal").classList.remove("backModalModel");
}

function closeModalVenda() {
  document.querySelector(".modalVender").classList.add("modelModalVender");
  document.querySelector(".backModal").classList.add("backModalModel");
}
function closeModalProd() {
  document.querySelector(".modalVender").classList.add("modelModalVender");
  document.querySelector(".backModal").classList.add("backModalModel");
}

function modalSucessoClose() {
  document.querySelector(".modalSucc").classList.add("modelSucesso")
  setTimeout(window.location.reload(), 3000);
}




carregaProdutos();
