// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let body = document.body;
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let header = document.createElement('header');

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
let every = document.createElement("h4");
let date = new Date().getFullYear();
// ---------------------------------------------------------------------------
let form = document.createElement("form");
let input1 = document.createElement("input");
let input1_card = document.createElement("input");
let tow_Element = document.createElement("div");
let input1_123 = document.createElement("input");
let input1_history = document.createElement("input");

let label1 = document.createElement("label");
let container_input = document.createElement("div");
let container_img = document.createElement("div");
let img1_form1 = document.createElement("img");
let img2_form1 = document.createElement("img");
let img3_form1 = document.createElement("img");

let sheckBox = document.createElement("input");
let label_check = document.createElement("div");
let btn3 = document.createElement("button");
let sect_1_pay = document.createElement("section");
let sect_2_pay = document.createElement("section");
// --------------------------------------------------------------------------
let sect_1_Products1 = document.createElement("section");
let sect_2_Products1 = document.createElement("section");
let accont = document.createElement("i");
let basket = document.createElement("i");
a2.href = "#";
a2.innerHTML = "المنتجات";
let card_Products1 = document.createElement("section");
let img1_products1 = document.createElement("img");
img1_products1.src = "./imges/batl.png";
let container_products = document.createElement("div");
let h1_products1 = document.createElement("h2");
h1_products1.innerHTML = "حوض فلترة المياة ";
let p1_products1 = document.createElement("p");
p1_products1.innerHTML = "19.99$";
let btn1_products1 = document.createElement("button");
btn1_products1.innerHTML = "اضف الى السلة";
// ------------------------------
let card_Products2 = document.createElement("div");
let img2_products1 = document.createElement("img");
img2_products1.src = "./imges/batl2.png";
let container_products2 = document.createElement("div");
let h2_products1 = document.createElement("h2");
h2_products1.innerHTML = "طشاش الفلترة";
let p2_products1 = document.createElement("p");
p2_products1.innerHTML = "4.99$";
let btn2_products1 = document.createElement("button");
btn2_products1.innerHTML = "اضف الى السلة";
// ------------------------------
let card_Products3 = document.createElement("div");
let img3_products1 = document.createElement("img");
img3_products1.src = "./imges/batl3.jpg";
let container_products3 = document.createElement("div");
let h3_products1 = document.createElement("h2");
h3_products1.innerHTML = "الفلتر السريع";
let p3_products1 = document.createElement("p");
p3_products1.innerHTML = "9.99$";
let btn3_products1 = document.createElement("button");
btn3_products1.innerHTML = "اضف الى السلة";
// ------------------------------
let card_Products4 = document.createElement("div");
let img4_products1 = document.createElement("img");
img4_products1.src = "./imges/batl4.jpg";
let container_products4 = document.createElement("div");
let h4_products1 = document.createElement("h2");
h4_products1.innerHTML = "الحياة النقية";
let p4_products1 = document.createElement("p");
p4_products1.innerHTML = "29.99$";
let btn4_products1 = document.createElement("button");
btn4_products1.innerHTML = "اضف الى السلة";
// ---------------------------------------------------------------------------------------------------------------------------
body.appendChild(header);
nav.appendChild(logo);
logo.innerHTML = "صفاء";
logo.addEventListener("click", function () {
  sect_1_statistics.style.display = 'none';
  main.appendChild(sect_1);
  main.appendChild(sect_2);
  main.appendChild(sect_3);
  sect_1_our.style.display = "none";
  sect_1.style.display = "flex";
  sect_2.style.display = "flex";
  sect_3.style.display = "flex";
  sect_1_pay.style.display = "none";
  sect_2_pay.style.display = "none";
  sect_2.appendChild(card1);
  sect_2.appendChild(card2);
  main.style.height = "auto";
  main.style.flexDirection = "column";
  main.style.justifyContent = "auto";
  main.style.flexDirection = "column";
  main.style.alignItems = "auto";
  sect_1_Products1.style.display = "none";
  sect_2_Products1.style.display = "none";
});
logo.setAttribute("data-aos", "fade-right");
// -----------------------------------
header.appendChild(nav);
nav.appendChild(ul);
ul.setAttribute("data-aos", "fade-left");
// -------------
ul.appendChild(li3);
li3.appendChild(a3);
a3.href = "#";
a3.innerHTML = "من نحن";
let sect_1_our = document.createElement("section");
sect_1_our.classList.add("sect_1_our");
let img1_our = document.createElement("img");
img1_our.src = "./imges/company.svg";
sect_1_our.appendChild(img1_our);
let hgroup5 = document.createElement("hgroup");
let h2_hgroup5 = document.createElement("h2");
h2_hgroup5.innerHTML = "!عنا";
let p_hgroup5 = document.createElement("p");
p_hgroup5.innerHTML =
  "شركة صفاء لتحيلة المياة حي شكرة عريقة نشئت سنة 1939 ومرت شركة صفاء بمرحل عديدة وتطورت ونمت وتوجهت بمنتجاتها وخدماتها نحو الافراد واصبحت الاولى من نوعها اليوم شركة صفاء هي من اكبر واعرق الشركات تحتل الشركة كقيمة سوقية 190 مليار ريال سعودي";
