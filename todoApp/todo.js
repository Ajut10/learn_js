
let title = document.getElementById('title');
let description = document.getElementById('description');
let form = document.querySelector('form');
let container = document.querySelector(".container");





const tasks =localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')) : [];
showAllTasks();

function showAllTasks() {
    tasks.forEach((value,index)=>{
        let div =document.createElement('div');
        div.setAttribute('class', 'task');

        let innerDiv = document.createElement('div');
        div.append(innerDiv);

        let p = document.createElement('p');
        p.innerHTML = value.title;
        innerDiv.append(p);

        let span = document.createElement('span');
        span.innerHTML=value.description;
        innerDiv.append(span);

        let btn = document.createElement('button');
        btn.setAttribute('class', 'deleteBtn');
        btn.innerText="-";

        btn.addEventListener('click', ()=>{
            removeTask();
            tasks.splice(index,1);
    localStorage.setItem('task', JSON.stringify(tasks));

            showAllTasks();
        });
        div.append(btn);
        container.append(div);
    });
}
function removeTask() {
    tasks.forEach((value)=>{
        let div =document.querySelector(".task");
        div.remove();
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    removeTask();
    tasks.push({
        title:title.value,
        description : description.value,
    });
    localStorage.setItem('task', JSON.stringify(tasks));
    showAllTasks();
    console.log(tasks);
})