const emain = document.querySelector('main');

fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json();
}).then((data)=>{
    data.forEach(e => {
        const ediv = document.createElement('div')
        ediv.innerText = e.name;
        emain.appendChild(ediv)
    });
})