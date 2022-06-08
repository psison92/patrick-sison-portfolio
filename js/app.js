const aboutBtn = document.getElementById('about-btn')
const workBtn = document.getElementById('work-btn')
const resumeBtn = document.getElementById('resume-btn')
const contactBtn = document.getElementById('contact-btn')
const aboutSection = document.getElementById('about')
const workSection = document.querySelector('.work')
const resumeSection = document.querySelector('.resume-and-skills')
const contactSection = document.querySelector('.contact')


aboutBtn.addEventListener('click', function() {
    aboutSection.scrollIntoView()
    });
workBtn.addEventListener('click', function() {
    workSection.scrollIntoView()
    });
resumeBtn.addEventListener('click', function() {
    resumeSection.scrollIntoView()
    });
contactBtn.addEventListener('click', function() {
    contactSection.scrollIntoView()
    });


