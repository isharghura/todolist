const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
    }
    else{
        let task=document.createElement("li");
        task.innerHTML=inputBox.value;
        listContainer.appendChild(task);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        task.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click", function(a){
    if(a.target.tagName==="LI"){
        a.target.classList.toggle("checked");
        saveData();
    }
    else if(a.target.tagName==="SPAN"){
        a.target.parentElement.remove();
        saveData();
    }
}, false)

document.addEventListener('keydown', (event)=>{
    var whichKey=event.key;
    if(whichKey==='Enter'){
        addTask();
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();