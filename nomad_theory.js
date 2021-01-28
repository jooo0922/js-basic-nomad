'use strict';

// 1.8 Data Types on JS

// String 
const string = 'Nicolas';
console.log(string);

//Boolean
const boolean = true;
console.log(boolean);

// Number
const number = 234234;
console.log(number);

// Float
const float = 2.34234;
console.log(float);

// 1.9 Organizing Data with Arrays

// [] = Array를 의미함
// Array에 변수 something을 넣는 것도 가능함
const something = 'Something'
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 54, true, 'stuff', 4.5, something];
console.log(daysOfWeek);

// 'Array에 세 번째로 저장된 데이터를 알고 싶어'라는 뜻...
// 컴퓨터는 0부터 카운팅하므로, 0, 1, 2 순으로 카운팅할 때 세 번째인 2로 작성해야 세 번째 데이터로 알아들음
console.log(daysOfWeek[2]); 

// 1.9 Organizing Data with Objects

// Array는 순서만 알아도 데이터를 찾을 수 있음
// 그러나, 개인정보처럼 이름, 나이, 지역 등... 이런 건 순서로 정렬할 수 없음
// Object를 쓰면 내가 원하는 방식으로 데이터를 정렬할 수 있음 
// Object는 실제 객체를 만드는 것
// 내가 저장하고 싶은 data에 lable을 줄 수 있는 것
// {} = Object를 의미함
const nicoInfo = {
    name: "Nico",
    age: 33,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name: "Kimchi", 
            fatty: "false"
        }, 
        {
            name: "Cheese burger", 
            fatty: "true"
        }
    ]
} 
// Object의 값에 Array를 넣을 수 있고, Array안에 Object들을 나열할 수도 있음

// Rule of JS
// Comma를 절대로 빼먹지 말 것
// "" 또는 '' 를 빼먹지 말 것
// console.log에서 에러를 잘 읽을 것. 에러메시지를 잘 읽을 줄 알면 에러를 해결할 수 있음
console.log(nicoInfo);

// Object안에 저장된 데이터에 접근하는 방법
console.log(nicoInfo.favFood[0].fatty); 

// nicoInfo에서도 gender라는 lable을 붙인 데이터에 접근함
console.log(nicoInfo.gender);

// nicoInfo안에 값은 바꿀 수 있지만, nicoInfo = true 처럼 그 자체의 값을 바꿀수는 없음
nicoInfo.gender = "Female"
console.log(nicoInfo.gender);