// Say Hello button

const contactForm = document.getElementById("contactForm");
const helloButton = document.getElementById("helloBtn");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    helloButton.style.backgroundColor = "#8B3A4A";
    helloButton.textContent = "Message Sent!";

    setTimeout(function () {
        alert("Message sent!");
    }, 300);

    setTimeout(function () {
        helloButton.style.backgroundColor = "";
        helloButton.textContent = "Say Hello!";
    }, 3000);
});


// Resume button

const resumeButton = document.getElementById("resumeBtn");

resumeButton.addEventListener("click", function () {
    window.open("resume.pdf", "_blank");
});


// Navigation buttons




// Home is selected when the page first opens

document.querySelector('.nav-link[href="#home"]').classList.add("active");


// Connect button

const connectButton = document.getElementById("connectBtn");

connectButton.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

document.getElementById("homeLink").classList.add("active");