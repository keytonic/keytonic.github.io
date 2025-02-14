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
        <button class="btn btn-primary" type="submit">Send</button>
    </div>
</div>
</div>
</form>

<script>
/*

    (() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
    })()*/
</script>