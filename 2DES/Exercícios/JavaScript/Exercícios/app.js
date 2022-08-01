// var digitado = document.getElementById('usudig')
// // Validação de placa exer 1

// function validarPlaca () {
    
//     let res = document.getElementById('res1')
//     let placa1 = isNumber(digitado.value[3],[5],[6])
//     let placa = isNumber(digitado.value[3],[4],[5],[6])
    
//      if(placa){
//         res.innerHTML = 'Válido'
//      } else if (placa1) {
//          res.innerHTML = 'válido'
//      } else {
//         res.innerHTML = ' Não Válido'
//      }
 
// }

// function isNumber(char) {
//     if (typeof char !== 'string') {
//       return false;
//     }
  
//     if (char.trim() === '') {
//       return false;
//      }
  
//     return !isNaN(char)
//    }

// validarCPF exer 2

// var userCPF = document.querySelector('#userCPF')

// userCPF.addEventListener('blur', function (){
//     userCPF.value = userCPF.value.match(/.{1,3}/g).join('.').replace(/\.(?=[^.]*$)/,'-')
// })
    
// function validarCPF (userCPF) {

//         let res = document.querySelector('#res2')

//         if(userCPF.value.length === 14){
//             res.innerHTML = 'CPF validado'
            
//         } else {
//             res.innerHTML = 'Tente novamente'
//         }
// }


// Número de telefone aleatório exer 3

// var num = document.getElementById('num')

// function geraTelefones () {
    

// }

var qtdCPF = document.getElementById('cpfGen')
   
function geraCPF () {
    var cpfGerado = Math.floor(Math.random())

    for(let i = 0; i < qtdCPF.value; i++ ){
        Math.floor(Math.random(cpfGerado))
        


    } 
}