hgroup5.classList.add("hgroup5");
sect_1_our.appendChild(hgroup5);
hgroup5.appendChild(h2_hgroup5);
hgroup5.appendChild(p_hgroup5);
a3.onclick = () => {
  sect_1.style.display = "none";
  sect_2.style.display = "none";
  sect_3.style.display = "none";
  sect_1_Products1.style.display = "none";
  sect_2_Products1.style.display = "none";
  sect_1_pay.style.display = "none";
  sect_2_pay.style.display = "none";
  // --------------------------------------------------
  main.appendChild(sect_1_our);
  sect_1_our.style.display = "flex";
  sect_1_statistics.style.display = 'none';
};
// ---------------------
for(let i =0 ; i <= 10 ; i++){
  console.log(i);
}if(sect_1 == ''){
  console.log('wow')
}
// -------------
ul.appendChild(li4);
li4.appendChild(a4);
a4.href = "#";
a4.innerHTML = "التوظيف";
let sect_1_statistics =document.createElement('section')
sect_1_statistics.classList.add('sect_1_statistics')
main.appendChild(sect_1_statistics);
let hgroup6 = document.createElement('hgroup');
let h2_hgroup6 = document.createElement('h2');
let p_hgroup6 = document.createElement('p');
let btn6 =document.createElement('button');
btn6.addEventListener('click' , () =>{

})
h2_hgroup6.innerHTML = '!التوظيف'; 
p_hgroup6.innerHTML = 'نهتم بتوظيف الكفاءات والمواهب الرائدة في المجال والتي تطورنا ونطورها'; 
let img1_todef = document.createElement('img');
sect_1_statistics.appendChild(img1_todef);
sect_1_statistics.appendChild(hgroup6);
hgroup6.appendChild(h2_hgroup6);
hgroup6.appendChild(p_hgroup6);
hgroup6.appendChild(btn6);
btn6.innerHTML = 'المزيد';

img1_todef.src = './imges/employment.svg';
img1_todef.style.width = '45%'
a4.onclick = () => {
  sect_1.style.display = "none";
  sect_2.style.display = "none";
  sect_3.style.display = "none";
  sect_1_Products1.style.display = "none";
  sect_2_Products1.style.display = "none";
  sect_1_pay.style.display = "none";
  sect_2_pay.style.display = "none";
  sect_1_our.style.display ='none';
  sect_1_statistics.style.display = 'flex';
  
}
// -------------------------Products-------------------------

accont.className = "fa-solid fa-user";
basket.className = "fa-solid fa-basket-shopping";
ul.appendChild(li2);
li2.appendChild(a2);

