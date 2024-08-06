// lesson2.js - 条件语句和循环

// 1. 条件语句
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 2. 循环
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// 3. 数组循环
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number * 2);
});
