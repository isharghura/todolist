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
}

document.addEventListener('keydown', (event)=>{
    var whichKey=event.key;
    if(whichKey==='Enter'){
        addTask();
    }
})