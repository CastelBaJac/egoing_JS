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
let startDay;
let work_stack = [];
// 값입력
ap_num = 11;
// prompt("총원 입력하시오");
let temp_arr;
for (let i = 0; i < ap_num; i++) { //class 배열 만들기
    ap_ar.push(new AP());
    ap_ar[0].work18 = false; //18시 근무
    ap_ar[0].return = false; //복귀 예정
    ap_ar[0].out_info = []; //영외활동 리스트
    ap_ar[0].noReturn = false;
}
// for (let i = 0; i < ap_num; i++) {     temp_arr = prompt((i + 1) + "번의 영외활동을
// 입력하시오");     ap_ar[i].out_info = temp_arr.split('.'); }
ap_ar[0].out_info = [
    3,
    4,
    5,
    12,
    20,
    26
];
ap_ar[1].out_info = [
    2,
    11,
    18,
    24,
    25,
    26,
    27,
    28,
    29,
    30
];
ap_ar[2].out_info = [5, 13, 18, 19, 25];
ap_ar[3].out_info = [
    6,
    7,
    8,
    9,
    17,
    25,
    30
];
ap_ar[4].out_info = [4, 12, 19, 26];
ap_ar[5].out_info = [
    3,
    6,
    13,
    18,
    19,
    20,
    21,
    22,
    23
];
ap_ar[6].out_info = [
    8,
    9,
    10,
    16,
    23,
    28
];
ap_ar[7].out_info = [
    1,
    8,
    9,
    10,
    11,
    20,
    27
];
ap_ar[8].out_info = [
    7,
    14,
    17,
    27,
    28,
    29,
    30
];
ap_ar[9].out_info = [
    1,
    2,
    3,
    7,
    16,
    23
];
ap_ar[10].out_info = [
    2,
    10,
    11,
    12,
    13,
    21,
    29
];

