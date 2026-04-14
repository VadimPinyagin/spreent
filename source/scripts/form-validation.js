const form = document.querySelector('.upgrade__form');
const nameInput = form.querySelector('#user-name');
const phoneInput = form.querySelector('#user-phone');
const emailInput = form.querySelector('#user-email');

const initFormValidation = () => {
  nameInput?.addEventListener('input', () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
  });

  phoneInput?.addEventListener('input', () => {
    phoneInput.value = phoneInput.value
      .replace(/[^\d+]/g, '')
      .replace(/(?!^)\+/g, '');
  });

  emailInput?.addEventListener('input', () => {
    emailInput.value = emailInput.value
      .toLowerCase()
      .replace(/[^a-z0-9@._-]/g, '');
  });
};

initFormValidation();
