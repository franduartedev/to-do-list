//primero llamamos a los elementos
const input= document.getElementById("input"); 
const btn= document.getElementById("btn");
const ul= document.querySelector("ul");
const clear= document.getElementById("clear");

// creamos la funcion que escucha al boton y agrega la tarea
btn.addEventListener("click", () => {
    if(input.value.trim() !== "") { //evita los espacios en blanco
        const li= document.createElement("li");
        li.textContent= input.value;
        ul.appendChild(li);
        input.value= "";
    }
})

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") btn.click(); // al presionar enter se activa el boton
})

clear.addEventListener("click", () => {
    ul.innerHTML= "";
})

