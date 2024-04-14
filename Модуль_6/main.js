const input = document.querySelector('input');
const prototypesChain = document.querySelector('#chain');

function createPrototypeChain(){
    prototypesChain.innerHTML = '';
    if (typeof window[input.value] == 'undefined') {
        input.classList.add('wrong');
        return;
    }
    prototypesChain.append(createPrototypeOl(input.value));
    input.value = '';
}

function createPrototypeOl(elementName){
    const ol = document.createElement('ol');
    const obj = window[elementName].prototype;
    ol.append(createLi(obj));
    let prototype = Object.getPrototypeOf(obj);
    while (prototype){
        ol.append(createLi(prototype));
        prototype = Object.getPrototypeOf(prototype);
    }
    return ol;
}

function createLi(obj){
    const li = document.createElement('li');
    li.textContent = obj.constructor ? obj.constructor.name : '[Без названия]';
    return li;
}

input.addEventListener('change', ()=>{
    input.classList.remove('wrong');
})