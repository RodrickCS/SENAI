const uriCreate = "http://localhost:3000/pedidos/create";
const uriRead = "http://localhost:3000/pedidos/read";
const uriReadNaCozinha = "http://localhost:3000/pedidos/read";
const uriReadEntregando = "http://localhost:3000/pedidos/readACaminho";

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
        window.location.reload();
      }
    });
}

// function carregarPedidoNaCozinha() {
//   const options = {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   };

//   fetch(uriReadNaCozinha, options)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       Object.entries(data).forEach((entry) => {
//         const [key, value] = entry;
        
//         let novoPedido = document.querySelector(".naCozinha").cloneNode(true);

//         novoPedido.classList.remove('model')

//         novoPedido.querySelector('#idPedido').innerHTML += value.id_pedido;
//         novoPedido.querySelector('#nomeCli').innerHTML += value.cliente;
//         novoPedido.querySelector('#produtoCli').innerHTML += value.produto;
//         novoPedido.querySelector('#enderecoCli').innerHTML += value.endereco;
//         novoPedido.querySelector('.horarioPedido').innerHTML += value.hora_pedido;
//         novoPedido.querySelector('.data').innerHTML += value.data.split("T")[0];

//         document.querySelector(".naCozinhaContainer").appendChild(novoPedido);
//       });
//     });
// }

function carregarPedidoEntregando() {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  fetch(uriReadEntregando, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Object.entries(data).forEach((entry) => {
        const [key, value] = entry;
        
        let novoPedido = document.querySelector(".naCozinha").cloneNode(true);

        novoPedido.classList.remove('model')

        novoPedido.querySelector('#idPedido2').innerHTML += value.id_pedido;
        novoPedido.querySelector('#nomeCli2').innerHTML += value.cliente;
        novoPedido.querySelector('#produtoCli2').innerHTML += value.produto;
        novoPedido.querySelector('#enderecoCli2').innerHTML += value.endereco;
        novoPedido.querySelector('.horarioPedido').innerHTML += value.hora_pedido;
        novoPedido.querySelector('.data').innerHTML += value.data.split("T")[0];

        document.querySelector(".naCozinhaContainer").appendChild(novoPedido);
      });
    });
}

// carregarPedidoNaCozinha();
carregarPedidoEntregando();
