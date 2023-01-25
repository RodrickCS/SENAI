const uriCreate = "http://localhost:3000/pedidos/create";
const uriRead = "http://localhost:3000/pedidos/read"; 

function gerarPedido() {
  let form = {
    cliente: document.getElementById("nome").value,
    endereco: document.getElementById("endereco").value,
    produto: document.getElementById("produto").value,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };

  console.log(form);
  fetch(uriCreate, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.affectedRows === 0) {
        alert("Pedido não cadastrado");
      } else {
        alert("Pedido cadastrado com sucesso");
        document.getElementById("nome").value = "";
        document.getElementById("endereco").value = "";
        document.getElementById("produto").value = "";
      }
    });
}
