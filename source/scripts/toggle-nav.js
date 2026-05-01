const body = document.querySelector('.page__body');
const nav = body.querySelector('.nav');
const btnBurger = nav.querySelector('.burger');
const navLinkSelector = 'nav__link';
const hiddenClass = 'is-hidden';
const btnCloseClass = 'burger--cross';
const bodyLockClass = 'page__body--lock';

const closeNav = () => {
  nav.classList.add(hiddenClass);
  btnBurger.classList.remove(btnCloseClass);

  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onOutsideMenuClick);
  body.classList.remove(bodyLockClass);
};

const toggleNav = () => {

  nav.addEventListener('click', (e) => {
    const target = e.target;
    if (btnBurger.contains(target)) {

      if (nav.classList.contains(hiddenClass)) {
        nav.classList.remove(hiddenClass);
        btnBurger.classList.add(btnCloseClass);
        body.classList.add(bodyLockClass);
        document.addEventListener('keydown', onEscKeydown);
        document.addEventListener('click', onOutsideMenuClick);
      } else{
        closeNav();
      }
    }

    if (e.target.classList.contains(navLinkSelector)) {
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
  if (!nav.contains(e.target)) {
    closeNav();
  }
}

toggleNav();
