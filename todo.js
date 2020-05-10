const toDoForm = document.querySelector(".js_toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText="delete";
    const span = document.createElement("span");
    span.innerText=text;
    // empty li에 생성한 span 과 delBtn 추가
    li.appendChild(delBtn);
    li.appendChild(span);
    
    toDoList.appendChild(li); // 생성한 li 를 ul 으로 추가 
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();