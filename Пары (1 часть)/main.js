import { Card } from "./Card.js";
(function(){
    const cards = document.getElementById('cards')
    const resetButton = document.getElementById('resetBtn');
    const popup = document.getElementsByClassName('popup')[0];

    resetButton.addEventListener('click', (e)=>{
        e.preventDefault();
        cards.innerHTML = '';
        startGame();
        popup.classList.remove('active')}
    );

    const cardsCount = 8;
    startGame();

    function startGame(){
        const cardNumbers = shuffle(createNumbersArray(cardsCount));
        let firstCard;
        let secondCard;

        for (const cardNumber of cardNumbers){
            createCard(cardNumber);
        }

        function createCard(number){
            const card = new Card(cards, number)

            card.DOM_elem.addEventListener('click', ()=>{
                if (card.open || card.success){
                    return;
                }
                if (firstCard && secondCard){
                    if (firstCard.cardNumber != secondCard.cardNumber){
                        firstCard.open = false;
                        secondCard.open = false;
                        firstCard = null;
                        secondCard = null;
                    }

                }
                card.open = true;

                if (!firstCard){
                    firstCard = card;
                }
                else if (!secondCard){
                    secondCard = card;
                }

                if (firstCard && secondCard){
                    if (firstCard.cardNumber == secondCard.cardNumber){
                        firstCard.success = true;
                        secondCard.success = true;
                        firstCard = null;
                        secondCard = null;
                    }
                }

                if (cardNumbers.length === document.querySelectorAll('.correct').length){
                    popup.classList.add('active')
                };      
            })
        }
    }
})();

function createNumbersArray(count){
    let arr = [];
    for (let i = 0; i < count; i++){
        arr.push(i+1, i+1);
    }
    return arr;
}

function shuffle(arr){
    for (let i = arr.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    } 
    return arr;
}