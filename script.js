// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (document.querySelector('.nav-menu').classList.contains('active')) {
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// Toggle hamburger menu for mobile
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Sticky navigation bar
window.addEventListener('scroll', function() {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.remove('initial');
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        nav.classList.add('initial');
    }
});

// Scroll to contact section function
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Carousel functionality for services section
const servicesContainer = document.getElementById('services-container');
const prevButton = document.getElementById('prev-service-button');
const nextButton = document.getElementById('next-service-button');

function updateCarouselButtons() {
    if (!servicesContainer) return;
    const scrollLeft = servicesContainer.scrollLeft;
    const maxScroll = servicesContainer.scrollWidth - servicesContainer.clientWidth;
    prevButton.classList.toggle('disabled', scrollLeft <= 0);
    nextButton.classList.toggle('disabled', scrollLeft >= maxScroll - 1);
}

if (prevButton && nextButton && servicesContainer) {
    prevButton.addEventListener('click', () => {
        const cardWidth = window.innerWidth <= 480 ? 160 : window.innerWidth <= 900 ? 200 : 240;
        servicesContainer.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
        setTimeout(updateCarouselButtons, 300);
    });

    nextButton.addEventListener('click', () => {
        const cardWidth = window.innerWidth <= 480 ? 160 : window.innerWidth <= 900 ? 200 : 240;
        servicesContainer.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
        setTimeout(updateCarouselButtons, 300);
    });

    servicesContainer.addEventListener('scroll', updateCarouselButtons);
    updateCarouselButtons();
} else {
    console.error('Carousel elements not found:', { prevButton, nextButton, servicesContainer });
}

// Dynamic color generation for lighter shades of beige
function getRandomLightColor(baseColor) {
    const r = Math.min(255, baseColor.r + Math.floor(Math.random() * 50));
    const g = Math.min(255, baseColor.g + Math.floor(Math.random() * 50));
    const b = Math.min(255, baseColor.b + Math.floor(Math.random() * 50));
    return `rgb(${r}, ${g}, ${b})`;
}

function updateColors() {
    const baseBeige = { r: 210, g: 180, b: 140 }; // Base beige RGB
    const primaryBeige = getRandomLightColor(baseBeige);
    const darkerBeige = getRandomLightColor({ r: 198, g: 142, b: 77 });
    const goldenYellow = getRandomLightColor({ r: 212, g: 160, b: 23 });
    const lightGoldenYellow = getRandomLightColor({ r: 230, g: 184, b: 47 });

    document.documentElement.style.setProperty('--primary-beige', primaryBeige);
    document.documentElement.style.setProperty('--darker-beige', darkerBeige);
    document.documentElement.style.setProperty('--golden-yellow', goldenYellow);
    document.documentElement.style.setProperty('--light-golden-yellow', lightGoldenYellow);
}

window.addEventListener('load', updateColors);

