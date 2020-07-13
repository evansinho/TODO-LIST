/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
// eslint-disable-next-line max-classes-per-file
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable import/no-mutable-exports */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {
  currentList, currentListName, showProjects, addProject, changeProject,
} from './project';

import {
  addTodo, updateTodo, deleteTodo, Todo,
} from './todo';

export const render = () => {
  const todoCtn = document.querySelector('#todo-list');
  todoCtn.innerHTML = '';
  currentList.map((todo, index) => {
    const cardHtml = `
    <div class="col mb-4" id=todo_${index}>
      <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${currentListName}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${todo.title}</h5>
          <p class="card-text">${todo.description}</p>
          <span class="badge badge-pill badge-warning">${todo.priority}</span>
        </div>
        <div class="card-footer">
          <small class="text-muted">${todo.dueDate}</small>
          <a href=""><i class="fa fa-edit ml-auto" data-id=${index} id="edit"></i></a>
          <a href=""><i class="fa fa-trash ml-auto" data-id=${index} id="delete"></i></a>
        </div>
      </div>
    </div>
  `;
    todoCtn.innerHTML += cardHtml;
    return null;
  });
  showProjects();
};

const clearFields = () => {
  document.querySelector('#todo-title').value = '';
  document.querySelector('#todo-desc').value = '';
  document.querySelector('#todo-date').value = '';
  document.querySelector('#todo-priority').value = '';
};

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#todo-title').value;
  const desc = document.querySelector('#todo-desc').value;
  const date = document.querySelector('#todo-date').value;
  const priority = document.querySelector('#todo-priority').value;
  const type = document.getElementById('modal-label').innerHTML;
  const todo = new Todo(title, desc, date, priority);
  if (type === 'Edit Task') {
    // edit the todo class

    const id = document.getElementById('modal-label').getAttribute('data-id');
    updateTodo(todo, id);
    document.getElementById('modal-label').innerHTML = 'Add New Task';
  } else {
    // instantiate the todo class
    addTodo(todo);
  }

  render();
  clearFields();
  document.getElementById('close').click();
});

document.getElementById('todo-list').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'delete') {
    deleteTodo(e.target);
    document.getElementById(`todo_${e.target.dataset.id}`).remove();
    render();
  }
  if (e.target.id === 'edit') {
    document.getElementById('open-modal').click();
    const { id } = e.target.dataset;
    document.querySelector('#todo-title').value = currentList[id].title;
    document.querySelector('#todo-desc').value = currentList[id].description;
    document.querySelector('#todo-date').value = currentList[id].dueDate;
    document.querySelector('#todo-priority').value = currentList[id].priority;
    // editTodo(e.target);
    document.getElementById('modal-label').innerHTML = 'Edit Task';
    document.getElementById('modal-label').setAttribute('data-id', id);
    render();
  }
});

document.querySelector('#project-list').addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(e.target.dataset.list);
  changeProject(e.target.dataset.list);
});

document.getElementById('add-project').addEventListener('click', (e) => {
  e.preventDefault();
  const projectName = document.getElementById('project-name').value;
  document.getElementById('project-name').value = '';
  addProject(projectName);

  render();
});

showProjects();