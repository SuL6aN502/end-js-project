// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let body = document.body;
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let header = document.createElement("header");
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
// ------------------------------------------------------------
let main = document.createElement("main");
// ---------------------------------------------------------------------
let sect_3 = document.createElement("section");
let img_sect3 = document.createElement("div");
let hgroup3 = document.createElement("hgroup");
let h2_hgtoup3 = document.createElement("h2");
let p_hgtoup3 = document.createElement("p");
// ------------------------------------------------------
let sect_2 = document.createElement("section");
let card1 = document.createElement("div");
let img_card1 = document.createElement("img");
let title_card1 = document.createElement("h2");
let p_card1 = document.createElement("p");
let btn_card1 = document.createElement("button");
let hgroup2 = document.createElement("hgroup");
let card_title = document.createElement("h3");
let card2 = document.createElement("div");
let title_card2 = document.createElement("h2");
let p_card2 = document.createElement("p");
let btn_card2 = document.createElement("button");
let hgroup4 = document.createElement("hgroup");
let card_title1 = document.createElement("h3");
let card3 = document.createElement("div");
// ----------------------------------------------------------------
let sect_1 = document.createElement("section");
let fast_btn1 = document.createElement("button");
let big_div_imgs = document.createElement("div");
let img_div = document.createElement("div");
let img_home1 = document.createElement("div");
let img_home2 = document.createElement("div");
let hgroup1 = document.createElement("hgroup");
let title = document.createElement("h1");
let btn1 = document.createElement("a");
let p1 = document.createElement("p");
// ------------------------------------------------------------------------------------------------
let footer = document.createElement("footer");
let every = document.createElement('h4');
let date = new Date ().getFullYear();
// ---------------------------------------------------------------------------
let form = document.createElement('form');
let input1 = document.createElement('input');
let input1_card = document.createElement('input');
let tow_Element = document.createElement('div');
let input1_123 = document.createElement('input');
let input1_history = document.createElement('input');


let label1 = document.createElement('label');
let container_input = document.createElement('div');
let container_img = document.createElement('div');
let img1_form1 = document.createElement('img');
let img2_form1 = document.createElement('img');
let img3_form1 = document.createElement('img');

let sheckBox = document.createElement('input');
let label_check = document.createElement('div')
let btn3 = document.createElement('button');
let sect_1_pay = document.createElement('section')
let sect_2_pay = document.createElement('section')

// ------------------------------------------
body.appendChild(header);
nav.appendChild(logo);
logo.innerHTML = "تآزرَ";
logo.addEventListener('click' ,function(){
    main.appendChild(sect_1);
    main.appendChild(sect_2);
    main.appendChild(sect_3);
    main.removeChild(sect_1_pay);
    main.removeChild(sect_2_pay);
    sect_2.appendChild(card1);
    sect_2.appendChild(card2);
    main.style.height = 'auto';
    main.style.flexDirection = 'column';
    main.style.justifyContent = 'auto';
    main.style.flexDirection = 'column';
    main.style.alignItems = 'auto';
    
  
  })
logo.setAttribute("data-aos", "fade-right");
// -----------------------------------
header.appendChild(nav);
nav.appendChild(ul);
ul.setAttribute("data-aos", "fade-left");
// -------------
ul.appendChild(li4);
li4.appendChild(a4);
a4.href = "#";
a4.innerHTML = "احصائيات";
// -------------
ul.appendChild(li3);
li3.appendChild(a3);
a3.href = "#";
a3.innerHTML = "من نحن";
// -------------------------Products-------------------------
let sect_1_Products1 = document.createElement('section');

ul.appendChild(li2);
li2.appendChild(a2);
a2.href = "#";
a2.innerHTML = "المنتجات";
a2.addEventListener('click' , ()=>{
  main.appendChild(sect_1_Products1);
  sect_1_Products1.classList.add('sect_1_Products1');
  main.removeChild(sect_1);
  main.removeChild(sect_2);
  main.removeChild(sect_3);

})
// -----------------------------------------------------------------------
ul.appendChild(li1);
li1.appendChild(a1);
a1.href = "#";
a1.innerHTML = "الصفحة الرئيسية";
a1.classList.add('finish-border')
a1.addEventListener('click' ,function(){
  main.appendChild(sect_1);
  main.appendChild(sect_2);
  main.appendChild(sect_3);
  main.removeChild(sect_1_pay);
  main.removeChild(sect_2_pay);
  sect_2.appendChild(card1);
  sect_2.appendChild(card2);
  main.style.height = 'auto';
  main.style.flexDirection = 'column';
  main.style.justifyContent = 'auto';
  main.style.flexDirection = 'column';
  main.style.alignItems = 'auto';
  

})
// -------------

