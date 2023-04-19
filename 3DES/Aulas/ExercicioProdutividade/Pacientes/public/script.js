function calculaIdade(anoDeNascimento) {
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoDeNascimento;
}
module.exports = calculaIdade;