a2.addEventListener("click", () => {
  sect_1_statistics.style.display = 'none';
  sect_1_Products1.style.display = "flex";
  main.style.flexDirection = "column";
  sect_1_our.style.display = "none";
  sect_1_Products1.appendChild(accont);
  sect_1_Products1.appendChild(basket);
  sect_2_Products1.style.display = "flex";
  sect_1_Products1.classList.add("sect_1_Products1");
  sect_2_Products1.classList.add("sect_2_Products1");
  // --------------------------------
  sect_2_Products1.appendChild(card_Products1);
  card_Products1.appendChild(img1_products1);
  card_Products1.appendChild(container_products);
  container_products.className = "container_products";

  container_products.appendChild(h1_products1);
  container_products.appendChild(p1_products1);
  container_products.appendChild(btn1_products1);
  // -----------------------------------------------
  sect_2_Products1.appendChild(card_Products2);
  card_Products2.appendChild(img2_products1);
  card_Products2.appendChild(container_products2);
  container_products2.className = "container_products";

  container_products2.appendChild(h2_products1);
  container_products2.appendChild(p2_products1);
  container_products2.appendChild(btn2_products1);
  // -----------------------------------------------------------
  sect_2_Products1.appendChild(card_Products3);
  card_Products3.appendChild(img3_products1);
  card_Products3.appendChild(container_products3);
  container_products3.className = "container_products";

  container_products3.appendChild(h3_products1);
  container_products3.appendChild(p3_products1);
  container_products3.appendChild(btn3_products1);
  // -----------------------------------------------------------
  sect_2_Products1.appendChild(card_Products4);
  card_Products4.appendChild(img4_products1);
  card_Products4.appendChild(container_products4);
  container_products4.className = "container_products";

  container_products4.appendChild(h4_products1);
  container_products4.appendChild(p4_products1);
  container_products4.appendChild(btn4_products1);
  // --------------------------------
  card_Products1.classList.add("cards_Products1");
  card_Products2.classList.add("cards_Products1");
  card_Products3.classList.add("cards_Products1");
  card_Products4.classList.add("cards_Products1");
  sect_1.style.display = "none";
  sect_2.style.display = "none";
  sect_3.style.display = "none";
  sect_1_pay.style.display = "none";
  sect_2_pay.style.display = "none";
});
// -----------------------------------------------------------------------
ul.appendChild(li1);
li1.appendChild(a1);
a1.href = "#";
a1.innerHTML = "الصفحة الرئيسية";
a1.classList.add("finish-border");
a1.addEventListener("click", function () {
  sect_1_statistics.style.display = 'none';
  main.appendChild(sect_1);
  main.appendChild(sect_2);
  main.appendChild(sect_3);
  sect_1_our.style.display = "none";
  sect_1.style.display = "flex";
  sect_2.style.display = "flex";
  sect_3.style.display = "flex";
  sect_1_pay.style.display = "none";
  sect_2_pay.style.display = "none";
  sect_2.appendChild(card1);
  sect_2.appendChild(card2);
  main.style.height = "auto";
  main.style.flexDirection = "column";
  main.style.justifyContent = "auto";
  main.style.flexDirection = "column";
  main.style.alignItems = "auto";
  sect_1_Products1.style.display = "none";
  sect_2_Products1.style.display = "none";
});
// -------------


