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
let work_stack = [];
// 값입력
ap_num = 3;
// prompt("총원 입력하시오");
let temp_arr;
for (let i = 0; i < ap_num; i++) { //class 배열 만들기
    ap_ar.push(new AP());
}
// for (let i = 0; i < ap_num; i++) {
//     temp_arr = prompt((i + 1) + "번의 영외활동을 입력하시오");
//     ap_ar[i].out_info = temp_arr.split('.');
// }
ap_ar[0].out_info = [1,5,6,8];
ap_ar[1].out_info = [2,3,4,5];
ap_ar[2].out_info = [1,2,3,9];


maxDay = 10;
//  prompt("월의 마지막 날을 입력하시오");
no_ap = 5;
// prompt("의경없는 날 입력하시오");
// /////////////////////////////////////////////////////////////////////
function wstest(list, char) { //work_stack에 이미 해당 번호가 존재하는지 boolean
    for (let i = 0; i < list.length; i++) {
        if (list[i] == char) {
            return true;
        }
    }
    return false;
}
function pushStack(list, size) { //size를 parameter로!
    let tstack = [];
    for (let i = 0; i < size; i++) {
        let temp = list.pop();

        if (tstack.indexOf(temp) == -1) {
            tstack.push(temp);
        } else {
            return tstack;
        }
    }
    return tstack;
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
        temp_arr = '1.2.3.1.2.3.1.2.3.1.2.3.1.2.3.1.2';
        // prompt("전날 근무일지를 입력하시오");
        temp_arr = temp_arr.split('.');
        //work18 check
        ap_ar[temp_arr[5] - 1].work18 = true;
        work_stack = pushStack(temp_arr, temp_arr.length); // 근무 스택 완료
    } else { //1일이 아닌 날 -> 전날의 근무일지 리스트를 가지고 있어야함

    }

    // 당일 영외활동 검사
    let work_list = [];
    let temp_stack;

    todayoutcheck(day);
    todayReturn();
    let flag = 0;
    //근무일지 리스트 만들기
    while (1) { //여기!!!!
        
        temp_stack = work_stack.slice(); //error 는 발생하지만 정상 작동이 된다.
        
        let test = 0;
        while (test < 3) { //size 오류 size 크기 고정
            if (work_list.length == 17) {
                flag = 1;
                break;
            }
            work_list.push(temp_stack.pop());
            test = test + 1;
        }
        if (flag == 1) {
            break;
        }
        //work_list o
        temp_arr = work_list.slice();
        work_stack = pushStack(temp_arr, temp_arr.length);
        console.log(work_stack);
    }
    console.log(work_list);
    break;
} // 영외활동 관련 없이 단순히 스택에 따른 근무일지 작성 완료
//단순 while문이 아니라 work_list를 for문을 이용해 각 근무일지 칸마다 조건문을 이용해 영외활동자가 들어 갔는지 , 18시 근무가 겹쳤는지 확인 필요
//for문 안에서 스택이 비었는지 확인 하고 비었다면 스택을 다시 채우고 시작하기
