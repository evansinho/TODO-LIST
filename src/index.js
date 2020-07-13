/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line max-classes-per-file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// import Project from './models/project';
import Todo from './models/todo';

const projects = {};
projects.default = [];
let currentList = projects.default;
let currentListName = 'default';

export const addProject = (name) => {
  projects[name] = [];
  currentList = projects[name];
  currentListName = name;
};

export const changeProject = (name) => {
  currentList = projects[name];
  currentListName = name;
  render();
};

const showProjects = () => {
  // console.log(projects);
  const projectListUl = document.getElementById('project-list');
  projectListUl.innerHTML = '';
  for (const key in projects) {
    console.log(`curr : ${currentListName} + k :${key}`);

    if (key === currentListName) {
      projectListUl.innerHTML += `<a><li class="list-group-item active" data-list="${key}"> ${key}</li></a>`;
    } else { projectListUl.innerHTML += `<a href=""><li class="list-group-item" data-list="${key}"> ${key}</li></a>`; }
  }
};

export const render = () => {
  const todoCtn = document.querySelector('#todo-list'); // just appdend it
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
          <i class="fa fa-edit ml-auto" id="edit"></i>
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

const addTodo = (todo) => {
  currentList.push(todo);
};

const clearFields = () => {
  document.querySelector('#todo-title').value = '';
  document.querySelector('#todo-desc').value = '';
  document.querySelector('#todo-date').value = '';
  document.querySelector('#todo-priority').value = '';
};

const deleteTodo = (target) => {
  const { id } = target.dataset;
  currentList.splice(id, 1);
  document.getElementById(`todo_${id}`).remove();
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
  render();
  clearFields();
  document.getElementById('close').click();
});

document.getElementById('todo-list').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'delete') {
    deleteTodo(e.target);
    render();
  }
});

document.querySelector('#project-list').addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target.dataset.list);
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