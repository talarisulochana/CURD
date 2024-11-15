function addTask() {

    let inputData = document.getElementById("EnterData");
    let inputDataValue = inputData.value.trim()

    let allTasksContainer = document.querySelector("#tasks")

    let liTag = document.createElement("li");

    liTag.innerHTML += `
    ${inputDataValue}
     <button class="edit">Edit</button>
     <button class="delete">Delete</button> `

    liTag.style.listStyleType = "none"


    allTasksContainer.appendChild(liTag)
    inputData.value = ""

    let editBtn = liTag.querySelector(".edit")
    editBtn.style.backgroundColor = "green"

    let dlteBtn = liTag.querySelector(".delete")
    dlteBtn.style.backgroundColor = "gray"


    dlteBtn.addEventListener("click", () => {
        deleteTask(liTag)
        console.log("df is called");
    })


    editBtn.addEventListener("click", () => {
        EditTask(liTag)
    })
}

function deleteTask(liTag) {
    let a = confirm("are you sure wanna delete the task")
    if (a) {
        liTag.remove()
    }
}


function EditTask(item) {
    let x = prompt("enter the data", item.firstChild.textContent)
    if (x !== null && x.trim() !== "") {
        item.firstChild.textContent = x;
    }
}