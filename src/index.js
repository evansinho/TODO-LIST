// eslint-disable-next-line max-classes-per-file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

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

// const todoBtn = document.querySelector('#add-todo');

// todoBtn.addEventListener('click', (e) => {
//   e.preventDefault();
// });