
let agora = new Date()
let hora = agora.getHours()
let minuto = agora.getMinutes()

console.log(`Agora são exatamente ${hora} horas e ${minuto} Minutos`)
if (hora >= 5 && hora < 12){
    console.log("Bom dia!")
}
else if (hora >= 12 && hora < 18) {
    console.log("Boa Tarde!")
}
else {
    console.log("Boa Noite!")
}