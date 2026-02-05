const openNavMobile = document.querySelector('header .hamburger-menu');
const closeNavMobile = document.querySelector('header .close-menu');
const navMenu = document.querySelector('header .navigation-mobile');
const langSwitchForm = document.getElementById('lang-form');

// Responsive Design 
openNavMobile.addEventListener('click', () => {
    navMenu.style.width = '280px';
});

closeNavMobile.addEventListener('click', () => {
    navMenu.style.width = '0';
});

// querySelector ne sélectionne que le premier h3
// Utilisez querySelectorAll pour prendre tous les h3
// Faire un forEach (il faut parcourir tous les h3 et leur appliquer un évènement)
const footerDropdownTitles = document.querySelectorAll('.wrap-footer .footer-section h3');
footerDropdownTitles.forEach(footerDropDown => {
    footerDropDown.addEventListener('click', function() {
        this.children[0].classList.toggle('f-transit-mobile');
        this.nextElementSibling.children[0].classList.toggle('f-visible-mobile');
    });
});

// Transitions Contactez-nous
// Survol des logos à côté du form
const brandIcons = document.querySelectorAll('.inquiries-link a');

brandIcons.forEach(link => {
    link.addEventListener('mouseover', function() {
        icon = link.querySelector('svg');
        if (icon.classList.contains('instagram')) {
            icon.classList.add('instagram-logo-col');
            link.classList.add('instagram-hover');
        }
        else if (icon.classList.contains('tiktok')) {
            icon.classList.add('tiktok-logo-col');
            link.classList.add('tiktok-hover');
        }
        else {
            icon.classList.add('linkedin-logo-col');
            link.classList.add('linkedin-hover');
        }
    })

    link.addEventListener('mouseout', function() {
        link.classList.remove('instagram-hover', 'tiktok-hover', 'linkedin-hover');
        icon.classList.remove('instagram-logo-col', 'tiktok-logo-col', 'linkedin-logo-col');
    })
})

/*
const translations = {
        en : {
            content: "Welcome to my website",
        },

        fr : {
            content: "Bienvenue sur mon site",
        },
    };
    
const paragraph = document.getElementById('paragraph');

function showLanguage(lang) {
    paragraph.innerHTML = translations[lang].content; 
}
*/