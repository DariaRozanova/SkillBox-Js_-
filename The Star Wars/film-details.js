export function render(data){
    const container = document.createElement('div');
    container.classList.add("container", "py-4");
    const title = document.createElement('h1');
    title.textContent = data.title;

    const decs = document.createElement('p');
    decs.textContent = data.opening_crawl;

    const backBtn = document.createElement('a');
    backBtn.classList.add('btn', 'btn-info');
    backBtn.textContent = 'Back to episodes'
    backBtn.href = '?';

    const characters_div = create_list_div('Characters', 'characters-list')
    const planets_div = create_list_div('Planets', 'planets-list')
    const species_div = create_list_div('Species', 'species-list')

    container.append(title);
    container.append(decs);
    container.append(characters_div);
    container.append(planets_div);
    container.append(species_div);
    container.append(backBtn);
    
    document.body.append(container);

    //вывести список планет, список рас
 
    function loadData(url) {
        return fetch(url).then(res => res.json());
    }

    async function getData(urls, DOMelem){
        const elem = document.querySelector(DOMelem);
        for (let i = 0; i < urls.length; i++){
            const name = await loadData(urls[i]).then(res => res.name)
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

function create_list_div(_title, class_name){
    const div = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = _title
    const list = document.createElement('ul');
    list.classList.add(class_name, 'list-group', 'py-3')
    div.append(title);
    div.append(list);
    return div;      
}