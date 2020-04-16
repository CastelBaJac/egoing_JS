function AP() {
    this.work18 = false; //18시 근무
    this.return = false; //복귀 예정
    this.out_info = []; //영외활동 리스트
    this.noReturn = false;
}

let ap_num;
let ap_ar = new Array();
let no_ap;
let lastDay;
let work_stack;
// 값입력
let temp_arr;
for(let i=0;i<ap_num;i++)
{
    ap_ar.push(new AP());
}
// for (let i = 0; i < ap_num; i++) {
//     temp_arr = prompt((i + 1) + "번의 영외활동을 입력하시오");
//     ap_ar[i].out_info = temp_arr.split('.');
// }

lastDay = prompt("월의 마지막 날을 입력하시오");
no_ap = prompt("의경없는 날 입력하시오");

/////////////////////////////////////////////////////////////////////////////////
function wstest(list, char) { //work_stack에 이미 해당 번호가 존재하는지 boolean
    for (let i = 0; i < list.length; i++) {
        if (list[i] == char) {
            return true;
        }
    }
    return false;
}
function pushStack(list, stack) {
    stack = [];
    for (let i = 0; i < 17; i++) {
        let temp = list.pop();
        if (stack.indexOf(temp) == -1) {
            stack.push(temp);
        } else {
            return stack;
        }
    }
}

// ISSUE
function todayoutcheck(day){
    for(var i=0;i<ap_num;i++){
        for(var j=0;j<ap_ar[i].out_info.length;j++){
            if(ap_ar[i].out_info[j]==day){
                if(ap_ar[i].out_info[j+1]==day+1){ //외박이나 휴가인지?
                    ap_ar[i].noReturn=true;
                }else{
                    ap_ar[i].return=true;
                }
            }
        }
    }
}
//값 처리
for (let day = 1; day < lastDay; day++) {




    if (day == 1) {
        temp_arr = prompt("전날 근무일지를 입력하시오");
        temp_arr = temp_arr.split('.');
        //work18 check
        ap_ar[temp_arr[5] - 1].work18 = true;
        work_stack=pushStack(temp_arr,work_stack); // 근무 스택 입력 
    } else{

    }   


}//날짜에 따른 영외활동이 각 클래스에 잘 적용되는지 확인
// 날마다 저장되는지