/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable import/no-mutable-exports */
import { render } from './index';

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
  // console.log(projects);
  const projectListUl = document.getElementById('project-list');
  projectListUl.innerHTML = '';
  for (const key in projects) {
    // console.log(`curr : ${currentListName} + k :${key}`);

    if (key === currentListName) {
      projectListUl.innerHTML += `<li class="list-group-item active" data-list="${key}"> ${key}</li>`;
    } else { projectListUl.innerHTML += `<a href=""><li class="list-group-item" data-list="${key}"> ${key}</li></a>`; }
  }
};
