var images = document.querySelectorAll('.images')
var left = document.getElementById('leftarrow')
var right = document.getElementById('rightarrow')
let current = 0;

var ax = document.getElementById('ax').addEventListener('click', () =>{
  document.getElementById('ul').classList.toggle('dext')
})

function clear(){
  images.forEach((img) => {
    img.style.display = 'none'
  });
}



function starting(){
  clear()
  images[0].style.display = 'block'
}


function prev(){
  clear()
  images[current -1].style.display = 'block'

  current --
}

function next(){
  clear()

  images[current +1].style.display = 'block'

  current ++
}


left.addEventListener('click', () => {
  if (current === 0) {
     current = images.length
  }

  prev()
})


right.addEventListener('click', () => {
  if (current === images.length -1) {
     current = 0
  }

  next()
})
starting()
// clear()