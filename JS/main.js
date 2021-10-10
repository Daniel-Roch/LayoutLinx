
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
.then(resp => resp.json())
.then(json => criaCards(json.products))


function criaCards(card){
    for(let i = 0; i<card.length; i++){
        $('#cards').append(`
        <div class="card">
            <img class="cardImg" src="${card[i].image}"/>
            <p class="cardName">${card[i].name}</p>
            <p class="cardDesc">${card[i].description}</p>
            <p class="cardOldPrice">De: R$${card[i].oldPrice}</p>
            <p class="cardNewPrice">Por: R$${card[i].price}</p>
            <p class="cardPrice2x">ou 2x de R$${card[i].price / 2}</p>
            <button class="cardBtn">Comprar</button>
        </div>
        `)
    }
}


//generating more items: 
const btnMore = document.querySelector("#moreBtn")
let click = 1

btnMore.addEventListener('click',(e)=>{
    e.preventDefault()
    click++
    fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${click}`)
    .then(res => res.json())
    .then(json => criaCards(json.products))
})