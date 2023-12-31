var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
// Form submit event
form.addEventListener("submit", addItem);

// Delete Event
itemList.addEventListener("click", removeItem);

// Filter Event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem =
    document.getElementById("item1").value +
    document.getElementById("item2").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  var deleteBtn = document.createElement("button");

  // Add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // Append button to li
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an Array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

//Project Completed
