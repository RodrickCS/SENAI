var senha = document.querySelector('#inpSenha')
var email = document.querySelector('#inpEmail')
const uriLogin = 'https://patrimoniomongo.herokuapp.com/login'


const login = () => {

    let encontrei = false

    let userInfo = {
        'username': senha.value,
        'password': email.value
    }

    fetch(uriLogin, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(userInfo)
    })
        .then(res => { return res.json() })
        .then(resp => {

            if ((email.value == resp.username) && (senha.value == resp.password)) {

                encontrei = true

                window.location.href = '../Home/index.html'
            }
            

        })

}