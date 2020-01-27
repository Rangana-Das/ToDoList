const name=document.querySelector('#name');
const password=document.querySelector('#password');
const button=document.querySelector('.btn');

loadEventListeners();
function loadEventListeners(){
    name.addEventListener('focus', addActive);
    password.addEventListener('focus', addActive);
    name.addEventListener('blur', removeActive);
    password.addEventListener('blur', removeActive);
    button.addEventListener('click',verifySub);
    
}
function addActive(e){
    this.parentElement.classList.add('active');
}
function removeActive(e){
    if(this.value==='')
        this.parentElement.classList.remove('active');
}
function verifySub(e){
    if(name.value===''||password.value==='')
        alert('Please fill required fields');
    else
        window.open("https://rangana-das.github.io/ToDoList/list.html","_blank");
}
