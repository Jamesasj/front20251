console.log("testes")
const botao = document.getElementById("btnSave");



function searcheFieldRequerid(idItem) {
    const item = document.getElementById(idItem);
    const eCampo = item.querySelector("input");
    const eLabel = item.querySelector("label")

    if (eCampo.value == "") {
        const e = document.createElement("p");
        e.classList = "alert";
        e.innerHTML = `Campo ${eLabel.innerText} e obrigatorio`;
        item.appendChild(e);
        return null;
    }

    return eCampo.value;
}

const clearAlerts = function () {
    const list = document.querySelectorAll('p');
    list.forEach(e => {
        e.remove();
    })
}

const execSalve = () => {
    clearAlerts();
    const user = {
        nome: searcheFieldRequerid("nome"),
        sobrenome: searcheFieldRequerid("sobrenome"),
        email: searcheFieldRequerid("email"),
        pass: searcheFieldRequerid("password"),
        pass2: searcheFieldRequerid("password2"),
    }

    if (user.pass != user.pass2) {
        const item = document.getElementById("password2");
        const e = document.createElement("p");
        e.classList = "alert";
        e.innerHTML = `O password 2 e diferente do password`;
        item.appendChild(e);
    }
    console.log(user)
    localStorage.setItem("user", JSON.stringify(user));


};

// botao.onclick = console.log("testes")
botao.onclick = execSalve;