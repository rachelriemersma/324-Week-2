// Newsletter signup form with accessible validation

const form = document.querySelector('#signup-form');
const message = document.querySelector('#form-message');

const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

const emailError = document.querySelector('#email-error');
const usernameError = document.querySelector('#username-error');
const passwordError = document.querySelector('#password-error');

if (
  !form ||
  !message ||
  !emailInput ||
  !usernameInput ||
  !passwordInput ||
  !emailError ||
  !usernameError ||
  !passwordError
) {
  throw new Error('Missing expected elements in the page');
}

function setFieldError(input, errorEl, text) {
  // Set or clear field-specific error with ARIA attributes
  if (text) {
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', errorEl.id);
    errorEl.textContent = text;
  } else {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    errorEl.textContent = '';
  }
}

function validate() {
  // Validate all fields and return validation state
  message.textContent = '';
  message.className = 'form-message';

  const email = emailInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  let firstInvalid = null;

  // Email validation
  if (!email) {
    setFieldError(emailInput, emailError, 'Enter your email address.');
    firstInvalid ??= emailInput;
  } else if (!emailInput.checkValidity()) {
    setFieldError(emailInput, emailError, 'Enter a valid email address (like name@example.com).');
    firstInvalid ??= emailInput;
  } else {
    setFieldError(emailInput, emailError, '');
  }

  // Username validation
  if (!username) {
    setFieldError(usernameInput, usernameError, 'Enter a username.');
    firstInvalid ??= usernameInput;
  } else if (username.length < 3) {
    setFieldError(usernameInput, usernameError, 'Username must be at least 3 characters.');
    firstInvalid ??= usernameInput;
  } else {
    setFieldError(usernameInput, usernameError, '');
  }

  // Password validation
  if (!password) {
    setFieldError(passwordInput, passwordError, 'Enter a password.');
    firstInvalid ??= passwordInput;
  } else if (password.length < 8) {
    setFieldError(passwordInput, passwordError, 'Password must be at least 8 characters.');
    firstInvalid ??= passwordInput;
  } else {
    setFieldError(passwordInput, passwordError, '');
  }

  return { ok: !firstInvalid, firstInvalid };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { ok, firstInvalid } = validate();
  
  if (!ok) {
    message.textContent = 'Please fix the errors above.';
    message.classList.add('error');
    firstInvalid.focus();
    return;
  }

  // Success
  message.textContent = 'Success! Your account has been created.';
  message.classList.add('success');
  form.reset();
});

// Optional: real-time validation
form.addEventListener('input', () => {
  validate();
});