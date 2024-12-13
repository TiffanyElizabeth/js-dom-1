/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) */

// DOM elements
const imgLightbulbOffElm = document.getElementById("lampOff")
const onBtnElm = document.getElementById("onButton")

console.log(imgLightbulbOffElm, onBtnElm)

// DOM events
onBtnElm.addEventListener("click", function() {
    imgLightbulbOffElm.src = 'img/lightbulbOn.png';
})