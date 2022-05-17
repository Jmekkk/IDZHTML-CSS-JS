var mode = "light";

function changeStyleMode(){
    if (mode == "light") {
        document.getElementById('modeStyles').setAttribute('href', './css/StyleD.css');
        mode = "dark";
        document.getElementById('first-img').setAttribute('src', './img/happy-dark.jpg');
        document.getElementById('second-img').setAttribute('src', './img/normal-dark.jpg');
        document.getElementById('third-img').setAttribute('src', './img/sad-dark.jpg');
        document.getElementById('switch').classList.remove("btn-dark");
        document.getElementById('switch').classList.add("btn-light");
        document.getElementById('switch').innerHTML = "Light";
    } else {
        document.getElementById('modeStyles').setAttribute('href', './css/StyleL.css');
        mode = "light";
        document.getElementById('first-img').setAttribute('src', './img/happy.jpg');
        document.getElementById('second-img').setAttribute('src', './img/normal.jpg');
        document.getElementById('third-img').setAttribute('src', './img/sad.jpg');
        document.getElementById('switch').classList.remove("btn-light");
        document.getElementById('switch').classList.add("btn-dark");
        document.getElementById('switch').innerHTML = "Dark";
    }
}
