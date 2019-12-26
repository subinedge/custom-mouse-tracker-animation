// now comes the king

let bd = document.body;
let pointer = document.getElementsByClassName('pointer');
console.log(pointer);

let sp = document.getElementsByClassName('split');

// if pointer is in the body of the window, then mousemove event listener will trigger

function showPointer(e) {
  // track mouse positions, getX Y co-ordinates
  let x = e.clientX;
  let y = e.clientY;

  let w = window.innerWidth/2;
  let c = e.clientX;

  // the movement should be 15px far from the system pointer

  pointer[0].style.left = x - 15 + 'px';
  pointer[0].style.top = y - 15 + 'px';

  pointer[1].style.left = x - 15 + 'px';
  pointer[1].style.top = y - 15 + 'px';

  if(c > w +25) {
    sp[0].style.transform = "translate(-25%, -50%)";
    sp[1].style.transform = "translate(-25%, -50%)";
  }

  if(c > w - 25 && x < w + 25) {
    sp[0].style.transform = "translate(-50%, -50%)";
    sp[1].style.transform = "translate(-50%, -50%)";
  }

  if(c < w - 25) {
    sp[0].style.transform = "translate(-75%, -50%)";
    sp[1].style.transform = "translate(-75%, -50%)";
  }
  
}

bd.addEventListener('mousemove', showPointer)