// ------------------------------------------
body.appendChild(main);
main.appendChild(fast_btn1);
// --------------------------------------------------------------------------------------------------------------------------------
fast_btn1.addEventListener('click' , ()=>{
main.removeChild(sect_1);
main.appendChild(sect_1_pay);
main.appendChild(sect_2_pay);
sect_2_pay.classList.add('sect-2-edit1')
sect_1_pay.classList.add('sect-1-edit1');
main.removeChild(sect_2);
main.removeChild(sect_3);
sect_2.appendChild(card1);
sect_2.appendChild(card2);
main.style.height = '100vh';
main.style.justifyContent = 'center';
main.style.flexDirection = 'row';
main.style.alignItems = 'center';
// ------------------------------------------------------

sect_2_pay.appendChild(form);
form.classList.add('form1');
form.appendChild(container_img);
container_img.classList.add('container_img');
container_img.appendChild(img1_form1);
container_img.appendChild(img2_form1);
container_img.appendChild(img3_form1);
img1_form1.src = 'imges/apply pay.png';
img2_form1.src = 'imges/paypal.png';
img3_form1.src = 'imges/google-pay.png';
container_input.classList.add('container_input');
label1.innerHTML = 'ادخال البطاقة';
label1.style.textAlign = 'right';
label1.style.width = '100%';
label1.htmlFor = 'input1';

form.appendChild(container_input);
container_input.appendChild(input1);
container_input.appendChild(label_check);
label_check.appendChild(label1);
label_check.appendChild(sheckBox);
label_check.classList.add('label_check');
sheckBox.id = 'input1';
sheckBox.type = 'checkbox';
sheckBox.classList.add('sheckBox1');
input1.type = 'text';
input1.placeholder = 'ادخل المبلغ';
let tow_Element_rel = document.createElement('div');
sheckBox.checked = false;
tow_Element.appendChild(input1_card);
tow_Element.appendChild(tow_Element_rel);
tow_Element_rel.appendChild(input1_123);
tow_Element_rel.appendChild(input1_history);
input1_card.placeholder = '0000 0000 0000 0000';
input1_history.placeholder = 'yy/mm';
input1_123.placeholder = '123';
tow_Element_rel.classList.add('tow_Element_rel');
tow_Element.classList.add('tow_Element');
input1_123.classList.add('input1_123');
input1_card.classList.add('input1_card');
input1_history.classList.add('input1_history')
input1.classList.add('input1');


sheckBox.addEventListener('click', () =>{

if(sheckBox.checked == true){
  form.appendChild(tow_Element);

}else{
  form.removeChild(input1_card);
  form.removeChild(tow_Element);
}
})



form.appendChild(btn3)
btn3.innerHTML = 'تبرع الان';
})
// --------------------------------------------------------------------------------------------------------------------------------
fast_btn1.setAttribute("data-aos", "fade-right");
fast_btn1.innerHTML = "تبرع سريع";
fast_btn1.classList.add("fast-btn1");
main.appendChild(sect_1);
sect_1.appendChild(hgroup1);
hgroup1.appendChild(title);
let i = 0;
let x = 0;
let txt = 'تآزرَ';
let txt1 = 'نتأزر معاً لماء يكفي الجميع';
let speed = 160;
function typeWriter() {
  if (i < txt.length) {
    title.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (x < txt1.length) {
    p1.innerHTML += txt1.charAt(x);
    x++;
    setTimeout(typeWriter, 400);
  }
}
typeWriter();
title.setAttribute("data-aos", "fade-right");
hgroup1.appendChild(p1);
p1.setAttribute("data-aos", "fade-left");
hgroup1.appendChild(btn1);
btn1.innerHTML = "المزيد";
btn1.setAttribute("data-aos", "fade-up");
btn1.href = "#sect-3";
// -----------------------------------
img_home1.classList.add("img-div1");
img_home1.setAttribute("data-aos", "zoom-in");
// ---------------------------------------------

// --------------------------------------------------
main.appendChild(sect_2);
sect_2.appendChild(card1);
card1.appendChild(hgroup2);
card1.appendChild(card_title);
hgroup2.appendChild(p_card1);
hgroup2.appendChild(btn_card1);
title_card1.innerHTML = "أسم المنتج";
p_card1.innerHTML = "نقدم حلول مستدامة واكثر فائدة وقيمة لأخواننا";
btn_card1.innerHTML = "تبرع";
card_title.innerHTML = "خدمات التبرع";
// ----------------------------------------------------------------------------
sect_2.appendChild(card2);
card2.appendChild(hgroup4);
card2.appendChild(card_title1);
hgroup4.appendChild(p_card2);
hgroup4.appendChild(btn_card2);
title_card2.innerHTML = "أسم المنتج";
p_card2.innerHTML = "خدماتنا لتحلية المياة في اطار مصنعي هي الافضل من نوعها, نحن نفوز في معادة التكلفة مقابل الاداء";
btn_card2.innerHTML = "المزيد";
card_title1.innerHTML = "الخدمات المؤسسية";
card1.setAttribute("data-aos", "fade-up-right");
card2.setAttribute("data-aos", "fade-up-left");
// --------------------------------------------------
main.appendChild(sect_3);
sect_3.id = "sect-3";
sect_3.appendChild(img_sect3);
img_sect3.classList.add("img-sect3");
img_sect3.setAttribute("data-aos", "fade-left");
sect_3.appendChild(hgroup3);
hgroup3.appendChild(h2_hgtoup3);
hgroup3.setAttribute("data-aos", "fade-right");
h2_hgtoup3.innerHTML = "أزِرهم";
hgroup3.appendChild(p_hgtoup3);
p_hgtoup3.innerHTML = "تبرع لهم بمى يخفف عنهم ويقلل من معاناتهم";
// ----------------------------------------------------------------
sect_1.className = "sect-1";
sect_2.className = "sect-2";
sect_3.className = "sect-3";
// -------------------------------------------------------------------
body.appendChild(footer);
footer.appendChild(every);

every.innerHTML = `جميع الحقوق محفوظة © ${date}`