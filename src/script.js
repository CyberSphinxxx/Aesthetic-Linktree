$(function () {
    const message = "Come Back!";
    let original;

    $(window).focus(function() {
        if (original) {
            document.title = original;
        }
    }).blur(function() {
        const title = $('title').text();
        if (title !== message) {
            original = title;
        }
        document.title = message;
    });
});

const volumeBtn = document.getElementById('volumeBtn');
const video = document.getElementById('myVideo');
const bgMusic = document.getElementById('bgMusic');

function toggleMute() {
    if (video.muted) {
        video.muted = false;
        bgMusic.play();
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        video.muted = true;
        bgMusic.pause();
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

volumeBtn.addEventListener('click', toggleMute);

// Preload audio
bgMusic.load();

// Initialize volume button state
toggleMute();

// Skills data
const skills = [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'C', icon: 'c' },
    { name: 'Python', icon: 'python' },
    { name: 'Java', icon: 'java' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Lua', icon: 'lua' },
    { name: 'C++', icon: 'cpp' },
    { name: 'Git', icon: 'git' },
    { name: 'Figma', icon: 'figma' },
    { name: 'GitHub', icon: 'github' },
    { name: 'IntelliJ IDEA', icon: 'idea' },
    { name: 'Kali Linux', icon: 'kali' },
    { name: 'Notion', icon: 'notion' },
    { name: 'Photoshop', icon: 'ps' },
    { name: 'Premiere Pro', icon: 'pr' },
    { name: 'PyCharm', icon: 'pycharm' },
    { name: 'Unreal Engine', icon: 'unreal' },
    { name: 'Unity', icon: 'unity' },
    { name: 'Godot', icon: 'godot' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'WordPress', icon: 'wordpress' },
    { name: 'Blender', icon: 'blender' },
    { name: 'Eclipse', icon: 'eclipse' },
    { name: 'Linux', icon: 'linux' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Discord', icon: 'discord' },
    { name: 'Gmail', icon: 'gmail' }
];

// Populate skills
const skillsContainer = document.querySelector('.skills-container');
skills.forEach(skill => {
    const img = document.createElement('img');
    img.src = `https://skillicons.dev/icons?i=${skill.icon}`;
    img.alt = skill.name;
    img.title = skill.name;
    img.className = 'skill-icon';
    skillsContainer.appendChild(img);
});

// Add animations
document.querySelectorAll('.profile-wrapper, .about-me, .github-stats, .skills-section, .social-nav').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
});

// Staggered animation for skills
document.querySelectorAll('.skill-icon').forEach((icon, index) => {
    icon.style.opacity = '0';
    icon.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        icon.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        icon.style.opacity = '1';
        icon.style.transform = 'scale(1)';
    }, 100 + index * 50);
});

// Ensure the page is not scrollable
function adjustPageHeight() {
    const mainContainer = document.querySelector('.main-container');
    const windowHeight = window.innerHeight;
    mainContainer.style.height = `${windowHeight}px`;
}

window.addEventListener('resize', adjustPageHeight);
adjustPageHeight();

// Lazy loading for GitHub stats images
document.addEventListener('DOMContentLoaded', function() {
    const githubImages = document.querySelectorAll('.github-stats img');
    githubImages.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

