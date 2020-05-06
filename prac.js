const manInfo = {
    name: "김형찬",
    age: 23,
    genderMan: true,
    city: "Seoul" ,
    favMovie : ["a","b","c","d"] ,
    favFood : [{name: "a" , fatty : false} , {name : "b" , fatty : false}]

}// 클래스 
let humInfo = function(name,age){
    this.name = name;
    this.age= age;
    this.method = function(){
        console.log(`hello ${this.name} have ${this.age}`);
    }
}//클래스 생성자  ->클래스 생성자 != 클래스 
//클래스 생성자의 메소드는 클래스를 생성하기 전에 접근 불가능
let man1 = new humInfo("rla",11);
//클래스 생성을 해야 함수에 접근 가능
man1.method();

console.log(man1);

const calculator = function(name){
    this.name = name;
    this.plus = function(a,b){
        console.log(a+b);
    }
}
// const calculator = {
//     plus : function(a,b){
//         console.log(a+b);
//     }
// }
const x = new calculator("rrr");
console.log(x);
x.plus(5,5);

const title= document.getElementById("title");
title.innerHTML="hello JS";
console.log(title);