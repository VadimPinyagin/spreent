const form = document.querySelector('.upgrade__form');
const nameInput = form.querySelector('#user-name');
const phoneInput = form.querySelector('#user-phone');
const emailInput = form.querySelector('#user-email');

const initFormValidation = () => {

  nameInput?.addEventListener('input', () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
  });

  phoneInput?.addEventListener('input', () => {
    let value = phoneInput.value.replace(/[^\d+]/g, '');
    if (value.includes('+')) {
      value = value[0] === '+'
        ? '+' + value.slice(1).replace(/\+/g, '')
        : value.replace(/\+/g, '');
    }
    phoneInput.value = value;
  });

  emailInput?.addEventListener('input', () => {
  emailInput.value = emailInput.value.replace(/[^a-zA-Z0-9@._-]/g, '');
});
};

initFormValidation();
