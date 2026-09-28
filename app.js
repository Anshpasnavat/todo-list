const Input = document.querySelector('#taskInput');
const Button = document.querySelector('#add');
const Container = document.querySelector('#container');

 
Button.addEventListener("click", function(){
    if(Input.value.trim() === ""){
        alert("Please enter a task");
    }else{
        const taskElement = document.createElement("div");
        taskElement.textContent = Input.value;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function(){
            taskElement.remove();
        });
        taskElement.appendChild(deleteButton);
        Container.appendChild(taskElement);
        Input.value = "";
    }
});

