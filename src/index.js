/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-unresolved */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {
  currentList, showProjects, addProject, changeProject,
} from './project';
import {
  addTodo, updateTodo, deleteTodo, render, Todo,
} from './todo';

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

document.getElementById('open-modal').addEventListener('click', (e) => {
  document.getElementById('todo-date').valueAsDate = new Date();
});
