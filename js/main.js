let input = document.querySelector(".input");
let list = document.querySelector(".list");
input.onsubmit = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    list.innerHTML += `
    <li>
    <div class="check" onclick="addclass(this)">
    <input  type="checkbox">
    <h3 >${elements[0].value}</h3>
    </div>
    </li>
    `
    elements[0].value = "";
}
const addclass=(e)=>e.classList.toggle("delete");
