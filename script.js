// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Form submission sederhana
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Ambil nilai dari form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validasi sederhana
            if (!name || !email || !message) {
                alert('Harap isi semua field!');
                return;
            }
            
            // Tampilkan pesan sukses
            alert(`Terima kasih ${name}! Pesan Anda telah dikirim. Saya akan membalas ke ${email} segera.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Handle foto error
    const eliaPhoto = document.getElementById('elia-photo');
    if (eliaPhoto) {
        eliaPhoto.onerror = function() {
            this.onerror = null;
            this.src = '';
            const placeholder = document.getElementById('photo-placeholder');
            if (placeholder) placeholder.style.display = 'flex';
        };
    }
});