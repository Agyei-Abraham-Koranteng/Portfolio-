// Project Data
const projects = [
    {
        title: "E-Commerce Redesign",
        description: "Increased conversions by 30% with modern UI",
        tags: ["React", "CSS Modules", "Node.js"],
        link: "#"
    },
    {
        title: "Task Management App",
        description: "Drag-and-drop interface with real-time sync",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        link: "#"
    }
];

// Skills Data
const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "UI/UX Design", level: 80 }
];

// Dynamically load projects
function renderProjects() {
    const grid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        grid.innerHTML += `
        <div class="project-card">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        </div>
        `;
    });
}

// Animated skill bars
function renderSkills() {
    const container = document.querySelector('.skills-container');
    
    skills.forEach(skill => {
        container.innerHTML += `
        <div class="skill-bar">
            <label>${skill.name}</label>
            <div class="bar-container">
                <div class="bar" style="width: ${skill.level}%"></div>
            </div>
        </div>
        `;
    });
}

// Form handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here (Formspree/Netlify Forms)
    alert('Message sent!');
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
});

const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.dataset.theme = 
     document.body.dataset.theme === "dark" ? "light" : "dark";
});