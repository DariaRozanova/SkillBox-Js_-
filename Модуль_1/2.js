document.addEventListener('DOMContentLoaded', event => {
    const good_values = 'йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ- '
    const inputs = document.querySelectorAll('.js-check-input')
    inputs.forEach((el) => {
        el.addEventListener('keypress', event => {
            if (!good_values.includes(event.key)){
                event.preventDefault();
            }
        })
        el.onblur = ()=>{
            let value = el.value;
            let newValue = '';
            for (let char of value){
                if (good_values.includes(char)){
                    newValue += char;
                }
            }
            if (newValue){
                newValue = newValue.replace(/^[-\s]*/, '')
                .replace(/[-\s]*$/, '')
                .replace(/-{2,}/g,"-")
                .replace(/\s{2,}/g," ");
                newValue = newValue[0].toUpperCase() + newValue.slice(1).toLowerCase();
            }
            el.value = newValue;
        }     
    })

    const addBtn = document.querySelector('.addBtn');
    const forNames = document.querySelector('.container');
    addBtn.addEventListener('click', (e) =>{

        let name = []
        inputs.forEach((el) =>{
            name.push(el.value);
        })
        if (!name.includes('')){
            let newp = document.createElement('p');
            newp.textContent = name.join(' ');
            forNames.append(newp);
            inputs.forEach((el) =>{
                el.value = '';
            })           
        }
        e.preventDefault();
    })
})
//hello1233!