var mode = document.getElementById("mode");
var icon = document.getElementById("icon");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var icon5 = document.getElementById("icon5");

// Light * Dark Mode Switcher

mode.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "styles/img/download.json";
        icon2.src = "styles/img/eye.json";
        icon3.src = "styles/img/Sun.json";
        icon4.src = "styles/img/Moon.json";
    } else {
        icon.src = "styles/img/download-dark.json";
        icon2.src = "styles/img/eye-dark.json";
        icon3.src = "styles/img/Sun-dark.json";
        icon4.src = "styles/img/Moon-dark.json";
    }
    if (document.body.classList.contains("light-theme")) {
        icon.src = "styles/img/download-dark.json";
        icon2.src = "styles/img/eye-dark.json";
        icon3.src = "styles/img/Sun-dark.json";
        icon4.src = "styles/img/Moon-dark.json";
    } else {
        icon.src = "styles/img/download.json";
        icon2.src = "styles/img/eye.json";
        icon3.src = "styles/img/Sun.json";
        icon4.src = "styles/img/Moon.json";
    }
}