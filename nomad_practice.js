'use strict';

// 2.0 Your first JS Function

const nicoInfo = {
    name: "Nico",
    age: 33,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "LOTR", "Oldboy"]
} 

// console.log 와 nicoInfo.favMovies 의 공통점
// console, nicoInfo는 Object
// log, favMovies는 Object 안에 있는 무언가 
// 이 경우 log는 console이라는 Object안에 있는 function(함수)
console.log(nicoInfo.favMovies);

// console 오브젝트를 console.log로 찍어본다면?
// console안에 엄청나게 많은 function이 들어있음. nicoInfo보다 훨씬 큰 오브젝트
// 이런 걸 보면 자바스크립트가 어떻게 생겼는지 알 수 있음
console.log(console);

// JS에서 함수를 만드는 방법
// 함수 = 한 조각의 코드. 많이많이 내가 가져다 쓸 수 있는!
// 어떤 걸 수행하려는 한 부분. 내가 원하는 만큼 쓸 수 있음

// JS에서 함수를 선언하는 기본 문법
// Your first Function!
/* 
function sayHello(){

} 

*/

//console.log 대신 앞에서 선언한 함수를 사용함.
/*
function sayHello(){
    console.log('Hello!');
} 

sayHello();
*/ 

// 함수를 커스터마이징하는 방법
// console.log("Hello")에서 ()안에 들어가는 걸 인자(argument)라고 함
// argument는 변수같은 거야. 우리가 주는 값을 저장할꺼야.
// 우리가 주는 argument를 가지고 가려면, sayHello() 함수를 만드는 시점에 ()에 변수명을 넣어줘야 함.
// potato같이 아무 말이나 넣어주면 됨. 우리가 주는 값을 받게 하기 위해!
// 이것이 외부에 있는 데이터를 읽는 함수를 만드는 방법. 함수에게 외부 데이터를 주는 방법.
function sayHello(potato){
    console.log('Hello!', potato);
} 

sayHello("Nicolas");

//2개의 인자를 넣고 싶으면, 함수를 만들때도 2개를 넣으면 됨
//console.log 함수는 argument를 무한하게 가질 수 있음
function sayHello2(name, age){
    console.log('Hi!', name, 'you have', age, 'years of age.');
}

sayHello2('Jooyeong', 26);

// 2.1 More Function Fun

// JS 에서는 "", '' 둘다 string을 의미함 
// 백틱(`)스트링은 "",''보다 훨씬 섹시한 스트링(콤마, +등을 줄줄이 안써도 됨)
function sayHello3(name, age){
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello3('Jooyeong', 26);

// return X
function sayHello4(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello4('Nicolas', 14);

console.log(greetNicolas);
// greetNicolas는 sayHello4 함수의 리턴 값이야
// greetNicolas는 sayHello4 의 실행된 결과 값이야
// 만약 greetNicolas가 undefined 상태가 되지 않길 원한다면 sayHello 함수에서 return(반환)해야 한다.
// 이렇게 하면 greetNicolas에 대입한 실행된 결과값을 콘솔에 보여주지 않으면서 
// console.log값 하나만 보여줌 

// 여러 함수 기능을 하나의 객체 안에 구현해야 할 때. 
// 마치 console 오브젝트안에 수많은 함수 중 하나인 log처럼...
const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    devide: function(a, b){
        return a / b;
    },
    powerOf: function(a, b){
        return a ** b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);