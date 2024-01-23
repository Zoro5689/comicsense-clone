
const popupMenu = document.querySelector('.popup-menu');
const menuItems = popupMenu.querySelector('.menu-items');


let timer;

popupMenu.addEventListener('mouseenter', function () {
  clearTimeout(timer);
  menuItems.style.opacity = '1';
  menuItems.style.top = '130%';
  menuItems.style.pointerEvents = 'auto';

});

popupMenu.addEventListener('mouseleave', function () {
  clearTimeout(timer);
  timer = setTimeout(() => {
    menuItems.style.opacity = '0';
    menuItems.style.top = 'calc(100% + 5px)';
    menuItems.style.pointerEvents = 'none';
  }, 300);
});

const popupMenu1 = document.querySelector('.popup-menu1');
const menuItems1 = popupMenu1.querySelector('.menu-items1');


let timera;

popupMenu1.addEventListener('mouseenter', function () {
  clearTimeout(timera);
  menuItems1.style.opacity = '1';
  menuItems1.style.top = '130%';
  menuItems1.style.pointerEvents = 'auto';

});

popupMenu1.addEventListener('mouseleave', function () {
  clearTimeout(timer);
  timera = setTimeout(() => {
    menuItems1.style.opacity = '0';
    menuItems1.style.top = 'calc(100% + 5px)';
    menuItems1.style.pointerEvents = 'none';
  }, 300);
});









function validateForm() {

  let a = document.forms["myform"]["Email"].value;
  if (a == "") {
    alert("Enter your Email");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(a)) {
    alert("Please Enter a valid Email ID");
    return false;
  }


  let b = document.forms["myform"]["Password"].value;
  if (b == "") {
    alert("Enter Your Password");
    return false;
  }




}

function validate() {

  let c = document.forms["f1"]["Email"].value;
  if (c == "") {
    alert("Enter a Email");
    return false;
  }

  else if (!/\S+@\S+\.\S+/.test(c)) {
    alert("Please Enter a valid Email ID");
    return false;
  }


  let d = document.forms["f1"]["Password"].value;
  if (d == "") {
    alert("Enter Your Password");
    return false;
  }


  else if (d.length < 8) {
    console.log(d);
    alert("Password must 8 character long")
    return false;

  }

  let e = document.forms["f1"]["ConfirmPassword"].value;
  if (d != e) {
    console.log(e);
    alert("Enter same Password");
    return false;
  }




}