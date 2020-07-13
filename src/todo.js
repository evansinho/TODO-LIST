import { currentList } from './project';

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