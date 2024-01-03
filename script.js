javascript
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
         // Получение значений полей формы
         const name = document.getElementById('name').value;
         const email = document.getElementById('email').value;
         const message = document.getElementById('message').value;
 
         // Создание объекта с данными формы
         const formData = {
             name: name,
             email: email,
             message: message
         };
 
         // Отправка данных на сервер с помощью Fetch API
         fetch('url_вашего_сервера', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(formData)
         })
         .then(response => response.json())
         .then(data => {
             // Обработка ответа от сервера
             console.log(data); // Пример вывода ответа в консоль
             alert('Сообщение успешно отправлено!');
         })
         .catch(error => {
             console.error('Ошибка:', error);
             alert('Произошла ошибка. Пожалуйста, попробуйте ещё раз.');
         });
     });
 });

 