const cssPromises = {};

function loadResource(src){
    //JS модуль 
    if (src.endsWith('.js')){
        return import(src);
    }
    //CSS
    if (src.endsWith('.css')){
        if (!cssPromises[src]){
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = src;
            cssPromises[src] = new Promise(resolve =>{
                link.addEventListener('load', resolve);
            })
            document.head.append(link);
        }
        return cssPromises[src];
    }
    //Данные с сервера
    return fetch(src).then(res => res.json());
}

const appContainer = document.querySelector('#app');
const searchParams = new URLSearchParams(location.search);
const filmId = searchParams.get('filmId')

function renderPage(moduleName, api, css){
    Promise.all([moduleName, api, css].map(src => loadResource(src)))
        .then(([pageModule, data])=>{
            appContainer.innerHTML = '';
            appContainer.append(pageModule.render(data));
        });    
}

if (filmId){
    renderPage(
        './film-details.js',
        `https://swapi.dev/api/films/${filmId}`,
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css')
}
else{
    renderPage(
        './film-list.js',
        'https://swapi.dev/api/films/',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css')
}
