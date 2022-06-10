import { projects } from "../data/work.js"

const aboutBtn = document.getElementById('about-btn')
const workBtn = document.getElementById('work-btn')
const skillsBtn = document.getElementById('skills-btn')
const contactBtn = document.getElementById('contact-btn')
const connectBtn = document.getElementById('connect-btn')
const aboutSection = document.querySelector('.about')
const workSection = document.querySelector('.work')
const skillsSection = document.querySelector('.skills')
const contactSection = document.querySelector('.contact')
const cardContainer = document.getElementById('card-container')
const navBar = document.querySelector('.navbar')
const mediaQuery = window.matchMedia('(max-width: 768px)')

let projectCard = projects.map(project =>
    `
    <div class="card text-center" style="width: 18rem;">
        <img src="${project.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <div class="justify-content-evenly">
                <a href="${project.github}" target="_blank" class="btn github-btn">Github</a>
                <a href="${project.deployment}" target="_blank" class="btn play-btn">Play!</a>
            </div>
        </div>
    </div>
    `
).join('')

cardContainer.innerHTML = projectCard



aboutBtn.addEventListener('click', function() {
    aboutSection.scrollIntoView({behavior: 'smooth'})
    });
workBtn.addEventListener('click', function() {
    workSection.scrollIntoView({behavior: 'smooth'})
    });
skillsBtn.addEventListener('click', function() {
    skillsSection.scrollIntoView({behavior: 'smooth'})
    });
contactBtn.addEventListener('click', function() {
    contactSection.scrollIntoView({behavior: 'smooth'})
    });
connectBtn.addEventListener('click', function() {
    contactSection.scrollIntoView({behavior: 'smooth'})
    });
window.addEventListener('scroll', function() {
    if (!mediaQuery.matches) {
        const windowPosition = window.scrollY > 0
        navBar.classList.toggle('scrolling-active', windowPosition)
    } else return
    })
 