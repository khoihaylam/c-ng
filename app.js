let name1 = document.getElementById("recipient-name");
console.log(name1);
let name2 = document.getElementById("recipient-name-1");
console.log(name2);
let messeger = document.getElementById("message-text");
console.log(messeger);
let table = document.querySelector(".table");
// console.log(table);
let tbody = document.querySelector("tbody");
let id = 1;
console.log(tbody);
function add() {
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <th scope="row">${id++}</th>
    <td>${name1.value}</td>
    <td>${messeger.value}</td>
    <td>${name2.value}</td>
    <td>
      <button type="button" class="btn btn-danger">xoa</button>
      <button type="button" class="btn btn-primary">cap nhat</button>
      
</td>`;
  tbody.appendChild(tr);
  name1.value = "";
  name2.value = "";
  messeger.value = "";
  xoa();
}
function xoa() {
  let tbody = document.querySelectorAll("tbody tr");
  console.log(tbody);
  for (let i = 0; i < tbody.length; i++) {
    let button1 = tbody[i].querySelector("button");
    // console.log(button1);
    button1.addEventListener("click", (e) => {
      let ok2 = e.target.parentElement.parentElement;
      console.log(ok2);
      ok2.remove();
    });
  }
}
