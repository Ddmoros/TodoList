

let inputElement = document.querySelector('input')
let formElement = document.querySelector('form')
let listElement = document.querySelector('ul')
let totalTasksElement = document.querySelector('#total-pending')


let pendingTasks = [
    'Buy groceries',
    'Car service'
]

function deleteItem (e) {
    let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = pendingTasks.indexOf(task);
    if(index !== -1) {
       pendingTasks.splice(index, 1); 
    }

    populateList ();
}

function populateList() {
    listElement.innerHTML ='';
    pendingTasks.forEach(function(item){
        let newItem = document.createElement('li');

        // add checkbox

        let check = document.createElement('input');
        check.classList.add('check');
        check.setAttribute('type', 'checkbox');
        newItem.appendChild(check);

        // Add new span for text
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span);

        // Add delete button
        let anchorElement = document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML = '<i class="fas fa-trash-alt"></i>';
        newItem.appendChild(anchorElement);

        anchorElement.addEventListener('click', (e)=> deleteItem(e)) 

        // Add Li to UL
        listElement.appendChild(newItem);

    });

    totalTasksElement.innerHTML = pendingTasks.length;
    inputElement.value = '';

}

populateList ();

function addTask() {
    if (inputElement.value) {
        pendingTasks.push(inputElement.value);
        populateList();
    }
}

formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});


// Check box added

let checkBox = document.createElement('input');
checkBox.type = 'checkbox';

let label = document.createElement('label');
let labelText = document.createElement('span');

label.appendChild(checkBox);
label.appendChild(labelText);

let listItem = document.createElement('li');
listItem.appendChild(label);

// create event move to complete when box checked

let completedTasks = document.createElement

checkBox.addEventListener('click', function(item){
    if(this.checked){
        completedTasks.appendChild(li)
    } else {
        pendingTasks.appendChild(li)
    }
})