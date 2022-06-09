import { projects } from "../data/work.js"

const aboutBtn = document.getElementById('about-btn')
const workBtn = document.getElementById('work-btn')
const contactBtn = document.getElementById('contact-btn')
const aboutSection = document.querySelector('.about')
const workSection = document.querySelector('.work')
const contactSection = document.querySelector('.contact')

const cardContainer = document.getElementById('card-container')

let projectCard = projects.map(project =>
    `
    <div class="card text-center" style="width: 18rem;">
        <img src="${project.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <div>
                <a href="${project.github}" class="btn btn-primary">Github</a>
                <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
            </div>
        </div>
    </div>
    `
).join('')

cardContainer.innerHTML = projectCard
console.log(projects)


aboutBtn.addEventListener('click', function() {
    aboutSection.scrollIntoView({behavior: 'smooth'})
    });
workBtn.addEventListener('click', function() {
    workSection.scrollIntoView({behavior: 'smooth'})
    });
contactBtn.addEventListener('click', function() {
    contactSection.scrollIntoView({behavior: 'smooth'})
    });


