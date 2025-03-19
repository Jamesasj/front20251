
const validateUser = () => {
    const inputUser = document.querySelector("#username > input");
    const inputPass = document.querySelector("#userpassword > input");

    const userTry= {email : inputUser.value, pass: inputPass.value};

    const user = JSON.parse(localStorage.getItem("user"));
    if(user.email == userTry.email && user.pass == userTry.pass ){
       window.location = '/home'
    } else {
        const form = document.querySelector(".formLogin");
        const alert = document.createElement("p");
        alert.innerText = "usuario invalido";
        form.appendChild(alert)
    }
}
console.log('testes exec');
const botao = document.getElementById("btnLogin");
console.log(botao);
botao.onclick = validateUser;