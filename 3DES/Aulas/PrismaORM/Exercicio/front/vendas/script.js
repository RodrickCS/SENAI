const uriVendas = "http://localhost:3000/vendas";

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

function carregarVendas() {
  let index = 1;
  const options = {
    method: "GET",
  };
  fetch(uriVendas, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Object.entries(data).forEach(([key, value]) => {
        const cloned = document.querySelector(".cardModel").cloneNode(true);
        cloned.setAttribute("index", index);

        cloned.classList.remove("model");

        cloned.querySelector("#idVenda").innerHTML += " " + value.id_venda;
        cloned.querySelector("#dataVenda").innerHTML +=
          " " + value.data.split("T")[0];
        cloned.querySelector("#vendedor").innerHTML += " " + value.idVendedor;

        document.querySelector(".container").appendChild(cloned);

        index++;
      });
    });
}



carregarVendas();
