
// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Navigation link smooth scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Course interaction
function startCourse(courseId) {
    alert(`Starting ${courseId.replace('-', ' ')} course! This would normally redirect to the course content.`);

    // Simulate progress update
    const progressBars = document.querySelectorAll('.progress-bar');
    const randomProgress = Math.floor(Math.random() * 30) + 10;

    setTimeout(() => {
        progressBars.forEach(bar => {
            if (bar.parentElement.parentElement.querySelector('button').onclick.toString().includes(courseId)) {
                bar.style.width = randomProgress + '%';
                bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent = randomProgress + '%';
            }
        });
    }, 1000);
}

// Emergency kit functionality
function toggleCategory(categoryId) {
    alert(`Opening ${categoryId.replace('-', ' ')} checklist! This would show detailed items to check off.`);
}

function showAlert() {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'fixed top-20 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm';
    alertDiv.innerHTML = `
                <div class="flex items-center">
                    <span class="text-2xl mr-3">⚠️</span>
                    <div>
                        <div class="font-bold">TEST ALERT</div>
                        <div class="text-sm">This is a test of the emergency alert system. In a real emergency, this would contain critical information.</div>
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200">✕</button>
                </div>
            `;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 5000);
}

function downloadChecklist() {
    alert('Emergency kit checklist would be downloaded as a PDF file. This is a demo version.');
}

// Resource functions
function checkWeather() {
    alert('This would connect to a weather API to show current conditions and alerts for your location.');
}

function viewMap() {
    alert('This would open an interactive map showing evacuation routes and emergency shelters in your area.');
}

// Contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    this.reset();
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.1s';
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Update overall progress
function updateOverallProgress() {
    const totalItems = 36; // Total items across all categories
    const completedItems = 0; // This would be calculated based on checked items
    const percentage = Math.round((completedItems / totalItems) * 100);

    document.getElementById('overall-progress').textContent = percentage + '%';
    document.getElementById('overall-progress-bar').style.width = percentage + '%';
}

// Initialize
updateOverallProgress();
