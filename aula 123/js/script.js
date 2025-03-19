console.log('carregeuei normal');


function alocanaMemoria(){
    console.log('carregeuei mas nao executado');
}


const bntCancel = document.getElementById("bntCancel");

bntCancel.onclick = () => {
    bntCancel.innerHTML = "ola mundo"
}