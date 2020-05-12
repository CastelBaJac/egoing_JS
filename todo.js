const toDoForm = document.querySelector(".js_toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";
const toDos = [];



function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode; // 삭제 해야할 li 

    toDoList.removeChild(li); //toDoList(ul)의 자식 노드인 li를 삭제 
    //삭제해야하는 li를 지정 
    
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text) { // 화면에 추가(그리기)
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "delete";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    // empty li에 생성한 span 과 delBtn 추가
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId
    toDoList.appendChild(li); // 생성한 li 를 ul 으로 추가

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        // for(let i=0 ; i<parsedToDos.length;i++){
        //     console.log(parsedToDos[i].text);
        // }
        parsedToDos.forEach(function(toDo){ 
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();