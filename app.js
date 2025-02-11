const list = document.querySelector('.list')


//--------------------------------------------------------------------

function addItem() {
  const itemText = prompt("What do you want to add?")
  const item = document.createElement("div")
  item.innerHTML = 
    `${itemText}<button class="btn delete-btn">X</button>`
  list.appendChild(item)
  findDeleteItem()// Нужно чтобы после создания нового элемента он учитывался в индексах на слушателях
}

function clearList(){
  list.innerHTML = ""
}


//---------------------------------------------------------------------



function deleteItem(event){
  event.target.parentElement.remove()
}

function findDeleteItem(){
  const deleteButtons = document.getElementsByClassName("delete-btn")
  for (let i = 0; i < deleteButtons.length; i++) {
    const deleteButton = deleteButtons[i];
    deleteButton.addEventListener("click", deleteItem)
  }
}

//=====================================================
let styleMode = localStorage.getItem('styleMode');
const themeBtn = document.querySelector('.theme-button')

const imgSun = document.querySelector('.img-sun');
const imgMoon = document.querySelector('.img-moon')

const addDarkStyle = function(){
  document.body.classList.add('darkstyle');
  localStorage.setItem('styleMode', 'dark');
}

const removeDarkStyle = function(){
  document.body.classList.remove('darkstyle');
  localStorage.setItem('styleMode', null);
}

themeBtn.addEventListener('click', () => {

  styleMode = localStorage.getItem('styleMode');

  if(styleMode !== 'dark'){
    addDarkStyle();
  } else {
    removeDarkStyle();
  }
})

if(styleMode === 'dark'){
  addDarkStyle();
} else {
  removeDarkStyle();
}