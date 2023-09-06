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
  sect_1_more.style.display = 'none';
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
a3.onclick = () => {
  sect_1_more.style.display = 'none';
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
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
}
let sect_1_our = document.createElement("section");
sect_1_our.classList.add("sect_1_our");
let img1_our = document.createElement("img");
img1_our.src = "./imges/company.svg";
sect_1_our.appendChild(img1_our);
let hgroup5 = document.createElement("hgroup");
let h2_hgroup5 = document.createElement("h2");
h2_hgroup5.innerHTML = "!عنا";
let p_hgroup5 = document.createElement("p");
p_hgroup5.innerHTML = "شركة صفاء لتحيلة المياة حي شكرة عريقة نشئت سنة 1939 ومرت شركة صفاء بمرحل عديدة وتطورت ونمت وتوجهت بمنتجاتها وخدماتها نحو الافراد واصبحت الاولى من نوعها اليوم شركة صفاء هي من اكبر واعرق الشركات تحتل الشركة كقيمة سوقية 190 مليار ريال سعودي";
hgroup5.classList.add("hgroup5");
sect_1_our.appendChild(hgroup5);
hgroup5.appendChild(h2_hgroup5);
hgroup5.appendChild(p_hgroup5);

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



// btn6.addEventListener('click' , () =>{
//   sect_1.style.display = "none";
//   sect_2.style.display = "none";
//   sect_3.style.display = "none";
//   sect_1_Products1.style.display = "none";
//   sect_2_Products1.style.display = "none";
//   sect_1_pay.style.display = "none";
//   sect_2_pay.style.display = "none";
//   sect_1_our.style.display ='none';


// })
h2_hgroup6.innerHTML = '!التوظيف'; 
p_hgroup6.innerHTML = 'نهتم بتوظيف الكفاءات والمواهب الرائدة في المجال والتي تطورنا ونطورها'; 
let img1_todef = document.createElement('img');
sect_1_statistics.appendChild(img1_todef);
sect_1_statistics.appendChild(hgroup6);
hgroup6.appendChild(h2_hgroup6);
hgroup6.appendChild(p_hgroup6);
hgroup6.appendChild(btn6);
btn6.innerHTML = 'المزيد';



// --------------------------------------------------------------------------------------------------------------------------------
let sect_1_more = document.createElement('section');
sect_1_more.classList.add('sect_1_more');
let hgr_1 = document.createElement('hgroup');
let hgr_2 = document.createElement('hgroup');
let hgr_3 = document.createElement('hgroup');
let h2_hgr1 = document.createElement('h2');
let h2_hgr2 = document.createElement('h2');
let h2_hgr3 = document.createElement('h2');
let p_hgr1 = document.createElement('p');
let p_hgr2 = document.createElement('p');
let p_hgr3 = document.createElement('p');
h2_hgr1.innerHTML = 'المؤهلات الأكاديمية';
h2_hgr2.innerHTML = 'المهارات الأساسية';
h2_hgr3.innerHTML = 'التواصل';
p_hgr1.innerHTML = 'المؤهلات الأكاديمية: المهندسين: درجة البكالوريوس في الهندسة الكيميائية أو الهندسة الميكانيكية أو الهندسة البيئية أو ما يعادلها. يفضل أن يكون لديهم درجة الماجستير في مجال ذي صلة. الفنيين: درجة الدبلوم أو البكالوريوس في الكيمياء أو الفيزياء أو الهندسة أو ما يعادلها. الإدارة والمبيعات: درجة البكالوريوس في إدارة الأعمال أو التسويق أو مجال ذي صلة. الخبرة العملية: يفضل أن يكون للمتقدمين خبرة عمل سابقة في مجال تحلية المياه أو الصناعات الكيميائية أو الصناعات البترولية. يجب أن يكون لديهم القدرة على العمل في بيئة فريقية وعبر الأقسام المتعددة.';
p_hgr2.innerHTML = 'المهارات التقنية: معرفة جيدة بمعدات وأنظمة تحلية المياه. القدرة على قراءة وفهم الرسومات التقنية والمخططات. المهارات الإدارية: القدرة على التخطيط وتنظيم العمليات اليومية. القدرة على إدارة الموظفين والتنسيق مع الأقسام الأخرى. المهارات الشخصية: مهارات التواصل الجيدة، لفهم وتوصيل المعلومات بشكل فعال. القدرة على حل المشاكل واتخاذ القرارات بشكل مستقل. اللغات: القدرة على التواصل باللغة العربية بشكل فعال، سواء كتابياً أو شفوياً. القدرة على التواصل باللغة الانقليزية هي ميزة إضافية.';
p_hgr3.innerHTML = 'تستطيع التقديم على الشركة من خلال الارسال السيرة الذاتية وجمييع التفاصيل مثل  في الايميل الاتي Gbj6420@gmail.com';
sect_1_more.appendChild(hgr_1);
sect_1_more.appendChild(hgr_2);
sect_1_more.appendChild(hgr_3);
hgr_1.appendChild(h2_hgr1)
hgr_1.appendChild(p_hgr1)
hgr_2.appendChild(h2_hgr2)
hgr_2.appendChild(p_hgr2)
hgr_3.appendChild(h2_hgr3)
hgr_3.appendChild(p_hgr3)









