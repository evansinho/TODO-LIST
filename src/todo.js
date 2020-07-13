// eslint-disable-next-line import/no-cycle
import { currentList, currentListName, showProjects } from './project';

export class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checkList = false;
  }
}

export const addTodo = (todo) => {
  currentList.push(todo);
};

export const updateTodo = (todo, id) => {
  currentList[id] = todo;
};

export const deleteTodo = (target) => {
  const { id } = target.dataset;
  currentList.splice(id, 1);
};

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
