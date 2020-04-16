function AP() {
    this.work18 = false; //18시 근무
    this.return = false; //복귀 예정
    this.out_info = []; //영외활동 리스트
    this.noReturn = false;
}

let ap_num;
let ap_ar = new Array();
let no_ap;
let maxDay;
let work_stack;
// 값입력
ap_num = prompt("총원 입력하시오");
let temp_arr;
for (let i = 0; i < ap_num; i++) {
    ap_ar.push(new AP());
}
for (let i = 0; i < ap_num; i++) {
    temp_arr = prompt((i + 1) + "번의 영외활동을 입력하시오");
    ap_ar[i].out_info = temp_arr.split('.');
}

maxDay = prompt("월의 마지막 날을 입력하시오");
no_ap = prompt("의경없는 날 입력하시오");

// ///////////////////////////////////////////////////////////////////////// //
function wstest(list, char) { //work_stack에 이미 해당 번호가 존재하는지 boolean
    for (let i = 0; i < list.length; i++) {
        if (list[i] == char) {
            return true;
        }
    }
    return false;
}
function pushStack(list, size) { //size를 parameter로!
    stack = [];
    alert(size);
    for (let i = 0; i < size; i++) {
        let temp = list.pop();
        if (stack.indexOf(temp) == -1) {
            stack.push(temp);
        } else {
            return stack;
        }
    }
}
function todayoutcheck(day) {
    for (var i = 0; i < ap_num; i++) {
        for (var j = 0; j < ap_ar[i].out_info.length; j++) {
            if (ap_ar[i].out_info[j] == day) {
                if (ap_ar[i].out_info[j + 1] == day + 1) { //외박 복귀인지
                    ap_ar[i].noReturn = true;
                } else {
                    ap_ar[i].return = true;
                }
            }
        }
    }
}
function todayReturn() {
    let cnt = 0;
    for (let i = 0; i < ap_num; i++) {
        if (ap_ar[i].return == true) {}
    }
}
//값 처리
let last_work = [];
for (let day = 1; day < maxDay; day++) {
    if (day == 1) { //매월 1일
        temp_arr = prompt("전날 근무일지를 입력하시오");
        temp_arr = temp_arr.split('.');
        //work18 check
        ap_ar[temp_arr[5] - 1].work18 = true;
        work_stack = pushStack(temp_arr, temp_arr.length); // 근무 스택 완료

    } else { //1일이 아닌 날 -> 전날의 근무일지 리스트를 가지고 있어야함

    }
    console.log(work_stack);
    // 당일 영외활동 검사
    let work_list = [];
    todayoutcheck(day);
    todayReturn();
    let flag=0;
    //근무일지 리스트 만들기
    while (1) {
        let temp_stack = work_stack;
        while (temp_stack.length != 0) { //size 오류 
            if(work_list.length==17){
                flag=1;
                break;
            }
            work_list.push(temp_stack.pop());
        }
        if(flag==1){
            break;
        }
        temp_arr=work_list;
        work_stack=pushStack(temp_arr,temp_arr.length);
        console.log(work_list);
    }
    console.log(work_list);
    break;
} // 날마다 영외활동 정보는 대원 클래스에 잘 적용 됨 
//근무일지 스택도 1일 기준 잘 적용됨 
//새로 정의한 배열 변수들의 .length가 제대로 동작 하지 않음을 고쳐야함
// while문 무한루프 조심 !