// ------------------------------------------
body.appendChild(main);
main.appendChild(fast_btn1);
// --------------------------------------------------------------------------------------------------------------------------------
fast_btn1.addEventListener("click", () => {
  sect_1_statistics.style.display = 'none';
  sect_1_pay.style.display = "flex";
  sect_2_pay.style.display = "flex";
  sect_1.style.display = "none";
  sect_1_our.style.display = "none";
  sect_2.style.display = "none";
  sect_3.style.display = "none";
  sect_1_Products1.style.display = "none";
  sect_2_Products1.style.display = "none";
  sect_2_pay.classList.add("sect-2-edit1");
  sect_1_pay.classList.add("sect-1-edit1");
  sect_2.appendChild(card1);
  sect_2.appendChild(card2);
  main.style.height = "auto";
  main.style.flexDirection = "row";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
  // ------------------------------------------------------
  sect_2_pay.appendChild(form);
  form.classList.add("form1");
  form.appendChild(container_img);
  container_img.classList.add("container_img");
  container_img.appendChild(img1_form1);
  container_img.appendChild(img2_form1);
  container_img.appendChild(img3_form1);
  img1_form1.src = "imges/apply pay.png";
  img2_form1.src = "imges/paypal.png";
  img3_form1.src = "imges/google-pay.png";
  container_input.classList.add("container_input");
  label1.innerHTML = "ادخال البطاقة";
  label1.style.textAlign = "right";
  label1.style.width = "100%";
  label1.htmlFor = "input1";

  form.appendChild(container_input);
  container_input.appendChild(input1);
  container_input.appendChild(label_check);
  label_check.appendChild(label1);
  label_check.appendChild(sheckBox);
  label_check.classList.add("label_check");
  sheckBox.id = "input1";
  sheckBox.type = "checkbox";
  sheckBox.classList.add("sheckBox1");
  input1.type = "text";
  input1.placeholder = "ادخل المبلغ";
  let tow_Element_rel = document.createElement("div");
  sheckBox.checked = false;
  tow_Element.appendChild(input1_card);
  tow_Element.appendChild(tow_Element_rel);
  tow_Element_rel.appendChild(input1_123);
  tow_Element_rel.appendChild(input1_history);
  input1_card.placeholder = "0000 0000 0000 0000";
  input1_history.placeholder = "yy/mm";
  input1_123.placeholder = "123";
  tow_Element_rel.classList.add("tow_Element_rel");
  tow_Element.classList.add("tow_Element");
  input1_123.classList.add("input1_123");
  input1_card.classList.add("input1_card");
  input1_history.classList.add("input1_history");
  input1.classList.add("input1");

  sheckBox.addEventListener("click", () => {
    if (sheckBox.checked == true) {
      form.appendChild(tow_Element);
    } else {
      form.removeChild(tow_Element);
    }
  });

  label1.addEventListener("click", () => {
    if (sheckBox.checked == true) {
      form.appendChild(tow_Element);
    } else {
      form.removeChild(tow_Element);
    }
  });

  form.appendChild(btn3);
  btn3.innerHTML = "تبرع الان";
});

