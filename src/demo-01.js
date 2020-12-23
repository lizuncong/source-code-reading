// 题目1
class A {
    constructor(){
        this.name = 'aaa'
    }
    sayName(){
        console.log('this.name.' + this.name)
    }
}

let a1 = new A;
let a2 = new A;

a1.sayName === a2.sayName // 输出啥，为啥？class和普通构造函数的区别？

// 题目2
function person(n){
    this.name = 'mike'
    if(typeof n !== 'number') return;
    if(n > 10){
        return '不能大于10'
    } else if(n > 5) {
        return { input: n }
    }
}
let p1 = person(6);
let p2 = new person('10')
let p3 = new person(11)
let p4 = new person(8)
let p5 = new person(4)



// 题目3
// function person(name, age){
//     this.name = name
//     this.age = age;
//     if(age > 40){
//         this.child = new this.constructor;
//     }
// }
//
// let p1 = new person('mike', 50)
// let p2 = new person('john', 20)


// 题目4 哪种写法更节省内存，为啥
// function person(name){
//     this.name = name;
//     this.sayName =  function(){
//         console.log(this.name)
//     }
// }
// let p1 = new person('mike');
//
// function sayName(){
//     console.log(this.name)
// }
// function person2(name){
//     this.name = name;
//     this.sayName = sayName;
// }
// let p2 = new person2('john')
