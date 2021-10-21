
let sceltaUtente = "" // dichiaro variabile che l'utente riempirà con un scelta forzata 

do{
     sceltaUtente = prompt("Scegliere il livello di difficoltà tra : 3/2/1") //chiedo all'utente di scegliere il livello
     
}
while(!(sceltaUtente<=3)) // controllo che sia un numero che va da 1 e 3 compresi 

//converto la scelta del livello di difficoltà utente in numeri di caselle
if(sceltaUtente==3){
     sceltaUtente=49
}
else if(sceltaUtente==2){
     sceltaUtente=81
}
else if(sceltaUtente==1){
     sceltaUtente=100
}


const selezioneContainer = document.getElementById("container") // selezione il container 



for(let i=1; i<=sceltaUtente; i++){  // il numero giri del ciclo coincide con il numero delle caselle del livello stabilito
     
     var creazioneDiv = document.createElement("div"); // creo un div e dichiaro la variabile
     creazioneDiv.innerHTML += i; //aggiungo del testo al div che corrisponde al contatore e numero di casella corrispondente 
     creazioneDiv.className = "box" //aggiungo la classe box 

     selezioneContainer.append(creazioneDiv) //inserisco il div creato nel contenitore
     
     //al click faccio diventare verdi i quadrati 
     creazioneDiv.addEventListener("click", function(){

          this.classList.add("green") //con this richiamo il div 
     })
}




let bombe = []

while(bombe.length<16){
     
     let numeroRandom = Math.floor(Math.random() * (sceltaUtente - 1 + 1) + 1);
     if(!(bombe.includes(numeroRandom))){
          bombe.push(numeroRandom)
     }


    

}



     
creazioneDiv.addEventListener("click", function(){
     
     var ok = document.getElementById("container").children[bombe]
    console.log(ok)
     
     
})





