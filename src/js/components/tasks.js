//this function will create the card
function createTaskHTML({ description, id }) {
  return `<div id=${id} class="card-preview-container">
        <div class="top-bar"></div>
        <div class="notes-text-area">
          <h5 class="description bold-text">${description}</h5>
        </div>
      </div>`;
}

function generateTaskList(tasks) {
  let tasksHTML = [];
  for (const task of tasks) {
    tasksHTML.push(createTaskHTML(task));
  }
  return tasksHTML.join(" ");
}

module.exports = {
  generateTaskList,
  createTaskHTML,
};
