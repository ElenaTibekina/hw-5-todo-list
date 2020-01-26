function createItem() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  div.classList.add("list-item");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "item";
  checkbox.id = "item-1";

  var label = document.createElement("label");
  var item = document.createElement("span");
  item.textContent = "item 1";

  var deadline = document.createElement("img");
  deadline.src = "img/bell-svg.svg";
  deadline.alt = "deadline";
  deadline.title = "deadline";

  var deleteItem = document.createElement("span");
  deleteItem.classList.add("list__item-delete");
  deleteItem.title = "delete item";
  deleteItem.textContent = "&times;";

  //   <li>
  //     <div class='list__item' title='mark as completed'>
  //       <input type='checkbox' name='item' id='item-1' />
  //       <label for='item-1'>
  //         <span>item 1</span>
  //       </label>
  //       <img src='img/bell-svg.svg' alt='reminder' title='deadline' />
  //       <span class='list__item-delete' title='delete item'>
  //         &times;
  //       </span>
  //     </div>
  //   </li>;
  return deleteItem;
}

console.log(createItem());
