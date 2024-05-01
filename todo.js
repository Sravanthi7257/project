const text = document.querySelector(".text");
const button = document.querySelector(".button");
const list = document.querySelector(".list");
document.addEventListener("DOMContentLoaded",() => {
    const storedTodoList = JSON.parse(LocalStorage.getItem("todolist"));
 if (storedTodoList){
    storedTodoList.forEach((todo) => {
        addToDoDomList(todo);
    });
 };   
});
function addToDoDomList(todo){
    const div = document.createElement("div");
const li = document.createE

}