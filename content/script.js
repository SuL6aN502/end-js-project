
// -------------------------------------------------------------------------------------------------------
let body = document.body;
let header = document.createElement("header");
let footer = document.createElement("footer");
let main = document.createElement("main");
// ---------------------------------------------------------------------
let sect_3 = document.createElement("section");
let img_sect3 =document.createElement('div');
let hgroup3 = document.createElement('hgroup');
let h2_hgtoup3 = document.createElement('h2')
let p_hgtoup3 = document.createElement('p')
// ------------------------------------------------------
let sect_2 = document.createElement("section");
let card1 = document.createElement("div");
let img_card1 = document.createElement('img');
let title_card1 = document.createElement('h2')
let p_card1 = document.createElement('p')
let btn_card1 = document.createElement('button')
let hgroup2 = document.createElement('hgroup')
let price = document.createElement('h3')
let card2 = document.createElement("div");
let card3 = document.createElement("div");
// ----------------------------------------------------------------
let sect_1 = document.createElement("section");
let fast_btn1 = document.createElement('button')
let big_div_imgs = document.createElement("div");
let img_div = document.createElement("div");
let img_home1 = document.createElement("div");
let img_home2 = document.createElement("div");
let hgroup1 = document.createElement("hgroup");
let title = document.createElement("h1");
let btn1 = document.createElement("a");
let p1 = document.createElement("p");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let a1 = document.createElement("a");
let li2 = document.createElement("li");
let a2 = document.createElement("a");
let li3 = document.createElement("li");
let a3 = document.createElement("a");
let li4 = document.createElement("li");
let a4 = document.createElement("a");
let logo = document.createElement("h2");
// let i = 0;
// let x = 0;
// let txt = 'أسم المشروع';
// let txt1 = 'نبذة بسيطه عن المشروع تحتوي على اساسيات ومن نحن بسيط';
// let speed = 160;
// function typeWriter() {
//   if (i < txt.length) {
//     title.innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
//   if (x < txt1.length) {
//     p1.innerHTML += txt1.charAt(x);
//     x++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();

// ------------------------------------------
body.appendChild(header);
header.appendChild(logo);
logo.innerHTML = "أزر";
// -----------------------------------
header.appendChild(nav);
nav.appendChild(ul);
// -------------
ul.appendChild(li4);
li4.appendChild(a4);
a4.href = "#";
a4.innerHTML = "احصائيات";
a4.href = "#";
// -------------
ul.appendChild(li3);
li3.appendChild(a3);
a3.href = "#";
a3.innerHTML = "من نحن";
ul.appendChild(li2);
li2.appendChild(a2);
a2.href = "#";
a2.innerHTML = "المنتجات";
// -------------
ul.appendChild(li1);
li1.appendChild(a1);
a1.href = "#";
a1.innerHTML = "الصفحة الرئيسية";
// -------------

// ------------------------------------------
body.appendChild(main);
main.appendChild(fast_btn1);
fast_btn1.innerHTML = 'تبرع سريع'
fast_btn1.classList.add('fast-btn1')
body.appendChild(footer);
main.appendChild(sect_1);
sect_1.appendChild(hgroup1);
hgroup1.appendChild(title);
title.innerHTML = "أزِر";
title.setAttribute("data-aos", "zoom-in");
hgroup1.appendChild(p1);
p1.innerHTML = "كلام حول الشركة وعملها ومبادراتها نبذة بسيطة يعني";
p1.setAttribute("data-aos", "zoom-in");
hgroup1.appendChild(btn1);
btn1.innerHTML = "المزيد";
btn1.href = '#sect-3'
// -----------------------------------
img_home1.classList.add('img-div1');
img_home1.setAttribute("data-aos", "zoom-in");
// ---------------------------------------------

// --------------------------------------------------
main.appendChild(sect_2);
sect_2.appendChild(card1);
card1.appendChild(hgroup2)
card1.appendChild(img_card1);
img_card1.src = '/content/imges/img3.jpg';
img_card1.classList.add('img-card1');
hgroup2.appendChild(title_card1)
hgroup2.appendChild(p_card1)
hgroup2.appendChild(btn_card1)
hgroup2.appendChild(price)
title_card1.innerHTML = 'أسم المنتج'
p_card1.innerHTML = 'كلام حول المنتج وكيف ممكن يساعد الناس'
btn_card1.innerHTML = 'تبرع'
price.innerHTML = '3.9$'
sect_2.appendChild(card2);
sect_2.appendChild(card3);
card1.setAttribute("data-aos", "zoom-in");
card2.setAttribute("data-aos", "zoom-in");
card3.setAttribute("data-aos", "zoom-in");

// --------------------------------------------------
main.appendChild(sect_3);
sect_3.id = 'sect-3'
sect_3.appendChild(img_sect3);
img_sect3.classList.add('img-sect3')
sect_3.appendChild(hgroup3);
hgroup3.appendChild(h2_hgtoup3);
h2_hgtoup3.innerHTML = 'أزِرهم';
hgroup3.appendChild(p_hgtoup3);
p_hgtoup3.innerHTML = 'تبرع لهم بمى يخفف عنهم ويقلل من معاناتهم'
// ----------------------------------------------------------------
sect_1.className = "sect-1";
sect_2.className = "sect-2";
sect_3.className = "sect-3";
