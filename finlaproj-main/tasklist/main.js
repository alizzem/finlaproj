let input1 = document.querySelector(".input1");
let submit1 = document.querySelector(".submit1")
let output1 = document.querySelector(".output1");
let sorting = document.querySelector('.sorting');
let aimg = document.querySelector(".aimg")
let flag = false;

sorting.addEventListener('click', () =>{
    let added = document.querySelectorAll('.aelem')
    if(flag == false){
        let arr = Array.from(added);
        arr.sort((a,b) => a.innerHTML < b.innerHTML ? 1 : -1);
        output1.append(...arr);
        flag = true
    }
    else if(flag == true){
        let arr = Array.from(added);
        arr.sort((a,b) => a.innerHTML > b.innerHTML ? 1 : -1);
        output1.append(...arr);
        flag = false;
    }
})

function add(){
    let elem = document.createElement('div')
    elem.classList.add('aelem')
    elem.innerHTML = `
        <p>${input1.value}</p>
        <img class = "aimg" src="https://cdn-icons-png.flaticon.com/512/2734/2734822.png">
    `
    output1.appendChild(elem);
}

submit1.addEventListener('click', () => {
    if(input1.value != ''){
        add();
        input1.value = ''
    }
    else{
        alert("Enter the action")
    }
});

output1.addEventListener('click', (item) => {
    if(item.target.classList.contains('aimg')){
        item.target.parentElement.remove();
    }
})