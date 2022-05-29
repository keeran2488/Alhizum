const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const dropdown_btn = document.getElementById('dropdown-btn')
const dropdown = document.getElementById('dropdown-menu-tap')
const dropdown_touch = document.getElementById('dropdown-touch')
const dropdown_menu_hover = document.getElementById('dropdown-menu-hover')


btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

dropdown_btn.addEventListener('click',()=>{
    dropdown.classList.toggle('show')
    // dropdown.classList.toggle('hidden')
})

dropdown_touch.addEventListener('click', ()=>{
  dropdown_menu_hover.classList.toggle('block')
  dropdown_menu_hover.classList.toggle('hidden')
  console.log('tapped on services on tablet')
})