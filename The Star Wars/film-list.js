export function render(data){
    const container = document.createElement('div');
    container.classList.add('container', 'text-center', 'py-4');
    const cards_div = document.createElement('div');
    cards_div.classList.add(
        'container',
        'd-flex',
        'justify-content-between',
        'flex-wrap',
        'py-4'
    );
    const title = document.createElement('h1');
    title.textContent = 'The Star Wars Episodes';
    container.append(title);
    /* 
        номер фильмы
        название эпизода
        кнопка детальнее
    */
    for (let i = 0; i < data.results.length; i++){
        const film = data.results[i];
        const productCard = document.createElement('div');
        const cardBody = document.createElement('div');
        const title = document.createElement('h5');
        const episode_id = document.createElement('p');
        const btn = document.createElement('a')
        
        productCard.style.width = '30%';
        productCard.classList.add('card', 'my-2');
        cardBody.classList.add('card-body');
        title.classList.add('card-title');
        btn.classList.add('btn', 'btn-primary');

        productCard.append(cardBody);
        cardBody.append(title);
        cardBody.append(episode_id);
        cardBody.append(btn);

        title.textContent = film.title;
        episode_id.textContent = film.episode_id;
        btn.textContent = 'Подробнее';
        btn.href = `?filmId=${i+1}`;

        cards_div.append(productCard);
    }
    container.append(cards_div);
    return container;
}