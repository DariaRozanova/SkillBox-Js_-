const openBtn = document.querySelector('.js-open-dropdown');
const dropdown_menu = document.querySelector(openBtn.dataset.toggle); 

document.addEventListener('click', (event) =>{
    if (event.target == openBtn){
        dropdown_menu.style.display = dropdown_menu.style.display === 'block' ? 'none' : 'block';
        return;
    }
    
    if (!dropdown_menu.contains(event.target)){
        dropdown_menu.style.display = 'none';
    }
})