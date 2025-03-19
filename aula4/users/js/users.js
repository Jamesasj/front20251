const btnCreate = document.getElementById("createUser");

const lusers = [];


function updateTabela(){
    const etbody = document.querySelector('tbody');
    etbody.innerHTML = "";

    lusers.forEach(user => {
        const elinha = document.createElement('tr');
        elinha.innerHTML = `
        <td>${user.nome}<td>
        <td> <td>
        <td> <td>
        <td> <td>
        <td>
            <button>editar</button>
            <button>remover</button>
        </td>
        ` ;
        etbody.appendChild(elinha)
    })
}

const callModal =  () => {
    const main = document.querySelector('main');
    const emodal = document.createElement('div');

    emodal.classList = 'modal';

    emodal.innerHTML = `
     <div class="formCadastro">
            <div class="formItem" id="nome">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome">
            </div>

            <div class="formItem" id="sobrenome">
                <label for="sobrenome">Sobrenome</label>
                <input type="text" name="sobrenome" id="sobrenome">
            </div>

            
            <div class="formItem" id="email">
                <label for="email">email</label>
                <input type="email" name="email" id="email">
            </div>

            <div class="formItem"  id="password">
                <label for="password">password</label>
                <input type="password" name="password">
            </div>

            
            <div class="formItem" id="password2">
                <label for="password2">password2</label>
                <input type="password" name="password2" >
            </div>
            <button id="btnSave">salvar</button>
            <a href="/"><button>cancelar</button></a>
    </div>
    `


    main.appendChild(emodal);

    const btnSave = document.getElementById('btnSave');

    btnSave.onclick=()=>{
        const enome = document.querySelector('#nome > input');

        const user = {nome: enome.value };
        lusers.push(user);

        console.log(lusers)
        updateTabela()
    }

}

callModal()
btnCreate.onclick = callModal;
