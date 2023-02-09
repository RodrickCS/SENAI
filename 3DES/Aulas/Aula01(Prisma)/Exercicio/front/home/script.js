const uriProdutos = "http://localhost:3000/produtos";

const fechaIntro = () => {
  let item = document.querySelector(".introducao");
  item.classList.add("introModel");
  localStorage.setItem("intro", "closed");
};

const checkIntro = () => {
  let item = document.querySelector(".introducao");
  let closed = localStorage.getItem("intro");
  if (closed === "closed") {
    item.classList.add("introModel");
  }
};

function carregaProdutos() {
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

        cloned.querySelector("#produto").innerHTML = value.nome;
        
        
      });
    });
}
carregaProdutos();
