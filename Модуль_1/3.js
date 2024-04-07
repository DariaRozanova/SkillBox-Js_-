document.addEventListener('DOMContentLoaded', (event)=>{
    const topBtn = document.querySelector('.myBtn');
    window.addEventListener('scroll', ()=>{
        let pos = window.pageYOffset;
        if (pos > 100){
            topBtn.classList.remove('hidden');
        }
        else{
            topBtn.classList.add('hidden')
        }
    }, {passive: true})
    topBtn.addEventListener('click', ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
})