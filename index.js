const email = document.querySelector('.email');
const icon = document.querySelector('.icon');
const button = document.querySelector('#submit');
const form = document.querySelector('form');
const msg = document.querySelector('.error');


  form.addEventListener('submit', (e) => {

      e.preventDefault();

      if (!validateEmail(email.value)) {

        icon.classList.add('icon-error');
        email.classList.add('input-error');
        msg.classList.add('text-error');
        msg.textContent = "Please provide a valid email";
      }
      else {
        icon.classList.remove('icon-error');
        email.classList.remove('input-error');
        msg.classList.remove('text-error');
        msg.textContent = "Success!";
      }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
