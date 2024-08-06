// lesson3.js - 事件处理和 DOM 操作

// 1. 获取元素并更改内容
document.addEventListener('DOMContentLoaded', () => {
    let heading = document.getElementById('heading');
    heading.textContent = "Hello, JavaScript!";
    
    // 2. 事件处理
    let button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        let paragraph = document.getElementById('myParagraph');
        paragraph.textContent = "Button was clicked!";
    });
});
