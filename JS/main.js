
fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
.then(resp => resp.json())
.then(json => criaCards(json.products))


function criaCards(card){
    console.log(card)
    for(let i = 0; i<card.length; i++){
        $('#cards').append(`
        <div class="card">
            <img src="${card[i].image}"
            <p>${card[i].name}</p>
            <p>${card[i].description}</p>
            <p>De: R$${card[i].oldPrice}</p>
            <p class="cardPreco">Por: R$${card[i].price}</p>
            <p>ou 2x de R$${card[i].price / 2}</p>
        </div>
        `)
    }
}