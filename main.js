let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    header.classList.remove("active");

    document.querySelectorAll('section').forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            document.querySelectorAll('header .navbar a').forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+ id +']').classList.add('active');
            });
        }
    })
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

let search = document.querySelectorAll('.fa-eye-slash');
let description = document.querySelectorAll('.portfolio .box-container .box .description');

search[0].onclick = () => {
    search[0].classList.add('fa-eye');
    description[0].classList.add('active');
}

search[1].onclick = () => {
    search[1].classList.add('fa-eye');
    description[1].classList.add('active');
}

search[2].onclick = () => {
    search[2].classList.add('fa-eye');
    description[2].classList.add('active');
}

search[3].onclick = () => {
    search[3].classList.add('fa-eye');
    description[3].classList.add('active');
}

let inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

let theme = document.querySelector('#theme-toggler');
let toggle = document.querySelector('.theme');
let bg = document.querySelector('.bg');

theme.onclick = () => {
    toggle.classList.toggle('active');
    bg.classList.toggle('active');
}

let themeColor = document.querySelectorAll('.bg span');
    themeColor.forEach(color => color.addEventListener('click', () =>{
        let background = color.style.background;
        document.querySelector('body').style.background = background;
}));

let mess = document.querySelector('.message');

function copy(text) {
    document.body.insertAdjacentHTML("beforeend","<div id=\"copy\" contenteditable>"+text+"</div>");
    document.getElementById("copy").focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    document.getElementById("copy").remove();
}