maxDay = 30;
startDay = 1;
//  prompt("월의 마지막 날을 입력하시오");
no_ap = 22;
// prompt("의경없는 날 입력하시오");
// ///////////////////////////////////////////////////////////////
function wstest(list, char) { //work_stack에 이미 해당 번호가 존재하는지 boolean
    for (let i = 0; i < list.length; i++) {
        if (list[i] == char) {
            return true;
        }
    }
    return false;
}
function pushStack(list, size) { //size를 parameter로! parameter로 넘긴 배열도 참조 된다-> 주의
    let tstack = [];
    let a = list.slice();
    for (let i = 0; i < size; i++) {
        let temp = a.pop();

        if (tstack.indexOf(temp) == -1 && temp !== undefined && temp !== '-') {
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
                if (ap_ar[i].out_info[j + 1] == (day + 1)) { //외박 복귀인지
                    ap_ar[i].noReturn = true;
                } else {
                    ap_ar[i].return = true;
                    if (ap_ar[i].noReturn === true) {
                        ap_ar[i].noReturn = false;
                    }
                }
            }
        }
    }
    for (var i = 0; i < ap_num; i++) {
        if (ap_ar[i].return === true) {
            console.log('오늘 영외활동(외출) 근무 열외자 :' + (
                i + 1
            ));
        } else if (ap_ar[i].noReturn === true) {
            console.log('오늘 영외활동(외박) 근무 열외자 :' + (
                i + 1
            ));
        } else {
            continue;
        }
    }
}
//값 처리
let last_work = [];
let work_list = [];
for (let day = startDay; day <= maxDay; day++) {
    if (day == startDay) { //매월 1일
        temp_arr = '9.2.3.8.5.10.11.4.6.7.1.9.2.3.8.5.10';
        // prompt("전날 근무일지를 입력하시오");
        temp_arr = temp_arr.split('.');

    } else { //1일이 아닌 날 -> 전날의 근무일지 리스트를 가지고 있어야함
        temp_arr = work_list.slice();
    }
    //work18 check
    for (var x = 0; x < ap_num; x++) {
        ap_ar[x].work18 = false;
    }
    ap_ar[temp_arr[5] - 1].work18 = true;
    console.log('전날 18시 근무자 :' + temp_arr[5]);
    work_stack = pushStack(temp_arr, temp_arr.length); // 근무 스택 완료
    // 당일 영외활동 검사
    work_list = [];
    let temp_stack;
    todayoutcheck(day);
    //근무일지 리스트 만들기
    temp_stack = work_stack.slice(); //error 는 발생하지만 정상 작동이 된다.
    // 해당 스택에 pop을 하면서 push도 함께 진행
    if (day == no_ap) { //no ap
        for (let wl_cnt = 0; wl_cnt < 5; wl_cnt++) {
            work_list[wl_cnt] = '-';
        }
        for (let wl_cnt = 5; wl_cnt < 17; wl_cnt++) {
            let temp = temp_stack.pop();
            if (temp === undefined) { // stack 비었을때
                temp_stack = pushStack(work_list, work_list.length);
                temp = temp_stack.pop();
            }
            if (wl_cnt < 7) {
                while (ap_ar[temp - 1].return === true || ap_ar[temp - 1].noReturn === true) { // 당일 외출자 근무열외
                    temp = temp_stack.pop();
                    if (temp === undefined) {
                        temp_stack = pushStack(work_list, work_list.length);
                        temp = temp_stack.pop();
                    }
                }
                if (wl_cnt < 5) { //10~16시 근무
                    work_list[wl_cnt] = temp;
                } else {
                    work_list[wl_cnt] = temp;
                }
            } else { // 나머지 새벽 근무 ~06시
                while (ap_ar[temp - 1].noReturn === true) { // 당일 외박자 근무열외
                    temp = temp_stack.pop();
                    if (temp === undefined) {
                        temp_stack = pushStack(work_list, work_list.length);
                        temp = temp_stack.pop();
                    }
                }
                for (let ap_cnt = 0; ap_cnt < ap_num; ap_cnt++) { //복귀자
                    if (ap_ar[ap_cnt].return === true) {
                        work_list[wl_cnt] = ap_cnt + 1;
                        wl_cnt++;
                        ap_ar[ap_cnt].return = false;
                        let idx = temp_stack.indexOf(String(ap_cnt + 1));
                        if (idx > -1) 
                            temp_stack.splice(idx, 1);
                        if (temp == ap_cnt + 1) {
                            temp = temp_stack.pop();
                            if (temp === undefined) {
                                temp_stack = pushStack(work_list, work_list.length);
                                temp = temp_stack.pop();
                            }
                        }
                    }
                }
                work_list[wl_cnt] = temp;
            }
        }
    } else { // yes ap
        for (let wl_cnt = 0; wl_cnt < 17; wl_cnt++) {
            let temp = temp_stack.pop();
            if (temp === undefined) { // stack 비었을때
                temp_stack = pushStack(work_list, work_list.length);
                temp = temp_stack.pop();
            }
            if (wl_cnt < 7) {
                while (ap_ar[temp - 1].return === true || ap_ar[temp - 1].noReturn === true) { // 당일 외출자 근무열외

                    temp = temp_stack.pop();
                    if (temp === undefined) {
                        temp_stack = pushStack(work_list, work_list.length);
                        temp = temp_stack.pop();
                    }
                }
                if (wl_cnt < 5) { //10~16시 근무
                    work_list[wl_cnt] = temp;
                } else if (wl_cnt == 5) { //18시 근무 중복 열외
                    work_list[wl_cnt] = temp;
                    if (ap_ar[temp - 1].work18 === true) {
                        // work_list[wl_cnt] = temp;
                        let changework = work_list[wl_cnt];
                        work_list[wl_cnt] = work_list[wl_cnt - 1];
                        work_list[wl_cnt - 1] = changework;
                        ap_ar[temp - 1].work18 = false;
                    }
                } else {
                    work_list[wl_cnt] = temp;
                }
            } else { // 나머지 새벽 근무 ~06시
                while (ap_ar[temp - 1].noReturn === true) { // 당일 외박자 근무열외
                    temp = temp_stack.pop();
                    if (temp === undefined) {
                        temp_stack = pushStack(work_list, work_list.length);
                        temp = temp_stack.pop();
                    }
                }
                for (let ap_cnt = 0; ap_cnt < ap_num; ap_cnt++) { //복귀자
                    if (ap_ar[ap_cnt].return === true) {
                        work_list[wl_cnt] = ap_cnt + 1;
                        wl_cnt++;
                        ap_ar[ap_cnt].return = false;
                        let idx = temp_stack.indexOf(String(ap_cnt + 1));
                        if (idx > -1) 
                            temp_stack.splice(idx, 1);
                        if (temp == ap_cnt + 1) {
                            temp = temp_stack.pop();
                            if (temp === undefined) {
                                temp_stack = pushStack(work_list, work_list.length);
                                temp = temp_stack.pop();
                            }
                        }
                    }
                }
                work_list[wl_cnt] = temp;
            }
        }
    }

    // for(let x =0;x<work_list.length;x++){     if(x==5){         console.log('18시
    // 근무' + work_list[x] + ' ');     }     else if(x==7){         console.log('22시
    // 근무' + work_list[x] + ' ');     }     else if(x==work_list.length-1){
    // console.log(work_list[x] + '\n');     }     else{ console.log(work_list[x] +
    // ' ');     } }
    console.log(day + '일 : ' + work_list + '\n');
}
// 7일 근무일지 부터 오류 발생 -> 복귀자 근무를 넣는 곳에서 에러 발생 예상 
//해결 필요 복귀자가 3명일때 발생 스택에 5와10만 들어가는 상황 확인 필요  (스택을 파악해보자)