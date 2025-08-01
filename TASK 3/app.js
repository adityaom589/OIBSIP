 const inputBox = document.getElementById("input-box");
 const lists = document.querySelector(".lists");
 const clearBtn = document.getElementById("clear-btn");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write your task");
    }
    else{
         let li = document.createElement("li");
         li.textContent = inputBox.value;
         lists.appendChild(li);
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span); 
        }
    inputBox.value = "";

    saveData();
}

// Press Enter to add task
inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});



// Mark complete / delete 
lists.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});


function saveData(){
    localStorage.setItem("data", lists.innerHTML);
}
function showTask(){
   
    const data = localStorage.getItem("data");
  if (data) {
    lists.innerHTML = data;
  }
}
showTask();

clearBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to clear all tasks?")) {
    lists.innerHTML = "";
    saveData();
    localStorage.removeItem("data"); 
  }
});
