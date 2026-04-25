const nav = document.querySelector('.nav');
const btnBurger = document.querySelector('.burger');
const headerButton = nav.querySelector('.header__button');
const hiddenClass = 'is-hidden';
const btnCloseClass = 'burger--cross';

const closeNav = () => {
  nav.classList.add(hiddenClass);
  btnBurger.classList.remove(btnCloseClass);

  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onOutsideMenuClick);
};

const toggleNav = () => {
  btnBurger.addEventListener('click', () => {
    if (nav.classList.contains(hiddenClass)) {
      nav.classList.remove(hiddenClass);
      btnBurger.classList.add(btnCloseClass);
      document.addEventListener('keydown', onEscKeydown);
      document.addEventListener('click', onOutsideMenuClick);
    } else {
      closeNav();
    }
  });
};

function onEscKeydown(e) {
  if (e.key === 'Escape') {
    closeNav();
  }
}


function onOutsideMenuClick(e) {
  if ((!nav.contains(e.target) && !btnBurger.contains(e.target)) || headerButton.contains(e.target)) {
    closeNav();
  }
}

toggleNav();
