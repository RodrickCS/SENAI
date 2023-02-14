const uriVendedores = "http://localhost:3000/vendedores";
const uriVendedoresCreate = "http://localhost:3000/vendedoresCreate";

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

function carregaVendedores() {
  const options = {
    method: "GET",
  };
  fetch(uriVendedores, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Object.entries(data).forEach(([key, value]) => {
        const cloned = document.querySelector(".cardModel").cloneNode(true);
        

        cloned.classList.remove("model");

        cloned.querySelector("#idVendedor").innerHTML += " " + value.id_vend;
        cloned.querySelector("#nome").innerHTML += " " + value.nome;
        cloned.querySelector("#salario").innerHTML += " " + value.salario;
        cloned.querySelector("#id_setor").innerHTML += " " + value.idSetor;

        document.querySelector(".container").appendChild(cloned);
       
      });
    });
}

const cadastrarVendedor = () => {
  let form = {
    nome: document.getElementById("vendNome").value,
    salario: Number(document.getElementById("vendSalario").value),
    idSetor: Number(document.getElementById("idSetor").value),
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };

  fetch(uriVendedoresCreate, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.msg === 'Preencha tudo') {
        alert("Vendedor não foi cadastrado");
      } else {
        document.querySelector(".modalSucc").classList.remove("modelSucesso");
        document.querySelector(".backModal").classList.add("backModalModel");
        setInterval(modalSucessoClose, 3000);
      }
    });
};

function openModal() {
  document.querySelector(".modal").classList.remove("modelModal");
  document.querySelector(".backModal").classList.remove("backModalModel");
}

function closeModal() {
  document.querySelector(".modal").classList.add("modelModal");
  document.querySelector(".backModal").classList.add("backModalModel");
}

function modalSucessoClose() {
  document.querySelector(".modalSucc").classList.add("modelSucesso")
  setTimeout(window.location.reload(), 3000);
}
carregaVendedores();
