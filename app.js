const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks')
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

loadEventListeners();
function loadEventListeners(){
    document.addEventListener('DOMContentLoaded',getTasks);
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTasks);
    filter.addEventListener('key up',filterTasks);
    filter.addEventListener('focus', addActive);
    taskInput.addEventListener('focus', addActive);
    filter.addEventListener('blur', removeActive);
    taskInput.addEventListener('blur', removeActive);
}
function addActive(e){
    this.parentElement.classList.add('active');
}
function removeActive(e){
    this.parentElement.classList.remove('active');
}
function addTask(e){
    if(taskInput.value===''){
        alert('Add a task');
    }
    const li=document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link=document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    storeinLS(taskInput.value);
    taskInput.value='';
    e.preventDefault();
}
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li=document.createElement('li');
        li.className='collection-item';
        li.appendChild(document.createTextNode(task));
        const link=document.createElement('a');
        link.className='delete-item secondary-content';
        link.innerHTML='<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    });    
}
function storeinLS(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
            removefromLS(e.target.parentElement.parentElement);
        }
        
    }
}
function removefromLS(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1);
        }
    });    
}
function clearTasks(){
    //taskList.innerHTML='';
    //faster
    while(taskList.firstChild){
        taskList.remove(taskList.firstChild);
    }
    clearfromLS();
}
function clearfromLS(){
    localStorage.clear();
}
function filterTasks(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item =task.firstChild.textContent;
        if(item.toLowerCase().indexOf(task)!=-1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    });
}