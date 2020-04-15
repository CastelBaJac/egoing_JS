
function AP(){
    this.work18=false;//18시 근무
    this.return=false; //복귀 예정
    this.out_info=[]; //영외활동 리스트
    this.noReturn=false;
}


// let ap_num;
// let ap_ar=new AP;
// let no_ap;
// let lastDay;
// let work_stack;
// // 값입력
// ap_num=prompt("총원 입력하시오");
// var temp_arr;
// for(var i=0;i<ap_num;i++){
//     temp_arr=prompt((i+1)+"번의 영외활동을 입력하시오");
//     ap_ar.out_info[i]=temp_arr.split('.');
// }
 lastDay=prompt("월의 마지막 날을 입력하시오");
// no_ap=prompt("의경없는 날 입력하시오");
function wstest(list,char){  //work_stack에 이미 해당 번호가 존재하는지 boolean
    for(var i=0;i<list.length;i++){
        if(list[i]==char){
            return true;
        }
    }
    return false;
}
function pushStack(list1,list2){

}

//값 처리
for(var i=1;i<lastDay;i++){
    if(i==1){
        temp_arr=prompt("전날 영외활동을 입력하시오");
        temp_arr=temp_arr.split('.');
    }

}