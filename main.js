console.log("----------Exercise1----------");
for (let i = 0; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("----------Exercise2----------");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}
console.log("----------Exercise3----------");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log("----------Exersise4----------");
let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);

for (let i = 3; i <= 10; i++) {
    let nextNum = num1 + num2; 
    console.log(nextNum);
    num1 = num2; 
    num2 = nextNum;
}
console.log("----------Exercise5----------");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}
console.log("----------Exercise6----------");
for (let i = 1; i <= 3; i++) { 
    for (let j = 1; j <= 10; j++){ 
        console.log(i+"x"+j+"="+(i*j));
    }
    console.log('----------------'); 
}








