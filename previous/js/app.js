// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";    
    document.getElementById("hrfordropdown").style.display = "none";
    document.getElementById("logodropdown").style.marginTop = "53px";    
  } else {
    document.getElementById("navbar").style.top = "-60px";
    document.getElementById("hrfordropdown").style.display = "block";
    document.getElementById("logodropdown").style.marginTop = "4px";
  }
};

function openNavbarFunction() {
    var x = document.getElementById("list");
    if (x.style.display === "none") {      
      x.style.display = "inherit"                  
    } else {
      x.style.display = "none";      
  }
};

function openLogoDropdownFunction() {
  var y = document.getElementById("logodropdown");  
  if (y.style.display === "none") {      
    y.style.display = "block";            
  } else {
    y.style.display = "none";          
}
};