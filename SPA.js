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
    ap_ar[0].work18 = false; //18시 근무
    ap_ar[0].return = false; //복귀 예정
    ap_ar[0].out_info = []; //영외활동 리스트
    ap_ar[0].noReturn = false;
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
function pushStack(list, size) { //size를 parameter로! parameter로 넘긴 배열도 참조 된다-> 주의
    let tstack = [];
    let a=list.slice();
    for (let i = 0; i < size; i++) {
        let temp = a.pop();

        if (tstack.indexOf(temp) == -1 & temp!==undefined) {
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
                    if(ap_ar[i].return===true){ap_ar[i].return=false;}
                }
            }
        }
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

    //근무일지 리스트 만들기
    temp_stack = work_stack.slice(); //error 는 발생하지만 정상 작동이 된다.
    // 해당 스택에 pop을 하면서 push도 함께 진행
    console.log(temp_stack)
    for(let wl_cnt=0;wl_cnt<17;wl_cnt++){
        let temp=temp_stack.pop();
        console.log(temp);
        if(temp===undefined){
            temp_stack=pushStack(work_list,work_list.length);
            temp=temp_stack.pop();
        }
        if(wl_cnt<7){
            if(ap_ar[temp-1].return === true || ap_ar[temp-1].noReturn === true){ // 당일 외출자 근무열외
                temp=temp_stack.pop();
                if(temp===undefined){
                    temp_stack=pushStack(work_list,work_list.length);
                    temp=temp_stack.pop();
                }
            } else if(wl_cnt<5){ //10~16시 근무
                work_list[wl_cnt]=temp;
            } else if(wl_cnt===5) {//18시 근무 중복 열외
                if(ap_ar[temp-1].work18===true){
                    work_list[wl_cnt]=temp;
                    let changework=work_list[wl_cnt];
                    work_list[wl_cnt]=work_list[wl_cnt-1];
                    work_list[wl_cnt-1]=changework;
                    ap_ar[temp-1].work18=false;
                }
            }else{
                work_list[wl_cnt]=temp;
            }
        }       
        else if(wl_cnt<10){ // 사고자 3명 기준 복귀자 근무 우선 배치 22~00시
            for(let ap_cnt =0;ap_cnt<ap_num;ap_cnt++){
                if(ap_ar[ap_cnt].return==true){
                    work_list[wl_cnt]=ap_cnt+1;
                    wl_cnt++;
                    ap_ar[ap_cnt].return=false;
                }
            }
        } else { // 나머지 새벽 근무 ~06시
            work_list[wl_cnt]=temp;
        }
    }
    // while (1) { //여기!!!!
        
    //     temp_stack = work_stack.slice(); //error 는 발생하지만 정상 작동이 된다.
        
    //     let test = 0;
    //     while (test < 3) { //size 오류 size 크기 고정
    //         if (work_list.length == 17) {
    //             flag = 1;
    //             break;
    //         }
    //         work_list.push(temp_stack.pop());
    //         test = test + 1;
    //     }
    //     if (flag == 1) {
    //         break;
    //     }
    //     //work_list o
    //     temp_arr = work_list.slice();
    //     work_stack = pushStack(temp_arr, temp_arr.length);
    //     console.log(work_stack);
    // }
    console.log(work_list);
    break;
} 
//for 문 안에서 조건문에 따른 혹은 영외활동에 따른 스택 pop과 push가 제대로 되지않는다
//다른 이슈는 모두 해결 -> 조건문 없이 그냥 근무일지 리스트 채우기는 정상적으로 작동 함