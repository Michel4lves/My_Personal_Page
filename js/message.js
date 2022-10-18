function Enviar() {
    let nome = document.getElementById("first-name")
    let last = document.getElementById("last-name")
    let email = document.getElementById("email")
    let mobile = document.getElementById("mobile-number")
    if (nome.value != "" && last.value != "" && email.value != "" && mobile.value != "") {
        let sendBtn = document.querySelector('.send')
        sendBtn.value = 'Obrigado!!'
        sendBtn.style.background = '#121212'
    }else{
        alert('Os campos: Nome, Sobrenome, Email e Telefone são obrigatórios')
    }
}
