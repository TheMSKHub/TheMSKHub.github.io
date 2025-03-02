---
title: "Contact"
layout: contact
---

<div class="simple-contact">

## 📧 Get in Touch

<form action="https://formspree.io/f/xwpvgrod" method="POST">
  <div class="form-box">
    <label>Your Name:</label>
    <input type="text" name="name" required>
  </div>

  <div class="form-box">
    <label>Your Email:</label>
    <input type="email" name="_replyto" required>
  </div>

  <div class="form-box">
    <label>Message:</label>
    <textarea name="message" rows="1" required></textarea>
  </div>

  <button type="submit">Send</button>
</form>
</div>


-----

### 📍 Contact Info
- **Email:** [themskhub@gmail.com](mailto:themskhub@gmail.com)
- **Location:** Thrissur, Kerala, India
- **Social:**  
  [Instagram](https://instagram.com/msk_xplor)  

  [LinkedIn](https://linkedin.com/in/mohammed-swalah-855b39321)

  [X](https://x.com/msk_swalah)
---

<script>
document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  try {
    const response = await fetch(e.target.action, {
      method: 'POST',
      body: new FormData(e.target),
      headers: {'Accept': 'application/json'}
    });
    
    btn.textContent = response.ok ? '✓ Sent!' : '⚠ Error!';
    if(response.ok) e.target.reset();
  } catch {
    btn.textContent = '🌐 Offline';
  }
  setTimeout(() => {
    btn.textContent = 'Send';
    btn.disabled = false;
  }, 2000);
});
</script>