const name=document.querySelector('#name');
const password=document.querySelector('#password');
const confpass=document.querySelector('#conf-password');
const email=document.querySelector('#email');
const alerts=document.querySelector('.alert');
const button=document.querySelector('.btn');

loadEventListeners();
function loadEventListeners(){
    name.addEventListener('focus', addActive);
    password.addEventListener('focus', addActive);
    confpass.addEventListener('focus', addActive);
    email.addEventListener('focus', addActive);
    name.addEventListener('blur', removeActive);
    password.addEventListener('blur', removeActive);
    confpass.addEventListener('blur', removeActive);
    email.addEventListener('blur', removeActive);
    confpass.addEventListener('keyup',sendAlert);
    button.addEventListener('click',verifySub);
    
}
function addActive(e){
    this.parentElement.classList.add('active');
}
function removeActive(e){
    if(this.value==='')
        this.parentElement.classList.remove('active');
}
function sendAlert(e){
    let cpass= e.target.value;
    let msg='',color;
    const pass=password.value;
    if(cpass===pass){
        msg='Passwords match';
        color='green';
    }else{
        msg='Passwords do not match';
        color='red';
    }
    setMessage(msg,color);
}
function setMessage(msg,color){
    alerts.textContent=msg;
    alerts.style.color=color;
}
function verifySub(e){
    if(name.value===''||email.value===''||password.value===''||confpass.value==='')
        alert('Please fill required fields');
    else
        window.open("https://rangana-das.github.io/ToDoList/regsuccess.html","_blank");
}
