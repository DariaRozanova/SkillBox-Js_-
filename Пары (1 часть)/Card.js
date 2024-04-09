export class Card{
    constructor(container, cardNumber){
        this.container = container;
        this._cardNumber = cardNumber;
        this.DOM_elem = this.createElement();
    }

    createElement(){
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = this._cardNumber;
        this.container.append(card);
        return card;  
    }

    set cardNumber(value){
        if (typeof value === 'number'){
            this._cardNumber = value;
        }
    }

    get cardNumber(){
        return this._cardNumber;
    }

    set open(value){
        if (value){
            this.DOM_elem.classList.add('opened');
        }
        else{
            this.DOM_elem.classList.remove('opened');
        }
    }

    get open(){
        return this.DOM_elem.classList.contains('opened');
    }

    set success(value){
        if (value){
            this.DOM_elem.classList.add('correct');
        }
        else{
            this.DOM_elem.classList.remove('correct');
        }
    }

    get success(){
        return this.DOM_elem.classList.contains('correct');
    }
}

export class AmazingCard extends Card{
    set cardNumber(value){
        const cardsImgArray = [
            'img/1.jpg',
            'img/2.jpg',
            'img/3.jpg',
            'img/4.jpg',
            'img/5.jpg',
            'img/6.jpg',
            'img/7.jpg',
            'img/8.jpg',
         ]
         const img = document.createElement('img')
         img.src = cardsImgArray[value]
         this.DOM_elem.style.backgroundImage = img;
         this._cardNumber = cardsImgArray[value];
    }
}