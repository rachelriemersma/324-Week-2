# 324-Week-2

1) What the form is for

- A minimal newsletter signup form to collect user email, username, and password for subscribing to a weekly design newsletter.

2) Inputs + validation rules

- Email: required, type="email" (must match email pattern)
- Username: required, minlength="3"
- Password: required, minlength="8"

3) Feedback presentation

- Errors: per-field messages appear inline beneath each field and are connected via `aria-describedby`; a global error message appears at the top of the form in `#form-message` when there are validation problems.
- Success: on valid submit a success message appears in `#form-message` (role="status") and the form is reset.

4) DevTools insight used

- Elements/Styles: inspected `#form-message` styles and adjusted the `.form-message.error` to use a white background with a red left border so error messages are legible on the dark form panel.