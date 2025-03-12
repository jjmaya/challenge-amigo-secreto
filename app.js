// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value
    if (!amigo) {
        alert("Por favor, inserte un nombre");
    }  else {
        amigos.push(amigo);
        inputAmigo.value = "";
        inputAmigo.focus();
        agregarAmigoHTML();
        return
    }
} 

// Una vez se agrega el nombre a la lista js "amigos" se debe mandar a la lista html
function agregarAmigoHTML(){
    let lista_html = document.getElementById("listaAmigos");
    lista_html.innerHTML = "";

    for (let amigo of amigos){
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo
        lista_html.appendChild(nuevoAmigo);
    }
    
}

//Ahora debemos sortear los amigos

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Aún no se puede sortear amigos");
        return
    }
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)]
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`
}