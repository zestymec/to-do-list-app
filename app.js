// alert("Ye app me nay umer aziz ne bnai hay!")
let listContainer = document.querySelector(".list-container");
let inputBox = document.querySelector(".input-box");
let addBtn = document.querySelector(".add-btn");

inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
addBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
     saveData();
});

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
         saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
         saveData();
    }

});
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
};
showData();