// Project Data for dynamic loading
const projectsData = [
    {
        category: 'java',
        title: 'Employee Management System',
        description: 'Java-based system with SQL for automated employee record management with an intuitive UI.',
        imageUrl: '<img src="https://i.ibb.co/C39GGGtv/20250622-1244-Employee-Management-System-simple-compose-01jyb7q40nf6mv6ymk5qf571m2.png" alt="20250622-1244-Employee-Management-System-simple-compose-01jyb7q40nf6mv6ymk5qf571m2" style="width: 450px; height: 250px; object-fit: cover;">',
        link: 'https://github.com/armanparate07/Employee-Management-System/tree/main/Employee%20Management%20System'
    },
    {
        category: 'java',
        title: 'Electricity Billing System',
        description: 'Java application with SQL for automated billing and secure data storage.',
        imageUrl: '<img src="https://i.ibb.co/zVbQcSHf/20250622-1241-Electricity-Billing-System-simple-compose-01jyb7jz6fe8mbn7zcqhbv2gx2.png" alt="20250622-1241-Electricity-Billing-System-simple-compose-01jyb7jz6fe8mbn7zcqhbv2gx2" style="width: 450px; height: 250px; object-fit: cover;">',
        link: 'https://github.com/armanparate07/Electricity-Billing-System/tree/main/Electricity%20Billing%20System/Electricity-Billing-System-master/Electricity-Billing-System'
    },
    {
        category: 'python',
        title: 'Vehicle Detection System',
        description: 'Python-based system using OpenCV and YOLOv5 for vehicle detection and counting with CSV logging.',
        imageUrl: '<img src="https://i.ibb.co/rGXcVkys/20250622-1216-Vehicle-Detection-Showcase-simple-compose-01jyb638agf1pbhf2vq79w0f8s.png" alt="20250622-1216-Vehicle-Detection-Showcase-simple-compose-01jyb638agf1pbhf2vq79w0f8s" style="width: 450px; height: 250px; object-fit: cover;">',
        link: 'https://github.com/armanparate07/vehicle-detection/tree/main/Vehicle%20-%20detection'
    },
    {
        category: 'python',
        title: 'Virtual Desktop Assistant',
        description: 'A smart, voice-enabled Virtual Desktop Assistant built with Python to manage everyday desktop tasks efficiently.',
        imageUrl: '<img src="https://i.ibb.co/Lzh7hH8M/20250622-1254-Virtual-Robot-Assistant-simple-compose-01jyb88w3nfy288bk7ecpxnqwk.png" alt="20250622-1254-Virtual-Robot-Assistant-simple-compose-01jyb88w3nfy288bk7ecpxnqwk" style="width: 450px; height: 250px; object-fit: cover;">',
        link: 'https://github.com/armanparate07/virtual-Desktop-Assistant/tree/main/Virtual-Assistant--main'
    },
    {
        category: 'data',
        title: 'Netflix Content Insights Dashboard',
        description: 'Power BI project delivering an interactive dashboard to explore Netflix’s global library of over 8,000 titles.',
        imageUrl: '<img src="https://i.ibb.co/ds6ZPm23/20250622-1318-Netflix-Dashboard-Thumbnail-simple-compose-01jyb9pjm5feftjnd4shmw8vcs.png" alt="20250622-1318-Netflix-Dashboard-Thumbnail-simple-compose-01jyb9pjm5feftjnd4shmw8vcs" style="width: 450px; height: 250px; object-fit: cover;">',
        link: 'https://github.com/armanparate07/Netflix-Movies-and-TV-Shows-Dashboard'
    },
    {
        category: 'more',
        title: 'GitHub Projects',
        description: 'Explore additional projects on my GitHub profile, showcasing a wider range of my development work.',
        imageUrl: '<img src="https://i.ibb.co/YFyj8jPY/20250622-1324-Git-Hub-Logo-simple-compose-01jyba29bvfzaazx4s0a7n6pem.png" alt="20250622-1324-Git-Hub-Logo-simple-compose-01jyba29bvfzaazx4s0a7n6pem" style="width: 450px; height: 250px; object-fit: cover;">',
        link: 'https://github.com/armanparate07'
    }
];

function loadProjects(category) {
    const container = document.getElementById('project-container');
    if (!container) {
        console.error('Project container not found');
        return;
    }
    container.innerHTML = '';

    try {
        const filteredProjects = projectsData.filter(project => project.category === category);

        if (filteredProjects.length === 0) {
            container.innerHTML = '<p>No projects found for this category yet.</p>';
            container.classList.remove('multi-item');
            console.log(`No projects found for category: ${category}`);
            return;
        }

        if (filteredProjects.length > 1) {
            container.classList.add('multi-item');
        } else {
            container.classList.remove('multi-item');
        }

        filteredProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-display-item');
            projectItem.innerHTML = `
                <div class="project-image frame">
                    <div class="app-screens">
                        ${project.imageUrl}
                    </div>
                </div>
                <div class="project-details">
                    <div class="category">${project.category.toUpperCase()} PROJECT</div>
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="see-more" onclick="storeLastCategory('${category}')">
                        View Project
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2H12.16l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                    </a>
                </div>
            `;
            container.appendChild(projectItem);
        });
        console.log(`Loaded ${filteredProjects.length} projects for category: ${category}`);
    } catch (error) {
        console.error('Error loading projects:', error);
        container.innerHTML = '<p>Error loading projects. Please try again later.</p>';
    }
}

// Store last selected category in localStorage
function storeLastCategory(category) {
    localStorage.setItem('lastCategory', category);
}

// Load last selected category or default to 'java' on page load
function loadLastCategory() {
    const lastCategory = localStorage.getItem('lastCategory') || 'java';
    loadProjects(lastCategory);
    document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === lastCategory);
    });
    document.querySelector('#category-toggle').textContent = lastCategory.charAt(0).toUpperCase() + lastCategory.slice(1) + ' Projects';
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.toggle('active', item.dataset.category === lastCategory);
    });
}

document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.category;
        loadProjects(category);
        storeLastCategory(category);
    });
});

const dropdownToggle = document.getElementById('category-toggle');
const dropdownMenu = document.getElementById('category-menu');
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        const category = item.dataset.category;
        loadProjects(category);
        dropdownToggle.textContent = item.textContent;
        dropdownMenu.classList.remove('show');
        document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        storeLastCategory(category);
    });
});

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

window.addEventListener('load', loadLastCategory);

// Particles.js initialization
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#d2b48c" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00bcd4",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Form submission handling
document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission and redirect

    const button = this.querySelector('button[type="submit"]');
    button.disabled = true;

    const formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .then(data => {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset(); // Clears the form
    })
    .catch(error => {
        alert('There was an error sending your message. Please try again later.');
        console.error('Error:', error);
    })
    .finally(() => {
        button.disabled = false;
    });
});
