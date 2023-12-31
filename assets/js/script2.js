let ourMain = document.querySelector('main');
ourMain.addEventListener('click', hidenav)
tbars.addEventListener("click", shownav)
function shownav() {
    nav.classList.toggle("show-nav")
}
function hidenav() {
    nav.classList.remove("show-nav")
}

const ParentModal= document.querySelector('.modal-message-box');
const modalClose= ParentModal.querySelector('.modal-message-cl');
const modal= ParentModal.querySelector('.modal-message');
let modalxmark = modal.querySelector('span');
modalxmark.addEventListener('click', modalHIde);
modalClose.addEventListener('click', modalHIde);
function modalShow(){
    ParentModal.classList.add('showmodal');
}
function modalHIde(){
    ParentModal.classList.remove('showmodal')
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

function sendmessage(event){
    event.preventDefault();
    var userMessageSubject = document.querySelector('#subject');
    var userName = document.querySelector('#fname');
    var userEmail = document.querySelector('#email');
    var userMessage = document.querySelector('#message');
    if(userEmail.value != "" && userName.value != "" && userMessage.value != "" && userMessageSubject.value != ""){
        fetch('https://formspree.io/f/xyyqbnok', {
            method: "POST",
            body: JSON.stringify({
                subject: userMessageSubject.value,
                Name: userName.value,
                Email: userEmail.value,
                Message: userMessage.value
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(()=>{
            modalShow();
            userEmail.value = '';
            userMessage.value = '';
            userMessageSubject.value = '';
            userName.value = '';
            modal.querySelector('p').innerHTML = "Message Sent Successfully";
            modal.querySelector('img').src = "assets/img/messagesent.gif";
        })
    }
    else{
        modalShow();
        modal.querySelector('img').src = "assets/img/notsent.webp";
        modal.querySelector('p').innerHTML = "Please Fill Out All Fields";
    }
}

var current;
let allSections = document.querySelectorAll('section');
window.addEventListener('scroll', sectionop)
let allLi = document.querySelectorAll('nav ul li');

sectionop()
function sectionop() {
    for (let sect of allSections) {
        if (pageYOffset + 500 > sect.offsetTop) {
            if (sect.offsetTop < pageYOffset + 350 && sect.offsetTop + 10 > pageYOffset) {
                sect.classList.add('secActive')
                current = sect.getAttribute('id');
                navAction(current)
            }
        }
    }
}

function navAction(sectionid) {
    allLi.forEach((li) => {
        li.classList.remove('p-at')
        if (li.getAttribute('data-contain') == sectionid) {
            li.classList.add('p-at')
        }
    })
}
let skills = document.querySelectorAll('.skill');
skills.forEach((skill) => {
    skill.addEventListener('mouseenter', () => {
        let rotation = parseInt(skill.getAttribute('data-fill')) * 3.6;
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

allLi.forEach((listitem) => {
    listitem.addEventListener('click', () => {
        let secTop = document.getElementById(listitem.getAttribute('data-contain')).offsetTop - 50;
        window.scrollTo({ top: secTop, behavior: "smooth" })
    })
})
