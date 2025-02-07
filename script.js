const instruChoice = document.getElementById("choice")
const nameGuitar = document.getElementById("guitarra")
const nameBateria = document.getElementById("bateria")

instruChoice.addEventListener("click", function(){
    let choice = instruChoice.value


    if(choice == "bateria"){
        nameGuitar.classList.add("hidden")
        nameBateria.classList.remove("hidden")
        return;
    }
    if(choice == "guitarra"){
        nameBateria.classList.add("hidden")
        nameGuitar.classList.remove("hidden")
        
        return;
    }
    else{
        nameGuitar.classList.remove("hidden")
        nameBateria.classList.remove("hidden")
    }
    

})

