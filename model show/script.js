'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
const hidden = document.querySelector('.hidden');

for (let i = 0; i < btnOpenModel.length; i++) {
  console.log(btnOpenModel[i].textContent);
  btnOpenModel[i].addEventListener('click', function () {
    console.log('button clicked');
    // hidden.style.display="block";
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  });
}

function closeModel() {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
}

btnCloseModel.addEventListener('click', closeModel);
overLay.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModel();
  }
});
