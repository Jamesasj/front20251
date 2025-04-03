const emain = document.querySelector('main');
/// FAZER UM GET
fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json();
}).then((data)=>{
    data.forEach(e => {
        const ediv = document.createElement('div')
        ediv.innerText = e.name;
        emain.appendChild(ediv)
    });
})


const postBlog = {
    userId: 1,
    title: "Como passar de ano",
    body: "basta apenas estudar"
}
const execResponse = (res) => {
    console.log("resposta do post")

console.log(res.status)
    console.log(res.ok)

}

const execResponse2 = (res) => {
    
    console.log("resposta do put exec na linha 47")

console.log(res.status)
    console.log(res.ok)

}


fetch("https://jsonplaceholder.typicode.com/posts", {
    body: JSON.stringify(postBlog),
    method: "POST",
    headers: {'Content-type': 'application/json; charset=UTF-8',}
}).then(execResponse)


fetch("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify(postBlog),
    method: "PUT",
    headers: {'Content-type': 'application/json; charset=UTF-8',}
}).then(execResponse2)

console.log("executado na linha 49")

const acDelete = fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
})

acDelete.then(execResponse2);



async function executa3(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const listaUsers = await response.json();
    console.log(listaUsers);
}

executa3();