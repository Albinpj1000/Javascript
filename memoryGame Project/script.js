const cards = document.querySelectorAll(".card")
cards.forEach(card => (
    card.addEventListener("click",flip)
))


function flip(){
    this.classList.add("flip")
}