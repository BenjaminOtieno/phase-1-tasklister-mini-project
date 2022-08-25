document.addEventListener("DOMContentLoaded", () => {

  const inputField = document.getElementById("new-task-description");
  const formElement = document.querySelector("form");
  formElement.addEventListener('submit', (e) => {
    let newtask = inputField.value

    e.preventDefault();
    if (newtask.length === 0) {
      alert('Task description required!')
    } else {
      handleToDo(newtask);
    }
    formElement.reset()
  });
});


function css(element, style) {
  for (const property in style)
    element.style[property] = style[property];
}

function handleToDo(newtask) {
  let listItem = document.createElement("li");
  let btn = document.createElement('button')

  css(btn, {
    'color': 'red',
    'background': 'red',
    'color': '#ffffff',
    'font-size': '8px',
  });

  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  listItem.innerText = `${newtask}`;
  listItem.appendChild(btn)
  document.querySelector("#tasks").appendChild(listItem);
}

function handleDelete(e) {
  e.target.parentNode.remove()
}