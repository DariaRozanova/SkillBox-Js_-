export function render(data){
    const container = document.createElement('div');
    container.classList.add("container", "py-4");
    const title = document.createElement('h1');
    title.textContent = data.title;

    const decs = document.createElement('p');
    decs.textContent = data.opening_crawl;

    const backBtn = document.createElement('a');
    backBtn.classList.add('btn', 'btn-info');
    backBtn.textContent = 'Back to episodes';
    backBtn.href = '?';

    const charactersDiv = createListDiv('Characters', 'characters-list');
    const planetsDiv = createListDiv('Planets', 'planets-list');
    const speciesDiv = createListDiv('Species', 'species-list');

    container.append(title);
    container.append(decs);
    container.append(charactersDiv);
    container.append(planetsDiv);
    container.append(speciesDiv);
    container.append(backBtn);
    
    document.body.append(container);

    //вывести список планет, список рас
 
    // function loadData(url) {
    //     return fetch(url).then(res => res.json());
    // }

    async function loadData(url){
        try {
            const response = await fetch(url).then(res => res.json());
            return response.name;
        } catch (error) {
            return '';
        }
    }

    async function getData(urls, DOMelem){
        const elem = document.querySelector(DOMelem);
        for (let i = 0; i < urls.length; i++){
            const name = await loadData(urls[i])
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'list-group-item-action');
            li.textContent = name;
            elem.appendChild(li);
        }
    }


    async function getFilmData(){
        const planets = data.planets;
        const species = data.species;
        const characters = data.characters;
        await Promise.all([
            getData(planets, '.planets-list'), 
            getData(species, '.species-list'), 
            getData(characters, '.characters-list')])
    }

    getFilmData()
    return container;
}

function createListDiv(_title, class_name){
    const div = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = _title
    const list = document.createElement('ul');
    list.classList.add(class_name, 'list-group', 'py-3')
    div.append(title);
    div.append(list);
    return div;      
}