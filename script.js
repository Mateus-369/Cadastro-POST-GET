console.log("SCRIPT CARREGADO")

const botao = document.getElementById("cadastrar");

console.log("BOTÃO:", botao);

botao.addEventListener("click", () => {
    

    console.log("CLIQUEI");

    const lista = document.getElementById("listaUsuarios");

    const nome = document.getElementById("nome").value;

    const email = document.getElementById("email").value;
    

    let pessoa = {
        nome: nome,
        email: email   
    };

    console.log("VOU ENVIAR:", pessoa);

fetch("https://crudcrud.com/api/956b76d2011340b983f8e708bfd780a3/clientes", {
    
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(pessoa)
})

    
    .then((response) => {
    console.log("RESPOSTA:", response);
    return response.json();
})
    .then((data) => {

        console.log(data)
        const item = document.createElement("li");

        lista.appendChild(item)

        item.innerHTML = `nome: ${data.nome} - email: ${data.email} <button onclick = "remove('${data._id}', event)">X</button>`;

        
    })

})

            
 function remove(id, event){
            console.log(id);

            console.log(event.target);

            console.log(event.target.parentElement);

            event.target.parentElement.remove()

            fetch(`https://crudcrud.com/api/956b76d2011340b983f8e708bfd780a3/clientes/${id}`,{
                method: "DELETE"

            })

}

fetch("https://crudcrud.com/api/956b76d2011340b983f8e708bfd780a3/clientes", {
    method: "GET"

})

.then((response) => response.json())


.then((data) => {

    console.log(data)

const lista = document.getElementById("listaUsuarios")

data.forEach((cliente) => {

    const item = document.createElement("li");

    lista.appendChild(item)

    item.innerHTML = `nome: ${cliente.nome} - email: ${cliente.email} <button onclick = "remove('${cliente._id}', event)">X</button>`;
    
}) 

})
        
