/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/no-cycle
import { render } from './todo';

const projects = {};
projects.default = [];
export let currentList = projects.default;
export let currentListName = 'default';

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

export const showProjects = () => {
  const projectListUl = document.getElementById('project-list');
  projectListUl.innerHTML = '';
  for (const key in projects) {
    if (key === currentListName) {
      projectListUl.innerHTML += `<li class="list-group-item active" data-list="${key}"> ${key}</li>`;
    } else { projectListUl.innerHTML += `<a href=""><li class="list-group-item" data-list="${key}"> ${key}</li></a>`; }
  }
};
