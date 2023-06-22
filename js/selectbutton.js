var selectionCounter = 0;

function cloneSelect() {
  if (selectionCounter >= 4) {
    alert("SOLO TENGO UNA MULA, NO PUEDO CON TANTO TRABAJO.");
    return;
  }

  var row = document.querySelector(".row");

  var selectContainer = document.createElement("div");
  selectContainer.classList.add("col-6", "selectContainer");

  var selectDiv = document.getElementById("selectProducto");
  var cloneSelectDiv = selectDiv.cloneNode(true);
  cloneSelectDiv.removeAttribute("id");

  var select = cloneSelectDiv.querySelector("select");
  var selectName = "nombreproducto"; // Asignar el mismo nombre a todos los clones
  select.removeAttribute("id");
  select.setAttribute("name", selectName);

  var labelSelect = cloneSelectDiv.querySelector("label");
  labelSelect.setAttribute("for", selectName);

  selectContainer.appendChild(cloneSelectDiv);
  row.appendChild(selectContainer);

  var inputContainer = document.createElement("div");
  inputContainer.classList.add("col-3", "inputContainer");

  var inputDiv = document.querySelector(".col-3");
  var cloneInputDiv = inputDiv.cloneNode(true);
  cloneInputDiv.removeAttribute("id");

  var input = cloneInputDiv.querySelector("input");
  var inputName = "cantidadproducto"; // Establecer el nombre como "cantidadproducto" para todos los clones
  input.removeAttribute("id");
  input.setAttribute("name", inputName);

  var labelInput = cloneInputDiv.querySelector("label");
  labelInput.setAttribute("for", inputName);

  inputContainer.appendChild(cloneInputDiv);
  row.appendChild(inputContainer);

  var deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerHTML = "Eliminar";
  deleteButton.onclick = function() {
    deleteClone(selectContainer, inputContainer, deleteButtonContainer);
  };

  var deleteButtonContainer = document.createElement("div");
  deleteButtonContainer.classList.add("col-3");
  deleteButtonContainer.appendChild(deleteButton);
  row.appendChild(deleteButtonContainer);

  selectionCounter++;

  if (selectionCounter >= 5) {
    alert("Has alcanzado el límite de clones.");
  }
}

function deleteClone(selectContainer, inputContainer, deleteButtonContainer) {
  selectContainer.parentNode.removeChild(selectContainer);
  inputContainer.parentNode.removeChild(inputContainer);
  deleteButtonContainer.parentNode.removeChild(deleteButtonContainer);
  selectionCounter--;
}
