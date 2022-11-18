let input1 = document.querySelector(".input1");
let submit1 = document.querySelector(".submit1")
let output1 = document.querySelector(".output1");
let sorting = document.querySelector('.sorting');
let aimg = document.querySelector(".aimg")
let added = document.querySelectorAll('.aelem')

const todo = [];

sorting.addEventListener('click', () =>{
    sorting.classList.toggle('sorting2');
    todo.sort();
})


submit1.addEventListener('click', () => {
    if(input1.value != ''){
        let elem = document.createElement('div')
        todo.push(input1.value);
        elem.classList.add('aelem')
        elem.innerHTML = `
            <p>${input1.value}</p>
            <img class = "aimg" src="https://cdn-icons-png.flaticon.com/512/2734/2734822.png">
        `
        output1.appendChild(elem);
        
        input1.value = ''
    }
    else{
        alert("Enter the action")
    }
    console.log(todo);
});

output1.addEventListener('click', (item) => {
    if(item.target.classList.contains('aimg')){
        item.target.parentElement.remove();
    }
})