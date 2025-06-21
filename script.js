let input = document.querySelector("#input");
let todoList = document.querySelector(".todo-list");

function addTask(){
    if(input.value.trim() === ""){
        alert("Kindly write something before submitting 😊!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `<span>${input.value}</span> <button class="delete">❌</button>`;
        todoList.appendChild(li);
        let deleteTask = li.querySelector(".delete");
        deleteTask.addEventListener("click", function(){
            todoList.removeChild(li);
        })
    }
    input.value = "";
}