// --------------------------------------------------------------------------------------------------------------------------------
fast_btn1.setAttribute("data-aos", "fade-right");
fast_btn1.innerHTML = "تبرع سريع";
fast_btn1.classList.add("fast-btn1");
main.appendChild(sect_1);
sect_1.appendChild(hgroup1);
hgroup1.appendChild(title);
let i = 0;
let x = 0;
let txt = "تآزرَ";
let txt1 = "نتأزر معاً لماء يكفي الجميع";
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
// ----------------------------------------------------------------------------------------
btn_card1.innerHTML = "تبرع";
btn_card1.addEventListener("click", () => {
  sect_1_statistics.style.display = 'none';
  sect_1_pay.style.display = "flex";
  sect_2_pay.style.display = "flex";
  sect_1.style.display = "none";
  sect_1_our.style.display = "none";
  sect_2.style.display = "none";
  sect_3.style.display = "none";
  sect_1_Products1.style.display = "none";
  sect_2_Products1.style.display = "none";
  sect_2_pay.classList.add("sect-2-edit1");
  sect_1_pay.classList.add("sect-1-edit1");
  sect_2.appendChild(card1);
  sect_2.appendChild(card2);
  main.style.height = "auto";
  main.style.flexDirection = "row";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
  // ------------------------------------------------------
  sect_2_pay.appendChild(form);
  form.classList.add("form1");
  form.appendChild(container_img);
  container_img.classList.add("container_img");
  container_img.appendChild(img1_form1);
  container_img.appendChild(img2_form1);
  container_img.appendChild(img3_form1);
  img1_form1.src = "imges/apply pay.png";
  img2_form1.src = "imges/paypal.png";
  img3_form1.src = "imges/google-pay.png";
  container_input.classList.add("container_input");
  label1.innerHTML = "ادخال البطاقة";
  label1.style.textAlign = "right";
  label1.style.width = "100%";
  label1.htmlFor = "input1";

  form.appendChild(container_input);
  container_input.appendChild(input1);
  container_input.appendChild(label_check);
  label_check.appendChild(label1);
  label_check.appendChild(sheckBox);
  label_check.classList.add("label_check");
  sheckBox.id = "input1";
  sheckBox.type = "checkbox";
  sheckBox.classList.add("sheckBox1");
  input1.type = "text";
  input1.placeholder = "ادخل المبلغ";
  let tow_Element_rel = document.createElement("div");
  sheckBox.checked = false;
  tow_Element.appendChild(input1_card);
  tow_Element.appendChild(tow_Element_rel);
  tow_Element_rel.appendChild(input1_123);
  tow_Element_rel.appendChild(input1_history);
  input1_card.placeholder = "0000 0000 0000 0000";
  input1_history.placeholder = "yy/mm";
  input1_123.placeholder = "123";
  tow_Element_rel.classList.add("tow_Element_rel");
  tow_Element.classList.add("tow_Element");
  input1_123.classList.add("input1_123");
  input1_card.classList.add("input1_card");
  input1_history.classList.add("input1_history");
  input1.classList.add("input1");

  sheckBox.addEventListener("click", () => {
    if (sheckBox.checked == true) {
      form.appendChild(tow_Element);
    } else {
      form.removeChild(tow_Element);
    }
  });

  label1.addEventListener("click", () => {
    if (sheckBox.checked == true) {
      form.appendChild(tow_Element);
    } else {
      form.removeChild(tow_Element);
    }
  });

  form.appendChild(btn3);
  btn3.innerHTML = "تبرع الان";
});
main.appendChild(sect_1);
main.appendChild(sect_2);
main.appendChild(sect_3);
main.appendChild(sect_1_pay);
main.appendChild(sect_2_pay);
main.appendChild(sect_1_Products1);
main.appendChild(sect_2_Products1);
sect_1.style.display = "flex";
sect_2.style.display = "flex";
sect_3.style.display = "flex";
sect_1_pay.style.display = "none";
sect_2_pay.style.display = "none";
sect_1_Products1.style.display = "none";
sect_1_our.style.display ='none'
sect_1_statistics.style.display ='none'
// -----------------------------------
// ----------------------------------------------------------------------------------------
sect_1_pay.style.display = "flex";
sect_2_pay.style.display = "flex";
sect_1.style.display = "none";
sect_1_our.style.display = "none";
sect_2.style.display = "none";
sect_3.style.display = "none";
sect_1_Products1.style.display = "none";
sect_2_Products1.style.display = "none";
sect_2_pay.classList.add("sect-2-edit1");
sect_1_pay.classList.add("sect-1-edit1");
sect_2.appendChild(card1);
sect_2.appendChild(card2);
main.style.height = "auto";
main.style.flexDirection = "row";
main.style.justifyContent = "center";
main.style.alignItems = "center";

// ------------------------------------------------------
sect_2_pay.appendChild(form);
form.classList.add("form1");
form.appendChild(container_img);
container_img.classList.add("container_img");
container_img.appendChild(img1_form1);
container_img.appendChild(img2_form1);
container_img.appendChild(img3_form1);
img1_form1.src = "imges/apply pay.png";
img2_form1.src = "imges/paypal.png";
img3_form1.src = "imges/google-pay.png";
container_input.classList.add("container_input");
label1.innerHTML = "ادخال البطاقة";
label1.style.textAlign = "right";
label1.style.width = "100%";
label1.htmlFor = "input1";

form.appendChild(container_input);
container_input.appendChild(input1);
container_input.appendChild(label_check);
label_check.appendChild(label1);
label_check.appendChild(sheckBox);
label_check.classList.add("label_check");
sheckBox.id = "input1";
sheckBox.type = "checkbox";
sheckBox.classList.add("sheckBox1");
input1.type = "text";
input1.placeholder = "ادخل المبلغ";
let tow_Element_rel = document.createElement("div");
sheckBox.checked = false;
tow_Element.appendChild(input1_card);
tow_Element.appendChild(tow_Element_rel);
tow_Element_rel.appendChild(input1_123);
tow_Element_rel.appendChild(input1_history);
input1_card.placeholder = "0000 0000 0000 0000";
input1_history.placeholder = "yy/mm";
input1_123.placeholder = "123";
tow_Element_rel.classList.add("tow_Element_rel");
tow_Element.classList.add("tow_Element");
input1_123.classList.add("input1_123");
input1_card.classList.add("input1_card");
input1_history.classList.add("input1_history");
input1.classList.add("input1");

