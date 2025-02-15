---
layout: page
title: Contact
permalink: /contact/
---

## **Contact Me**
---

<form class="row g-3 needs-validation" autoComplete="off" novalidate>
<div class="parent">
<div class="div1">
    <div class="mb-3" style="box-sizing: border-box;">
        <label for="form-name" class="form-label">Name:</label>
        <input type="text" class="form-control" id="form-name" placeholder="" name="name" required>
    </div>
</div>
<div class="div2">
    <div class="mb-3" style="box-sizing: border-box;">
        <label for="form-phone" class="form-label">Phone:</label>
        <input type="tel" class="form-control" id="form-phone" placeholder="" name="phone" required>
    </div>
</div>
<div class="div3">
    <div class="mb-3" style="box-sizing: border-box;">
        <label for="form-email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="form-email" placeholder="" name="email" required>
    </div>
</div>
<div class="div4">
    <div class="mb-3" style="box-sizing: border-box;">
        <label for="form-message" class="form-label">Message</label>
        <textarea class="form-control" id="form-message" rows="3" name="message" required></textarea>
    </div>
</div>
<div class="div5">
    <div class="mb-3" style="box-sizing: border-box;">
        <button id="form-button" class="btn btn-primary" type="submit">Send</button>
    </div>
</div>
</div>
</form>



<label class="mdc-text-field mdc-text-field--outlined">
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    <span class="mdc-notched-outline__notch">
      <span class="mdc-floating-label" id="my-label-id">Your Name</span>
    </span>
    <span class="mdc-notched-outline__trailing"></span>
  </span>
  <input type="text" class="mdc-text-field__input" aria-labelledby="my-label-id">
</label>