// eslint-disable-next-line max-classes-per-file
class Project {
  constructor(name) {
    this.name = name;
  }
}

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checkList = false;
  }
}
