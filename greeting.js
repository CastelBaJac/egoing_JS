const form = document.querySelector(".js_form"),
    input = form.querySelector("input");
    greeting = document.querySelector("js_greeting");

const USER_LS = "currentUser";
const SHOWING_CN="showing";
function paintName(text){
    form.classList.remove(SHOWING_CN);
    greeting.claasList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        //사용자 x 
    } else{
        //Uset o
        paintName(currentUser);
    }
}

function init(){

}

init();