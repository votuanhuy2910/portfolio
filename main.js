// let navigationToggle = document.querySelector(".navigationToggle");
// let navigation = document.querySelector(".navigation");
// let header = document.querySelector('.header');

// navigationToggle.onclick = () => {
//     navigation.classList.toggle("active");
//     header.classList.toggle('active');
//     document.body.classList.toggle('active');

// };

// window.onscroll = () => {
//     if (window.innerWidth < 991) {
//         navigationToggle.classList.remove("active");
//         header.classList.remove("active");
//         document.body.classList.remove("active");
//     }

//     document.querySelectorAll('section').forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             document.querySelectorAll('.header .navigation ul .list a').forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.header .navigation ul list a[href*='+ id +']').classList.add('active')
//             });
//         }
//     })
// }

// let list = document.querySelectorAll(".list");
// function activeLink() {
//     list.forEach((item) => item.classList.remove("active"));
//     this.classList.add("active");
// }

// list.forEach((item) => item.addEventListener("click", activeLink));


let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});