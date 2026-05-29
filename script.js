 // PARTICLES - SAB JAGAH DIKHENGE
function createMoon() {
    console.log('Chand ban raha hai'); // Check karne ke liye
    
    const moon = document.createElement('div');
    moon.classList.add('falling-moon');
    const uniqueId = 'moonMask' + Date.now() + Math.random();
    moon.innerHTML = `
        <svg viewBox="0 0 100 100" width="45" height="45">
            <defs>
                <mask id="${uniqueId}">
                    <circle cx="50" cy="50" r="48" fill="white"/>
                    <circle cx="70" cy="50" r="45" fill="black"/>
                </mask>
            </defs>
            <circle cx="50" cy="50" r="48" fill="white" mask="url(#${uniqueId})"/>
        </svg>
    `;
    moon.style.left = Math.random() * 95 + '%';
    moon.style.animationDuration = (Math.random() * 5 + 15) + 's';
    
    // Check kar ki particles-bg mil raha hai ya nahi
    const bg = document.getElementById('particles-bg');
    if(bg) {
        bg.appendChild(moon);
    } else {
        document.body.appendChild(moon); // Agar na mile to body mein daal de
    }
    
    setTimeout(() => moon.remove(), 25000);
}

// YE LINE HAI YA NAHI CHECK KAR
setInterval(createMoon, 2200);

function createFallingStar() {
    const star = document.createElement('div');
    star.classList.add('falling-star');
    const size = Math.random() * 20 + 22;
    star.style.left = Math.random() * 100 + '%';
    star.style.fontSize = size + 'px';
    star.style.animationDuration = (Math.random() * 6 + 14) + 's'; // 10 se 14s kar diya
    star.style.animationDelay = Math.random() * 3 + 's';
    document.getElementById('particles-bg').appendChild(star);
    setTimeout(() => star.remove(), 25000); // 20000 se 25000 kar diya
}
    setInterval(createFallingStar, 700);

    function createRisingSnow() {
        const snow = document.createElement('div');
        snow.classList.add('rising-snow');
        snow.style.left = Math.random() * 100 + '%';
        snow.style.bottom = '0';
        snow.style.animationDelay = Math.random() * 5 + 's';
        snow.style.animationDuration = (Math.random() * 5 + 9) + 's';
        const size = Math.random() * 4 + 3;
        snow.style.width = size + 'px';
        snow.style.height = size + 'px';
        document.getElementById('particles-bg').appendChild(snow);
        setTimeout(() => snow.remove(), 15000);
    }
    setInterval(createRisingSnow, 450);

    function createBgStars() {
        for(let i = 0; i < 70; i++) {
            const star = document.createElement('div');
            star.classList.add('bg-star');
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            document.getElementById('particles-bg').appendChild(star);
        }
    }
    createBgStars();

    // MAIN PAGE BUTTONS
    const clickBtn = document.getElementById('clickBtn');
    const salamPage = document.getElementById('salamPage');
    const mainPage = document.getElementById('mainPage');
    const backBtn = document.getElementById('backBtn');

    clickBtn.addEventListener('click', function() {
        mainPage.classList.add('hide-content'); // Text hide
        salamPage.style.display = 'flex';
        
        const animals = document.querySelectorAll('.animal');
        animals.forEach((animal, index) => {
            animal.style.animation = 'none';
            setTimeout(() => {
                animal.style.animation = `animalBounce 2.5s ease-in-out infinite ${index * 0.4}s`;
            }, 100);
        });

        const cornerStars = document.querySelectorAll('.corner-sparkle');
        cornerStars.forEach((star, index) => {
            star.style.animation = 'none';
            setTimeout(() => {
                star.style.animation = `sparkle 2s infinite ${index * 0.5}s`;
            }, 100);
        });
    });

    backBtn.addEventListener('click', function() {
        salamPage.style.display = 'none';
        mainPage.classList.remove('hide-content'); // Text wapas
    });

    // CREATE BY MD AFZAL BUTTON
    let isAboutPopupOpen = false;
    const afzalBtn = document.getElementById('afzalBtn');
    const aboutPopup = document.getElementById('aboutPopup');
    const closeAbout = document.getElementById('closeAbout');
    const popupBackBtn = document.getElementById('popupBackBtn');

    afzalBtn.addEventListener('click', function() {
        if(!isAboutPopupOpen) {
            isAboutPopupOpen = true;
            salamPage.style.display = 'none';
            mainPage.classList.add('hide-content'); // Front text gayab
            aboutPopup.style.display = 'flex';
        }
    });

    function closeAboutPopup() {
        aboutPopup.style.display = 'none';
        salamPage.style.display = 'flex';
        mainPage.classList.remove('hide-content'); // Text wapas
        isAboutPopupOpen = false;
    }

    closeAbout.addEventListener('click', closeAboutPopup);
    popupBackBtn.addEventListener('click', closeAboutPopup);

    aboutPopup.addEventListener('click', function(e) {
        if(e.target === aboutPopup) {
            closeAboutPopup();
        }
    });

    // HALKA 3D TILT EFFECT
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 60;
            const rotateY = (centerX - x) / 60;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px) scale(1.005)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });