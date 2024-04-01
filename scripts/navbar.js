document.addEventListener('DOMContentLoaded', () => {

    const navContainer = document.querySelector('.nav-container');

    const navBar = document.createElement('nav');
    navBar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light", "fixed-top")
    navBar.innerHTML = 
    `
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <img src="assets/logo1.png" alt="Logo" width="30" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Startseite</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about_me.html">Über mich</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="my_projects.html">Projekte</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="skills.html">Fähigkeiten und Technologien</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Kontakt</a>
            </li>
            </ul>
        </div>
    </div>
    `;
    navContainer.appendChild(navBar);
});
