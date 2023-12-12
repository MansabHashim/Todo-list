const inputField = document.getElementById("inputbox");
const tasks = document.getElementById("list-container")

function AddTask(){
     if (inputField.value ===""){
        alert("Please enter a task");
     }
     else {
        let newTask = document.createElement("li");
        newTask.innerText = inputField.value;
        tasks.appendChild(newTask);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  
        newTask.appendChild(span);  
    }
    inputField.value= "";
    saveData();
}

tasks.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();

}else if (e.target.tagName === "SPAN"){
        let div = e.target.parentNode;
        div.remove();
        saveData();
}} );


function saveData(){
    localStorage.setItem("data", tasks.innerHTML);
}


function showTasks(){
    tasks.innerHTML = localStorage.getItem("data");
}
showTasks();

submitBtn.onclick = AddTask;