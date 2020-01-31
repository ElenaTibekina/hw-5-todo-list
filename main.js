var data = {
  current: [],
  completed: []
};

var Todo = function(name, deadline) {
  this.name = name;
  this.completed = false;
  this.deadline = deadline;
  // id: completed
};
// console.log(data);

var removeSVG =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var completeSVG =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

document.getElementById("add").addEventListener("click", function() {
  var value = document.getElementById("add-item").value;
  if (value) {
    addItemTodo(value);
    document.getElementById("add-item").value = "";

    // data.current.push(value);
    // console.log(data);
  }
});

//removing item
function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

// function check if completed
function isCompleted() {
  var item = this.parentNode.parentNode;
  var parentUl = item.parentNode;
  var parentId = parentUl.id;
  var current = data.current;
  var value = item.innerText;

  var itemPosition = Array.from(parentUl.childNodes).indexOf(item);

  var targetUl =
    parentId === "todo"
      ? document.getElementById("completed")
      : document.getElementById("todo");

  parentUl.removeChild(item);
  targetUl.insertBefore(item, targetUl.childNodes[0]);

  if (parentId === "todo") {
    var todo = data.current.splice(itemPosition, 1)[0];
    todo.completed = true;
    data.completed.unshift(todo);
  } else {
    var todo = data.completed.splice(itemPosition, 1)[0];
    todo.completed = false;
    data.current.unshift(todo);
  }

  console.log(data.current);
  console.log(data.completed);
}
// console.log(isCompleted());

// Adding a new item
function addItemTodo(name, completed) {
  var list = completed
    ? document.getElementById("completed")
    : document.getElementById("todo");
  var item = document.createElement("li");

  item.classList.add("list__item");
  item.classList.add("list__item-current");

  var span = document.createElement("span");
  span.innerText = name;
  item.appendChild(span);

  var buttons = document.createElement("div");
  buttons.classList.add("buttons");

  //remove item button
  var remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerHTML = removeSVG;

  //complete item button
  var complete = document.createElement("button");
  complete.classList.add("complete");
  complete.innerHTML = completeSVG;

  // Add click event for completing the item
  complete.addEventListener("click", isCompleted);

  // add click event for removing item
  remove.addEventListener("click", removeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
  data.current.unshift(new Todo(name));
  console.log(data.current);
}
