var myIndex = 1;
carousel();

function carousel() {
  var x = document.getElementsByClassName("mySlides1");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5500);    
}


var aaIndex = 2;
aacarousel();

function aacarousel() {
    var aax = document.getElementsByClassName("mySlides2");
    for (var aai = 0; aai < aax.length; aai++) {
      aax[aai].style.display = "none";  
    }
    aaIndex++;
    if (aaIndex > aax.length) {aaIndex = 1}    
    aax[aaIndex-1].style.display = "block";  
    setTimeout(aacarousel, 4000);    
  }

  var bbIndex = 3;
  bbcarousel();
  
  function bbcarousel() {
      var bbx = document.getElementsByClassName("mySlides3");
      for (var bbi = 0; bbi < bbx.length; bbi++) {
        bbx[bbi].style.display = "none";  
      }
      bbIndex++;
      if (bbIndex > bbx.length) {bbIndex = 1}    
      bbx[bbIndex-1].style.display = "block";  
      setTimeout(bbcarousel, 4700);    
    }

