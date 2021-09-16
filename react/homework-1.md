### Clicker

---

#### 1. Реализуйте компонент кликер:

- создайте компонент следующего вида:
- ![Clicker](./clicker.png)
- нажимая на кнопку `+` счётчик увеличивается на 1;
- нажимая на кнопку `-` счётчик уменьшается на 1;
- нажимая кнопку `сброс` счётчик возвращается в начальное значение `0`;

Сделать по образу и подобию как мы делали на занятии, только дизайн должен быть таким же как на картинке и кнопки не должны исчезать=).

---

Финальное решение должно выглядеть так:
![Final example](./homework-1.gif)

---

#### 2. Компонент для отображения времени: 
#####  Шаги по выполнению

- создать компонент, которые показывает статическое [время](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
- ![time](./time.png)
- создать state в constructor, чтобы строка времени была динамической (например `this.state = { time:  new Date().toLocaleTimeString() };`)
- в методе жизненного цикла componentDidMount сделать обновления состояние времени через 1 секунду (setInterval + setState)

---

Финальное решение должно выглядеть так:
- ![Final example](./time.gif)

---


---

#### 3. Компонент таймер: 
#####  Шаги по выполнению



---

Финальное решение должно выглядеть так:
- ![Final example](./timer.gif)

---

[Общие шаги по выполнению д/з](../homework-guidelines.md)

### Читать

[Состояние компонента](https://ru.reactjs.org/docs/hooks-state.html)
[Обработка событий](https://ru.reactjs.org/docs/hooks-state.html)
[Списки](https://ru.reactjs.org/docs/lists-and-keys.html)
