var mode = document.getElementById("mode");
var icon = document.getElementById("icon");
var icon2 = document.getElementById("icon2");
var icon3 = document.getElementById("icon3");
var icon4 = document.getElementById("icon4");
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");

// Light * Dark Mode Switcher

mode.onclick = function () {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains(":root")) {
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


// Mode Switch Icon Changer

mode.addEventListener("click", function () {
    if (sun.style.display !== "none") {
        moon.style.display = "flex"
        sun.style.display = "none"
    } else {
        sun.style.display = "flex";
        moon.style.display = "none"
    }
});

