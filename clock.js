const clockContainer = document.querySelector(".js_clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText=`${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? '0'+seconds : seconds}`;
}

function init(){
    getTime();       //getTime을 미리 한번 호출하는 이유 : 반복이전에
    //현재시간으로 출력하는게 부드럽기 때문에 없으면 00:00 에서 바로 반복
    setInterval(getTime,1000);
}

init();