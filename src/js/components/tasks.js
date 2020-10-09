//this function will create the card
function createTaskHTML({ description, id, endTime }) {
  return `<div id=${id} class="card-preview-container">
        <div class="top-bar blue-color"></div>
        <div class="notes-text-area">
          <h5 class="description bold-text">${description}</h5>
          <h2 class="description bold-text m-1" >Ends @ ${getHoursMin(
            endTime
          )}</h2>
        </div>
        
      </div>`;
}

function generateTaskList(tasks) {
  let tasksHTML = [];
  for (const task of tasks) {
    console.log(task);
    tasksHTML.push(createTaskHTML(task));
  }
  return tasksHTML.join(" ");
}

function getHoursMin(time) {
  time = new Date(time);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return `${hours}:${minutes}`;
}
module.exports = {
  generateTaskList,
  createTaskHTML,
};
