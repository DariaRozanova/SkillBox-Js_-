export class Card{
    constructor(container, cardNumber){
        this.container = container;
        this._cardNumber = cardNumber;
        this.DOM_elem = this.createElement();
    }

    createElement(){
        const card = document.createElement('li');
        card.classList.add('card');
        card.textContent = this.cardNumber;
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