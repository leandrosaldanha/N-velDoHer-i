 

function exibirNivelHeroi(){
    event.preventDefault()
 let nomeHeroi = document.getElementById("nomeHeroi").value
 let expHeroi = document.getElementById("nivelHeroi").value
 let corSpan = document.getElementById("spanCor");
  
    if(expHeroi<=1000)
    {document.getElementById("paragrafo").innerHTML =`${nomeHeroi} seu nível de Herói é `
    document.getElementById("spanCor").innerHTML= "Bronze"
    corSpan.style.color ="#DB9370"}
     else if(expHeroi >= 1001 && expHeroi<= 2000 )
    {document.getElementById("paragrafo").innerHTML =`${nomeHeroi} seu nível de Herói é `
    document.getElementById("spanCor").innerHTML= "Prata"
    corSpan.style.color ="#C0C0C0"} 
     else if(expHeroi >=2001 && expHeroi<=5000)
    {document.getElementById("paragrafo").innerHTML =`${nomeHeroi} seu nível de Herói é`
    document.getElementById("spanCor").innerHTML= "Ouro"
    corSpan.style.color ="#FFD700"}
     else if(expHeroi>=5001 && expHeroi<=8000)
    {document.getElementById("paragrafo").innerHTML =`${nomeHeroi} seu nível de Herói é `
    document.getElementById("spanCor").innerHTML= "Platina"
    corSpan.style.color ="#A0B2C6"}
     else if(expHeroi>=8001 && expHeroi<=9000)
    {document.getElementById("paragrafo").innerHTML =`${nomeHeroi} seu nível de Herói é `
    document.getElementById("spanCor").innerHTML= "Ascendente"
    corSpan.style.color ="#50C878"}
     else if(expHeroi>=9001 && expHeroi<=10000)
    {document.getElementById("paragrafo").innerHTML =`${nomeHeroi} seu nível de Herói é `
    document.getElementById("spanCor").innerHTML= "Imortal"
    corSpan.style.color ="#6C1413"} 
    else if(expHeroi>=10001 )
    {document.getElementById("paragrafo").innerHTML =`${nomeHeroi} seu nível de Herói é `
    document.getElementById("spanCor").innerHTML= "Radiante"
    corSpan.style.color ="#ffc600"}

}

