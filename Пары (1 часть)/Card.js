export class Card{
    constructor(container, cardNumber){
        this.container = container;
        this.cardNumber = cardNumber;
        this.node = this.createElement();
    }

    createElement(){
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = this.cardNumber;
        this.container.append(card);
        return card;  
    }

    set cardNumber(value){
        this._cardNumber = value;
    }

    get cardNumber(){
        return this._cardNumber;
    }

    set open(value){
        this._open = value;
        if (value){
            this.node.classList.add('opened');
        }
        else{
            this.node.classList.remove('opened');
        }
    }

    get open(){
        return this._open;
    }

    set success(value){
        this._success = value;
        if (value){
            this.node.classList.add('correct');
        }
        else{
            this.node.classList.remove('correct');
        }
    }

    get success(){
        return this._success;
    }
}

export class AmazingCard extends Card{
    set cardNumber(value){
        const cardsImgArray = [
            './img/1.jpg',
            './img/2.jpg',
            './img/3.jpg',
            './img/4.jpg',
            './img/5.jpg',
            './img/6.jpg',
            './img/7.jpg',
            './img/8.jpg',
         ]
         const img = document.createElement('img');
         img.classList.add('amazing-img')
         img.src = cardsImgArray[value - 1];
         this._cardNumber = img.outerHTML;
    }
    
    get cardNumber(){
        return this._cardNumber;
    }
}