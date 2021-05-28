### Posts

---

ВНИМАНИЕ!

Для всех заданий используем один реакт проект (вы можете использовать `create-react-app` или скопировать уже существующий реакт проект).
Каждое задание должно находиться в отдельной папке и разместить каждое задание в App.js разделив их тегом h1

`Например
App.js

<h1>Posts</h2>
<PostList/>
<h1>Images</h1>
<ImageList/>`

1. Выша задача реализовать список постов по данным API [{JSON} Placeholder](https://jsonplaceholder.typicode.com/).
   Шаги по реализации:

- компонент `Post` должен отображать название, текст поста и его автора:
- компонент `PostList` должен отображать список постов
- урл постов https://jsonplaceholder.typicode.com/posts

Список должен выглядеть так (без кнопки show more):
![](./posts.png)

**_Задание со звездочкой_**

Реализовать последовательный показ постов. Изначально показывать только 5 постов.
Добавить кнопку Show more, по нажатию на которую будет добавлятся еще 5. Как только показывать
больше нечего кнопку show more необходимо спрятать.

2. Выша задача реализовать список картинок по данным API [{JSON} Placeholder](https://jsonplaceholder.typicode.com/).
   Шаги по реализации:

- компонент `Image` должен отображать картинку и ее название
- компонент `ImageList` должен отображать список картинок
- урл картинок https://jsonplaceholder.typicode.com/photos
- по нажатию на картинку, картинка должна увеличиваться в размерах
- по нажатию на увеличенную картинку, картинка должна уменьшится в размерах

[Гайд по выпонению домашнего задания](../homework-guidelines.md)

### Читать

- [Состояние и жизненный цикл](https://ru.reactjs.org/docs/state-and-lifecycle.html)
- [Рендеринг в реакте](https://ru.reactjs.org/docs/rendering-elements.html)
- [Eще про рендерирнг реакта](https://bxnotes.ru/conspect/lib/react/react-notes/rendering/)
- [useEffect](https://ru.reactjs.org/docs/hooks-effect.html)
- [Краткий обзор хуков](https://ru.reactjs.org/docs/hooks-overview.html)
