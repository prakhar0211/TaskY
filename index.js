const taskContainer = document.querySelector("#task_Container");
console.log(taskContainer);

const newCard = ({id,taskTitle,taskType,taskDescription,imageUrl}) =>
 `<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success rounded-pill"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger "><i class="fas fa-trash-alt"></i></button>
  </div>
  <img src=${imageUrl}
   class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="card-title">${taskTitle}</h5>
    <p class="card-text">${taskDescription}</p>
    <span class="badge bg-primary">${taskType}</span>
  </div>
  <div class="card-footer text-muted">
    <button type="button" class="btn btn-outline-primary rounded-pill float-end">Open Task</button>
  </div>
</div>
</div>`

const saveChanges = () => {
    const taskData ={
        id: `${Date.now()}`, //unique number for card id
        imageUrl:document.getElementById("imageUrl").value,
        taskTitle:document.getElementById("taskTitle").value,
        taskType:document.getElementById("taskType").value,
        taskDescription:document.getElementById("taskDescription").value,
    };

    const createNewCard = newCard(taskData);
    taskContainer.insertAdjacentHTML("beforeend",createNewCard);
};