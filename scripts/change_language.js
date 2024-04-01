document.addEventListener('DOMContentLoaded', () => {
    let language_button = document.getElementById("button-change-language");
    // The following would also work:
    // const article = document.getElementById("electric-cars")
    
    console.log("language_button")
    console.log(language_button)

    let currentLanguage = language_button.dataset.currentLanguage;
    let currentSite = language_button.dataset.currentSite; 

    
    console.log(currentLanguage)
    console.log(currentSite)

    language_button.addEventListener('click', () => {
        if (currentLanguage == "deutsch") {
            if (currentSite == "startseite") {
                window.location.href = 'about_me.html';
            } else if ("ueber-mich") {
                window.location.href = 'about_me.html';
            } else if ("projekte") {
                window.location.href = 'about_me.html';
            } else if ("faehigkeiten") {
                window.location.href = 'about_me.html';
            } else if ("kontakt") {
                window.location.href = 'about_me.html';
            }
        } else if (currentLanguage == "englisch") {
            if (currentSite == "startseite") {
                window.location.href = 'about_me.html';
            } else if ("ueber-mich") {
                window.location.href = 'about_me.html';
            } else if ("projekte") {
                window.location.href = 'about_me.html';
            } else if ("faehigkeiten") {
                window.location.href = 'about_me.html';
            } else if ("kontakt") {
                window.location.href = 'about_me.html';
            }
        }

    });

});



