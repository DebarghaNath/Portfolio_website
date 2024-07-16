const modal = document.getElementById('imageModal');
const img = document.getElementById('photo');
const modalImg = document.getElementById('modalImage');
const span = document.getElementsByClassName('close')[0];
document.addEventListener('DOMContentLoaded',()=>{
const hamburger = document.querySelector('.hamburger');
const navbarul = document.querySelector('.navbarul');
console.log(hamburger);
hamburger.addEventListener('click', () => {
  console.log("HELLO");
  if(navbarul.style.display == 'flex')
   navbarul.style.display = 'none';
  else
  {
    navbarul.style.display = 'flex';
  }
});
});

document.addEventListener('DOMContentLoaded', () => {
  const printButtons = document.getElementsByClassName('printer');

  Array.from(printButtons).forEach(button => {
      button.onclick = function() {
          window.open('assets/Resume_DEBARGHA_NATH_24-06-2024.pdf', '_blank');
      };
  });
});

img.onclick = function() {
  modal.style.display = 'block';
  modalImg.src = this.src;
}

span.onclick = function() {
  modal.style.display = 'none';
}


//------printer------


