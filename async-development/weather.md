Вам необходимо создать приложение по поиску погоды:
- используйте бесплатное [REST API](https://openweathermap.org/api) для данных;
- для поиска по городам используйте следующий 
 url `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=58b6f7c78582bffab3936dac99c31b25&units=metric`
- Например для получение погоды по Минску [https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=58b6f7c78582bffab3936dac99c31b25&units=metric](https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=58b6f7c78582bffab3936dac99c31b25&units=metric)
- создайте `index.html` с разметкой:
    - html `input` & `label`
    - html `button`
    - `div` элементы для полученных данных
    - для построение красивого UI/UX используйте воображение 😃;
- создайте `style.css` файл со стилями (попробуйте сделать это красиво, применив свои навыки), include it into `index.html`
- создайте `index.js` файл со следующей логикой:
    - когда пользователь кликает кнопку `Поиск` или нажимает `Enter` на клавиатуре после ввода строки поиска, он должен получить таблицу с данными о погоде в выбранном городе;
    - подумайте о грамотной валидации полей;
    
## Итоговый пример, как может выглядеть ваше приложение (только поиск по городам, без страны):

![homework example](./homework-demo.gif)