sheckBox.addEventListener("click", () => {
  if (sheckBox.checked == true) {
    form.appendChild(tow_Element);
  } else {
    form.removeChild(tow_Element);
  }
});

label1.addEventListener("click", () => {
  if (sheckBox.checked == true) {
    tow_Element.style.display = 'flex';
  } else {
    tow_Element.style.display = 'none'
  }
});

form.appendChild(btn3);
btn3.innerHTML = "تبرع الان";

card_title.innerHTML = "خدمات التبرع";
// ----------------------------------------------------------------------------
sect_2.appendChild(card2);
card2.appendChild(hgroup4);
card2.appendChild(card_title1);
hgroup4.appendChild(p_card2);
hgroup4.appendChild(btn_card2);
title_card2.innerHTML = "أسم المنتج";
p_card2.innerHTML ="منتجاتنا لتحلية المياة هي الافضل من نوعها, نحن نفوز في معادة التكلفة مقابل الاداء";
btn_card2.innerHTML = "المزيد";
// ----------------------------------------------------------------------------------------
btn_card2.addEventListener("click", () => {
  sect_1_statistics.style.display = 'none';
  sect_1_Products1.style.display = "flex";
  main.style.flexDirection = "column";
  sect_1_our.style.display = "none";
  sect_1_Products1.appendChild(accont);
  sect_1_Products1.appendChild(basket);
  sect_2_Products1.style.display = "flex";
  sect_1_Products1.classList.add("sect_1_Products1");
  sect_2_Products1.classList.add("sect_2_Products1");
  // --------------------------------
  sect_2_Products1.appendChild(card_Products1);
  card_Products1.appendChild(img1_products1);
  card_Products1.appendChild(container_products);
  container_products.className = "container_products";

  container_products.appendChild(h1_products1);
  container_products.appendChild(p1_products1);
  container_products.appendChild(btn1_products1);
  // -----------------------------------------------
  sect_2_Products1.appendChild(card_Products2);
  card_Products2.appendChild(img2_products1);
  card_Products2.appendChild(container_products2);
  container_products2.className = "container_products";

  container_products2.appendChild(h2_products1);
  container_products2.appendChild(p2_products1);
  container_products2.appendChild(btn2_products1);
  // -----------------------------------------------------------
  sect_2_Products1.appendChild(card_Products3);
  card_Products3.appendChild(img3_products1);
  card_Products3.appendChild(container_products3);
  container_products3.className = "container_products";

  container_products3.appendChild(h3_products1);
  container_products3.appendChild(p3_products1);
  container_products3.appendChild(btn3_products1);
  // -----------------------------------------------------------
  sect_2_Products1.appendChild(card_Products4);
  card_Products4.appendChild(img4_products1);
  card_Products4.appendChild(container_products4);
  container_products4.className = "container_products";

  container_products4.appendChild(h4_products1);
  container_products4.appendChild(p4_products1);
  container_products4.appendChild(btn4_products1);
  // --------------------------------
  card_Products1.classList.add("cards_Products1");
  card_Products2.classList.add("cards_Products1");
  card_Products3.classList.add("cards_Products1");
  card_Products4.classList.add("cards_Products1");
  sect_1.style.display = "none";
  sect_2.style.display = "none";
  sect_3.style.display = "none";
  sect_1_pay.style.display = "none";
  sect_2_pay.style.display = "none";
});

// -----------------------------------------------------------------------------
card_title1.innerHTML = "منتجاتنا";
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

every.innerHTML = `جميع الحقوق محفوظة © ${date}`;
