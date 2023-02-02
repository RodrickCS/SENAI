function carregaSetor() {
  fetch("http://localhost:3000/setores")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      
      Object.entries(data).forEach((entry) => {
        const [key, value] = entry;
        console.log(value);
        

      //   let novoSetor = document.querySelector(".setores").cloneNode(true);

      //   novoSetor.classList.remove('model')

      //   novoSetor.querySelector(".idSetor").innerHTML += value.id_setor;
      //   novoSetor.querySelector(".nomeSetor").innerHTML += value.nome;
      //   novoSetor.querySelector(".comissaoSetor").innerHTML += value.comissao;
      //   if(value.vendedor.length )
        
      });
    });
}
carregaSetor()