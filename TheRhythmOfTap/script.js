// Scroll fade-in
const items = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){entry.target.style.opacity=1;entry.target.style.transform='translateY(0)'}
    });
},{threshold:0.2});
items.forEach(item=>observer.observe(item));

// Contact form popup
function openForm(){document.getElementById("contactForm").style.display="flex"}
function closeForm(){document.getElementById("contactForm").style.display="none"}
