const $$ = (selector) => document.querySelectorAll(selector)
const $ = (selector) => document.querySelector(selector)

let inputsLongitud = $$(".longitud")//nodeList
let boton = $("#boton");
//let inputChequeado = false
let valorLongitud = 0


for (const input of inputsLongitud) {
     input.addEventListener("click",()=>{
        if(input.checked){
            valorLongitud = parseInt(input.value)
           // inputChequeado = true
        }
     })
}
//if (inputChequeado===false){
    //alert("Debe seleccionar la longitud de la contraseña")
//}


//r3glas

let letras = $("#letras")
let checkboxMayusculas = $("#checkbox-mayusculas")
let checkboxMinusculas = $("#checkbox-minusculas")
let radioBtnNumeros = $("#numeros")
let checkboxNumeros = $("#checkbox-numeros")
let caracteres = $("#caracteres")
let checkboxSimbolos = $("#checkbox-simbolos")

function validarReglas() {
    if (letras.checked) {
        checkboxMayusculas.disabled = false
        checkboxMinusculas.disabled = false
        checkboxMayusculas.checked= true
        checkboxMinusculas.checked= true
        checkboxNumeros.setAttribute("disabled", "true")
        checkboxSimbolos.checked = false
        checkboxNumeros.checked = false
        checkboxSimbolos.setAttribute("disabled", "true")
    }
    else if (radioBtnNumeros.checked) {
        checkboxNumeros.removeAttribute("disabled")
        checkboxSimbolos.removeAttribute("checked")
        checkboxSimbolos.checked = false
        checkboxMayusculas.setAttribute("disabled", "true")
        checkboxMayusculas.checked = false
        checkboxMinusculas.setAttribute("disabled", "true")
        checkboxMinusculas.checked = false
        checkboxNumeros.checked= true

    }

    else if (caracteres.checked) {
        checkboxNumeros.removeAttribute("disabled")
        checkboxMayusculas.removeAttribute("disabled")
        checkboxMinusculas.removeAttribute("disabled")
        checkboxSimbolos.removeAttribute("disabled")
        checkboxMinusculas.checked = true
        checkboxSimbolos.checked = true
        checkboxMayusculas.checked = true
        checkboxNumeros.checked = true
    }
    else {
        //si no marca nada, pero no sé donde poner el evento en ese caso, por ejemplo, para que si no marque nada, se marquen todos los caracteres, o para que salte un alert pidiendo que marque algo.
    }
}

let inputsReglas = $$(".inputReglas")

for (const input of inputsReglas){
    input.addEventListener("click", validarReglas)
}


//generacion de clave

let mayusculas = "ABCDEFGHIJKLLMNOPQRSTUVWXYZ"
let minusculas = "abcdefghijklmnopqrstuvwxyz"
let numeros = "0123456789"
let simbolos = "!#$%&/()=,?¡"
let todo = []

const pushearMayusculas =()=>{
    if (checkboxMayusculas.checked){
        todo.push(mayusculas )
        console.log(todo)
    }
     else if(checkboxMayusculas.checked === false){
            todo.splice(todo.indexOf(mayusculas),1)
        console.log(todo)

     }
    }
const pushearMinusculas =() =>{
    if(checkboxMinusculas.checked){
        todo.push(minusculas) 
        console.log(todo)
    }
     else if (checkboxMinusculas.checked === false){
        todo.splice(todo.indexOf(minusculas),1)
        console.log(todo)

     }
    }
    const pushearNumeros =()=>{
     if(checkboxNumeros.checked){
        todo.push(numeros) 
        console.log(todo)
    }
     else if (checkboxNumeros.checked === false){
        todo.splice(todo.indexOf(numeros),1)
        console.log(todo)

     
     }}

     const pushearSimbolos=()=>{
     if(checkboxSimbolos.checked){
        todo.push(simbolos) 
        console.log(todo)
    }
     else if (checkboxSimbolos.checked === false){
        todo.splice(todo.indexOf(simbolos),1)
        console.log(todo)

     }
     }


checkboxMayusculas.addEventListener("click", pushearMayusculas)
checkboxMinusculas.addEventListener("click", pushearMinusculas)
checkboxNumeros.addEventListener("click", pushearNumeros)
checkboxSimbolos.addEventListener("click", pushearSimbolos)
letras.addEventListener("click",pushearMayusculas)
letras.addEventListener("click",pushearMinusculas)
radioBtnNumeros.addEventListener("click", pushearNumeros)
caracteres.addEventListener("click",pushearMayusculas)
caracteres.addEventListener("click",pushearMinusculas)
caracteres.addEventListener("click",pushearSimbolos)
caracteres.addEventListener("click",pushearNumeros)


contraseñaGenerada  = $("#contraseñaGenerada")
console.log(contraseñaGenerada)

const generarContraseña=(longitudSeleccionada)=> {
    
        if (longitudSeleccionada != 0){
            let contraseña = ""
            for (i = 0; i < longitudSeleccionada; i++) {
                todoString = todo.join("")
                let indiceAleatorio = Math.floor(Math.random() * todoString.length)
                contraseña += todoString.charAt(indiceAleatorio)
            }
            contraseñaGenerada.innerHTML = `${contraseña}`    
            return contraseña
        }  
        else{
            alert("Seleccione un valor para longitud")
        }
    }

    const prueba =()=>{
        alert("hola")
    }

boton.addEventListener("click", ()=>generarContraseña(valorLongitud))

//generar otra contraseña
const recargar = $(".fa-solid")
recargar.addEventListener("click", ()=>generarContraseña(valorLongitud))


//copiar contraseña
const copy = $(".fa-regular")
copy.addEventListener("click",()=>{
    let textoAcopiar = contraseñaGenerada.innerText
    navigator.clipboard.writeText(textoAcopiar)
})


