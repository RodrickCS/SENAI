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

function carregaProdutos() {
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
        cloned.querySelector("#comissaoSetor").innerHTML += " " +  value.comissao + " % ";
        

        document.querySelector(".container").appendChild(cloned);

        index++;
      });
    });
}

const cadastrarSetor = () => {
  let form = {
    nome: document.getElementById("setorNome").value,
    comissao: Number(document.getElementById("setorComissao").value)
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)

  };

  fetch(uriCreateSetor, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.affectedRows === 0) {
        alert("Setor não foi criado");
      } else {
        alert("Setor criado com sucesso");

        window.location.reload();
      }
    });
};

function openModal() {
  document.querySelector(".modal").classList.toggle("modelModal");
}


carregaProdutos();
