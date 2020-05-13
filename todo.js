const toDoForm = document.querySelector(".js_toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

let toDos = [];


function updateId(){
    let id =1;
    toDos.forEach(function(ToDo){
        //HTML의 li에 부여된 id 값을 수정
        document.getElementById(`${ToDo.id}`).id=id;
        //toDos list에 들어있는 id 값 수정
        //local storage 의 값은 추후 saveToDos를 통해 수정 
        ToDo.id=id;
        id=id+1;
    });

}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode; // 삭제 해야할 li

    toDoList.removeChild(li); //toDoList(ul)의 자식 노드인 li를 삭제
    //삭제해야하는 li를 지정
    const cleanToDos = toDos.filter(function (ToDo) {
        if(toDos.length===0){
            return false;
        }
        // btn.parentNode 의 id 와 다른 값만 골라서 새로운 배열
        //->event가 발생한 li 를 빼고 배열 생성
        return ToDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    
    updateId();
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) { // 화면에 추가(그리기)
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "delete";
    delBtn.addEventListener("click", deleteToDo);
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
        // console.log(parsedToDos[i].text); }
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();