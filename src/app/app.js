window.onload = () => {
    let button = document.getElementById("submit");
    button.addEventListener("click", addtask);
}


function addtask() {
    let list = document.getElementById("mylist");
    let task = document.getElementById("task").value;
    let list_item = document.createElement("li");
    list_item.appendChild(document.createTextNode(task));
    list.appendChild(list_item);

    list_item.addEventListener("click", removetask);
}

function removetask(e) {
    e.target.parentElement.removeChild(e.target);
}