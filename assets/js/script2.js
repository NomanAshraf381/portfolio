document.querySelector('main').addEventListener('click', hidenav)
tbars.addEventListener("click", shownav)
function shownav() {
    nav.classList.toggle("show-nav")

}
function hidenav() {
    nav.classList.remove("show-nav")

}

var typed = new Typed(".multiple-text", {
    strings: ["Front End Developer", "a Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let header = document.querySelector(".header");
window.addEventListener('scroll', () => {
    if (pageYOffset > 20) {
        header.classList.add('hact')
    }
    else {
        header.classList.remove('hact')
    }
})

let goto = document.querySelector(".gototop");
window.addEventListener('scroll', function () {
    if (pageYOffset >= 300) {
        goto.style.right = '5%';
    }
    else {
        goto.style.right = '-100px'
    }
})
goto.addEventListener('click', gotop)
function gotop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

let ourLoaderScreen = document.querySelector('.loading-screen')
document.addEventListener('DOMContentLoaded', function () {
    ourLoaderScreen.classList.add('disappear');
});



var current;
let allSections = document.querySelectorAll('section');
window.addEventListener('scroll', function () {
    for (let sect of allSections) {
        if (pageYOffset + 500 > sect.offsetTop) {
            if (sect.offsetTop < pageYOffset + 200 && sect.offsetTop + 10 > pageYOffset) {
                sect.classList.add('secActive')
                current = sect.getAttribute('id');
                navAction(current)
            }
        }
    }
})
let allLi = document.querySelectorAll('nav ul li');
function navAction(sectionid) {
    allLi.forEach((li) => {
        li.classList.remove('p-at')
        if (li.getAttribute('contain') == sectionid) {
            li.classList.add('p-at')
        }
    })
}
let skills = document.querySelectorAll('.skill');
skills.forEach((skill) => {
    skill.addEventListener('mouseenter', () => {
        let rotation = parseInt(skill.getAttribute('fill')) * 3.6;
        var xz = 0;
        increase();
        function increase() {
            if (xz <= rotation) {
                skill.querySelector('.skill-track').style.background = `conic-gradient(var(--blue) ${xz}deg, var(--white) ${xz}deg, var(--white))`;
                xz = xz + 3;
                setTimeout(increase, 5);
            }
        }
    })
})
var skillProgressed = false;
window.addEventListener('scroll', () => {
    let secTop = document.getElementById('skills').offsetTop;
    let pageTop = pageYOffset + 100;
    if (secTop <= pageTop && skillProgressed == false) {
        skillProgressed = true;
        let skills = document.querySelectorAll('.skill');
        skills.forEach((skill) => {
                let rotation = parseInt(skill.getAttribute('fill')) * 3.6;
                var xz = 0;
                increase();
                function increase() {
                    if (xz <= rotation) {
                        skill.querySelector('.skill-track').style.background = `conic-gradient(var(--blue) ${xz}deg, var(--white) ${xz}deg, var(--white))`;
                        skill.querySelector('p').innerText = `${Math.floor(xz / 3.6)}%`;
                        xz = xz + 3;
                        setTimeout(increase, 5);
                    }
                }
        })
    }
})


allLi.forEach((listitem) => {
    listitem.addEventListener('click', () => {
        let secTop = document.getElementById(listitem.getAttribute('contain')).offsetTop - 50;
        window.scrollTo({ top: secTop, behavior: "smooth" })
    })
})
