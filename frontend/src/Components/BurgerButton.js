import React from 'react';

const BurgerButton = () => {
  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });
  return (
    <>
      <div className='menu-btn'>
        <div className='menu-btn_burger'></div>
      </div>
    </>
  );
};

export default BurgerButton;

// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//   if (!menuOpen) {
//     menuBtn.classList.add('open');
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove('open');
//     menuOpen = false;
//   }
// });
