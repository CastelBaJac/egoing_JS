const manInfo = {
    name: "김형찬",
    age: 23,
    genderMan: true,
    city: "Seoul" ,
    favMovie : ["a","b","c","d"] ,
    favFood : [{name: "a" , fatty : false} , {name : "b" , fatty : false}]

}
let humInfo = function(name,age){
    this.name = name;
    this.age= age;
    this.method = function(){
        console.log(this.name + this.age);
    }
}
let man1 = new humInfo("rla",11);

man1.method();

console.log(man1);

// 클래스에 함수 넣기 !!