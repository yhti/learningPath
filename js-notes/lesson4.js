// lesson4.js - 表单处理和异步请求

// 1. 表单处理
document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('myForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // 防止表单提交
        let formData = new FormData(form);
        let name = formData.get('name');
        let email = formData.get('email');
        console.log(`Name: ${name}, Email: ${email}`);
    });

    // 2. 异步请求
    document.getElementById('fetchData').addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById('data').textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
