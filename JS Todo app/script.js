let lists = [];
let element = document.getElementById('todo');
let input = document.getElementById('input');
let button = document.getElementById('button');

button.addEventListener('onclick', () => {
    const val = input.value;
    let el = '';
    lists.push(val)
    if(lists.length > 0){
        for(let i = 0; i < lists.length; i++ ){
            el += "<li>"+lists[i]+"</li>"
        }
        element.innerHTML = el;
    }
})
