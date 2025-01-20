/*

//String , Number, Boolean, Object, Array .
//String - ตัวอักษร

let first_name ='John';  // สามารถเปลี่ยนค่าได้
const idcard = '110370'; // ไม่สามารถเปลี่ยนค่าได้
//number - ตัวเลข
let age = 30;
let height = 180.5;

//Boolean - ค่าที่เป็นจริงหรือเท็จ
let isSingle = true;

first_name = 'Jane';
console.log('Name:', first_name, 'Age:', age, );//    



/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ
==  เท่ากับ
!=  ไม่เท่ากับ
>  มากกว่า
<  น้อยกว่า
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ
*/



let number1 = 5
let number2 = 5

let result = number1 >= number2;
console.log('new number', result);

//if-else condition

if(number1 != number2){
    console.log('this is if');
} else if (number1 == number2) {
    console.log('this is else if');
} 
else {
    console.log('this is else');
}

/*
Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
*/

/*
let score = prompt('Enter your score: ');
console.log('you have score', score);

if (score >= 80){ //false
    console.log('Grade A');
} else if (score >= 70){ //false
    console.log('Grade B');
} else if (score >= 60){ //true     
    console.log('Grade C');
} else if (score >= 50){
    console.log('Grade D');
} else {
    console.log('Grade F');
}
*/

/*
&& และ
|| หรือ
!  นิเสธ
! not หรือ ไม่
*/

/*
let number1 = 5
let number2 = 8
// true && false = true
let condition = !(number1 >= 3 || number2 >= 10);
console.log('result of condition ', condition);

let age = 30;
let gender = 'male'

// true && true = true
if (age >= 20 && gender == 'male'){
    console.log('You are male adult');
}
*/

/*
let number = 20
if(!(number % 2 == 0)){
    console.log('เลขคู่');
}
*/

/*
while
for
*/

/*
let counter = 0;

console.log('while');
while(counter < 10){
    console.log("Hello World");
    counter = counter + 1;
}

for (let counter = 0; counter < 10; counter = counter + 1){
    console.log('Hello World');
}


array
*/

/*
let age1 = 18;
let age2 = 19;
let age3 = 20;
console.log(age1, age2, age3);
let ages = [18, 19, 20];
console.log('ages is', ages[2]);
console.log('ages is', ages);

//i แทนที่
ages = [21, 22];
console.log('new ages is', ages);

//2 ต่อ array
ages.push(23);
console.log('ages list', ages);

pop = ลบตัวสุดท้าย
ages.pop();
console.log('ages list', ages);
*/

/*

let ages = [18, 13, 20];
console.log('ages is', ages);
ages.sort();
console.log('ages is', ages);

let name_list = ['John', 'Bob', 'Alice'];
console.log('name list', name_list);
name_list.push('David');
console.log('name list', name_list.length);

for (let index = 0; index < name_list.length; index++){
    console.log('for name_list is ', name_list[index]);
}

*/

/*
Object
*/
/*
let student = [{
    age: 20,
    name: 'John',
    grade: 'A'
},{
    age: 21,
    name: 'Bob',
    grade: 'B'
}];

student.pop();

console.log(student);
for (let index = 0; index < student.length; index++){
    console.log('student number', index +1);
    console.log(student[index].name);
    console.log(student[index].age);
    console.log(student[index].grade);
}

*/

/*
Object + array 
*/

/*
let scores1 = 50
let scores2 = 60
let grade = ''
// ประกาศฟังก์ชัน ชื่อ calculateGrade รับค่า scores เป็น parameter
function calculateGrade(scores){
    if (scores >= 80){
        grade = 'A'
    } else if (scores >= 70){
        grade = 'B'
    } else if (scores >= 60){
        grade = 'C'
    } else if (scores >= 50){
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade;
}

//arrow function
let calculateGrade = (scores) => {
    if (scores >= 80){
        grade = 'A'
    } else if (scores >= 70){
        grade = 'B'
    } else if (scores >= 60){
        grade = 'C'
    } else if (scores >= 50){
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade;
}

// เรียกใช้ฟังก์ชัน calculateGrade โดยส่งค่า scores1 และ scores2 เข้าไป
let grade1 = calculateGrade(scores1);
let grade2 = calculateGrade(scores2);

console.log('Grade1 is', grade1);
console.log('Grade2 is', grade2);

*/

/*
array
*/


/*
for(let index = 0; index < scores.length; index++){
    console.log(scores[index]);
}
/*
score[0] = score [0] *2;
*/
/*
scores=scores.map((s) => {
    return s * 2;
})

scores.forEach((s) => {
    console.log('score',s);
});
*/

/*
let scores = [10, 20, 30, 40];

for (let index = 0; index < scores.length; index++){
    console.log('score', scores[index]);
}

let newScore = scores.filter((s) => {
    return s >= 30;
});

newScore.forEach((ns) => {
    console.log('newScore', ns);
});
*/

/*
Object function
*/

/*
let students = [
    {   name: 'John',
        age: 10,
        grade : 'A'
    },{
        name: 'Bob',
        age: 20,
        grade : 'B'
    },
]
let student = students.find((s) =>{
    if (s.name == 'John'){
        return true;
    }
});

let doubleScore = student.map((s) => {
    score = s.score*2;
    return s
});

console.log('student',student);
console.log('doublescore',doubleScore);
*/