var input = document.querySelector("input")
var button = document.querySelector("button")
var headding = document.querySelector("h1")

button.addEventListener("click", ()=> {
    var name = input.value
    input.value = ``;
    headding.innerText = `Seu nome e: ${name}`;
})