main.appendChild(sect_1_more);
sect_1_more.style.display = 'none';

btn6.addEventListener('click', () =>{
  sect_1_more.style.display = 'none';
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
  sect_1.style.display = "none";
  sect_2.style.display = "none";
  sect_3.style.display = "none";
  sect_1_Products1.style.display = "none";
  sect_2_Products1.style.display = "none";
  sect_1_pay.style.display = "none";
  sect_2_pay.style.display = "none";
  sect_1_our.style.display ='none';
  sect_1_statistics.style.display = 'none';
  sect_1_more.style.display = 'flex';
  
});

img1_todef.src = './imges/employment.svg';
img1_todef.style.width = '45%'
a4.onclick = () => {
  sect_1_more.style.display = 'none';
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
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

let sect_1_accont = document.createElement('section');
let sect_2_accont = document.createElement('section');
let tap1 = document.createElement('div');
tap1.classList.add('tap1')
let btn_tap1 = document.createElement('button');
let btn_tap2 = document.createElement('button');
btn_tap1.classList.add('btn_tap1');
btn_tap2.classList.add('btn_tap2');
tap1.appendChild(btn_tap1)
btn_tap1.innerHTML = 'تسجيل الدخول'
tap1.appendChild(btn_tap2)
btn_tap2.innerHTML = 'انشاء حساب'
let input_sign_up = document.createElement('input');
let input_sign_up2 = document.createElement('input');
input_sign_up.type = 'text'
input_sign_up2.type = 'text'

let form1 = document.createElement('form');
let h2_login = document.createElement('h2');
h2_login.innerHTML = 'مرحباً بعودتك';
form1.appendChild(h2_login);
let input_login1 = document.createElement('input');
let input_login2 = document.createElement('input');
let btn7 = document.createElement('button');
btn7.innerHTML = 'دخول';
btn7.classList.add('btn7');
sect_2_accont.appendChild(tap1);
sect_2_accont.appendChild(form1);
form1.appendChild(input_login1);
input_login1.placeholder = 'اسم المستخدم';
input_login1.type = 'text';
form1.appendChild(input_login2);
input_login2.type = 'password';
input_login2.placeholder = 'كلمة المرور';
form1.appendChild(btn7);
form1.appendChild(input_sign_up);
form1.appendChild(input_sign_up2);
form1.appendChild(input_login1);
form1.appendChild(input_login2);
form1.appendChild(btn7)

input_login1.style.display ='block';
input_login2.style.display ='block';
input_sign_up.style.display ='none';
input_sign_up2.style.display ='none';
btn7.style.display ='block'; 
// -------------------------------------------------------------------------------------------------
btn_tap2.onclick = () => {
  sect_1_more.style.display = 'none';
  btn_tap1.style.background = '#004b2353';
  btn_tap2.style.background = '#004b23';
  h2_login.innerHTML = '!مرحباً بك';
  btn7.innerHTML = 'انشاء'
  input_login1.style.display ='block';
  input_login2.style.display ='block';
  input_sign_up.style.display ='block';
  input_sign_up.placeholder = 'الاسم الاول'
  input_sign_up2.style.display ='block';
  input_sign_up2.placeholder = 'الاسم الاخير'
  btn7.style.display ='block';  
  form1.style.height = '70vh'
  form1.style.gap = '5%'
}
btn_tap1.onclick = () => {
  sect_1_more.style.display = 'none';
  btn7.innerHTML = 'دخول'
  h2_login.innerHTML = 'مرحباً بعودتك';
  btn_tap2.style.background = '#004b2353';
  btn_tap1.style.background = '#004b23';
  form1.style.height = '60vh';
  input_login1.style.display ='block';
  input_login2.style.display ='block';
  input_sign_up.style.display ='none';
  input_sign_up2.style.display ='none';
  btn7.style.display ='block'; 
  form1.style.gap = '10%'
}
// -------------------------------------------------------------------------------------------------
input_login1.classList.add('input_login1')
input_login2.classList.add('input_login2')
main.appendChild(sect_1_accont);
sect_1_accont.classList.add('sect_1_accont');
main.appendChild(sect_2_accont);
sect_2_accont.classList.add('sect_2_accont');


accont.addEventListener('click',()=>{
sect_1_more.style.display = 'none';
sect_1.style.display ='none';
sect_2.style.display ='none';
sect_3.style.display ='none';
sect_1_Products1.style.display ='none';
sect_2_Products1.style.display ='none';
sect_2_pay.style.display ='none';
sect_1_pay.style.display ='none';
sect_1_our.style.display = 'none';
sect_1_statistics.style.display = 'none';
sect_2_accont.style.display = 'flex';
sect_1_accont.style.display =' flex';
main.style.flexDirection = 'row';
})

a2.addEventListener("click", () => {
  sect_1_more.style.display = 'none';
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
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
  sect_1_more.style.display = 'none';
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
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'

});
// -------------


// ------------------------------------------
body.appendChild(main);
main.appendChild(fast_btn1);
// --------------------------------------------------------------------------------------------------------------------------------
fast_btn1.addEventListener("click", () => {
  sect_1_more.style.display = 'none';
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
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
      tow_Element.style.display = 'block'
    } else {
      tow_Element.style.display = 'none'
    }
  });

  label1.addEventListener("click", () => {
    if (sheckBox.checked == true) {
      tow_Element.style.display = 'block'
    } else {
      tow_Element.style.display = 'none'
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
let txt = "صفاء";
let txt1 = "لماء صافي يكفي الجميع";
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
    setTimeout(typeWriter, 200);
  }
}
typeWriter();
title.setAttribute("data-aos", "fade-right");
hgroup1.appendChild(p1);
p1.setAttribute("data-aos", "fade-left");
hgroup1.appendChild(btn1);
btn1.innerHTML = "المزيد";
btn1.setAttribute("data-aos", "fade-up");
btn1.href = "#sect-2";
img_home1.classList.add("img-div1");
img_home1.setAttribute("data-aos", "zoom-in");
// ---------------------------------------------

// --------------------------------------------------
main.appendChild(sect_2);
sect_2.id = 'sect-2'
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
  sect_1_more.style.display = 'none';
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
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
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
// ----------------------------------------------------------------------------------
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
sect_1_accont.style.display = 'none'
sect_2_accont.style.display = 'none'
sect_1_our.style.display = "none";
sect_1_Products1.style.display = "none";
sect_2_Products1.style.display = "none";
sect_2_pay.classList.add("sect-2-edit1");
sect_1_pay.classList.add("sect-1-edit1");
// ----------------------------------------------------------------------------------------

sect_2.appendChild(card1);
sect_2.appendChild(card2);
main.style.height = "auto";
// main.style.flexDirection = "row";
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
  sect_1_more.style.display = 'none';
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
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
if(body.style.width >= '450px'){
  sect_1_pay.style.display = 'none'
  
}
let borger_meno = document.createElement('div');
let span1 = document.createElement('span');
let span2 = document.createElement('span');
let span3 = document.createElement('span');
nav.appendChild(borger_meno);
borger_meno.classList.add('borger_meno')
span1.classList.add('span');
span2.classList.add('span');
span3.classList.add('span');
let borger_meno_1 = document.createElement('div');
let ul_1 =document.createElement('ul');
// ======================
let li_1 =document.createElement('li');
li_1.addEventListener("click", function () {
  sect_1_more.style.display = 'none';
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
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'

});
let li_2 =document.createElement('li');
li_2.addEventListener("click", () => {
  sect_1_more.style.display = 'none';
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
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
let li_3 =document.createElement('li');
li_3.onclick = () => {
  sect_1_more.style.display = 'none';
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
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
let li_4 =document.createElement('li');
li_4.onclick = () => {
  sect_1_more.style.display = 'none';
  sect_1_accont.style.display = 'none'
  sect_2_accont.style.display = 'none'
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
li_1.innerHTML = 'الصفحة الرئيسية';
li_2.innerHTML = 'المنتاجات';
li_3.innerHTML = 'التوظيف';
li_4.innerHTML = 'من نحن';
ul_1.appendChild(li_1);
ul_1.appendChild(li_2);
ul_1.appendChild(li_3);
ul_1.appendChild(li_4);
borger_meno_1.appendChild(ul_1);
borger_meno_1.classList.add('borger_meno_1')
borger_meno.appendChild(span1);
borger_meno.appendChild(span2);
borger_meno.appendChild(span3);
main.appendChild(borger_meno_1);
borger_meno.onclick = () => {
  borger_meno_1.style.width = '100%';
  ul_1.style.display = 'block';
  ul_1.className = 'ul_1';
  li_1.style.display = 'block';
  li_2.style.display = 'block';
  li_3.style.display = 'block';
  li_4.style.display = 'block';
}
borger_meno_1.addEventListener('click' , () => {
  borger_meno_1.style.width = '0%';
  ul_1.style.display = 'none'
  li_1.style.display = 'none'
  li_2.style.display = 'none'
  li_3.style.display = 'none'
  li_4.style.display = 'none'
})
