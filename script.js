// active link page
// var header = document.getElementById("page");
// var btns = header.getElementsByClassName("nav-link");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += "active";
//   });
// }

// play audio


function playAudio(id) { 
  var x = document.getElementById(id); 
  x.play(); 
} 

// // end play audio


// Setting Cookies
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(data_session) {
  var data=getCookie(data_session);
  if (data != "") {
    console.log(data);
  } else {
     data = prompt("Please enter your name:","");
     if (data != "" && data != null) {
       setCookie(data_session, data, 30);
     }
  }
}


function getSession(data_session){
  return sessionStorage.getItem(data_session);
}

function setSession(key, val){
  sessionStorage.setItem(key, val);
}

function checkBrowserSupportSession(data_session){
  if (typeof(Storage) !== "undefined") {
    getSession(data_session)
  } else {
    alert("Sorry, your browser does not support Web Storage...");
  }
}


function getlocalStorage(data_local_storage){
  return localStorage.getItem(data_local_storage);
}

function setlocalStorage(key, val){
  localStorage.setItem(key, val);
}
