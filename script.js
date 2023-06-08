const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
    }
    else{
        let task=document.createElement("li");
        task.innerHTML=inputBox.value;
        listContainer.appendChild(task);
    }
    inputBox.value='';
}

document.addEventListener('keydown', (event)=>{
    var name=event.key;
    if(name==='Enter'){
        addTask();
    }
})