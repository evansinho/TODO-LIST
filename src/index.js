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

const addTodo = (todo) => {
  const todoCtn = document.querySelector('#todo-list');
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
          <i class="fa fa-trash ml-auto" id="delete"></i>
        </div>
      </div>
    </div>
  `;
  todoCtn.innerHTML += cardHtml;
};

const clearFields = () => {
  document.querySelector('#todo-title').value = '';
  document.querySelector('#todo-desc').value = '';
  document.querySelector('#todo-date').value = '';
  document.querySelector('#todo-priority').value = '';
};

const deleteTodo = (target) => {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#todo-title').value;
  const desc = document.querySelector('#todo-desc').value;
  const date = document.querySelector('#todo-date').value;
  const priority = document.querySelector('#todo-priority').value;
  // instantiate the todo class
  const todo = new Todo(title, desc, date, priority);
  addTodo(todo);
  clearFields();
});

document.getElementById('delete').addEventListener('cick', (e) => {
  deleteTodo(e.target);
  e.preventDefault();
});

// document.querySelector('#edit').addEventListener('cick', () => {});