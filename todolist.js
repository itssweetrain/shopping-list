const jsForm = document.querySelector(".js-form")
const toDoList =  document.querySelector(".todo-list");
const inputText = document.querySelector(".input-text");
const addBtn = document.querySelector(".plus");
const CHECK_DONE = document.querySelector(".checkDone");

function handleClick(event){
    const currentValue = inputText.value;
    if (currentValue === ''){
        return;
    };
    paintToDoList(currentValue);
    toDoList.scrollIntoView({block: "center"});
    inputText.value = "";
    
};

function paintToDoList(text){
const li = document.createElement("li");
const delBtn = document.createElement("button");
const doneBtn = document.createElement("button");
const span = document.createElement("span");
const items = document.createElement("div");
const items_btn = document.createElement("div");
const divider = document.createElement("div");

delBtn.innerHTML = `<i class="fas fa-trash trash"></i>`;
doneBtn.innerHTML = `<i class="fas fa-check-circle"></i>`;

span.innerHTML = text;
toDoList.appendChild(li);
li.appendChild(items);
items.appendChild(span); 
items.appendChild(items_btn);
items_btn.appendChild(doneBtn);
items_btn.appendChild(delBtn);

li.appendChild(divider);

li.classList.add("list");
span.classList.add("span");
delBtn.classList.add("removeBtn");
doneBtn.classList.add("finishedBtn");
divider.classList.add("divider");
items.classList.add("items");
items_btn.classList.add("items_btn");

delBtn.addEventListener('click', event => {
    const target = event.target;
    target.closest('.list').remove();
    }
);

doneBtn.addEventListener('click', () => {
    span.classList.add("checkDone");
})
};

addBtn.addEventListener('click', handleClick);
inputText.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        handleClick();
    }
});