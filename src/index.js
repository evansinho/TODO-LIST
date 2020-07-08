// eslint-disable-next-line max-classes-per-file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { fetchLibrary, saveLibrary } from './fetchLibrary';

export const todoList = [];

export class Project {
  constructor(name) {
    this.name = name;
  }
}

export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checkList = false;
  }
}

export const render = () => {
  const todoCtn = document.querySelector('#todo-list'); // just appdend it
  todoCtn.innerHTML = '';
  todoList.map((todo) => {
    const cardHtml = `
    <div class="col mb-4">
      <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${todo.title}</h5>
          <p class="card-text">${todo.description}</p>
          <span class="badge badge-pill badge-warning">${todo.priority}</span>
        </div>
        <div class="card-footer">
          <small class="text-muted">${todo.dueDate}</small>
          <i class="fa fa-edit ml-auto" id="edit"></i>
          <a href=""><i class="fa fa-trash ml-auto" id="delete"></i></a>
        </div>
      </div>
    </div>
  `;
    todoCtn.innerHTML += cardHtml;
    return null;
  });
};

export const addTodo = (todo) => {
  todoList.push(todo);
};

const clearFields = () => {
  document.querySelector('#todo-title').value = '';
  document.querySelector('#todo-desc').value = '';
  document.querySelector('#todo-date').value = '';
  document.querySelector('#todo-priority').value = '';
};

const deleteTodo = (target) => {
  target.parentElement.parentElement.parentElement.parentElement.remove();
};

document.querySelector('#form').addEventListener('submit', (e) => {
  // e.preventDefault();
  const title = document.querySelector('#todo-title').value;
  const desc = document.querySelector('#todo-desc').value;
  const date = document.querySelector('#todo-date').value;
  const priority = document.querySelector('#todo-priority').value;
  // instantiate the todo class
  const todo = new Todo(title, desc, date, priority);
  addTodo(todo);
  clearFields();
  render();
  $('#exampleModal').modal('toggle');
  // document.getElementById('#exampleModal').modal('hide');
});

document.getElementById('todo-list').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'delete') {
    deleteTodo(e.target);
    render();
  }
});

// document.querySelector('#edit').addEventListener('cick', () => {});

const todo = new Todo('test1', 'desc', '2021-08-08', 'low');
addTodo(todo);
render();
// window.addEventListener('load', renderInit);

window.addEventListener('load', fetchLibrary);
window.addEventListener('unload', saveLibrary);