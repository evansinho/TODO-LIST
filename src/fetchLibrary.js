import {
  todoList, Todo, addTodo, render,
} from './index';

function populateStorage() {
  const bookOne = ['Budapeste', 'Chico Buarque de Holanda', 174, true];
  const bookTwo = [
    'Will my cat eat my eyeballs?',
    'Caitlin Doughty',
    222,
    true,
  ];
  const bookThree = ['The Time Machine', 'H.G. Wells', 118, true];
  localStorage.setItem('book1', JSON.stringify(bookOne));
  localStorage.setItem('book2', JSON.stringify(bookTwo));
  localStorage.setItem('book3', JSON.stringify(bookThree));
}

export function fetchLibrary() {
  // If it is the first time entering the site, creates a storage with predetermined books
  // if (!localStorage.getItem('todo1')) populateStorage();

  for (let i = 1; i <= localStorage.length; i++) {
    const bookArr = JSON.parse(localStorage.getItem(`todo${i}`));
    const todo = new Todo(bookArr[0], bookArr[1], bookArr[2], bookArr[3]);
    addTodo(todo);
    render();
  }
}

export function saveLibrary() {
  localStorage.clear();

  let i = 1;
  todoList.forEach((todo) => {
    localStorage.setItem(`todo${i}`, JSON.stringify(Object.values(todo)));
    i += 1;
  });
}
