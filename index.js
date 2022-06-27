$(document).ready(function(){
  $('.slider').slick({

      dots:true,
      arrows:false,
  });
  $('.slider2').slick({

      dots:true,
  });
  AOS.init();
  
});


// window.onscroll = function() {scrollFunction()};


// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     document.getElementById("zig-zag").style.marginTop = "-400px";
    
  

//   } else {
//     document.getElementById("zig-zag").style.marginTop = "-300px";
   

//   }






//   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
//       document.getElementById("zig-zag-small").style.marginTop = "-100px";
    

//     } else {
     
//       document.getElementById("zig-zag-small").style.marginTop = "50px";

//     }

//       if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
//       document.getElementById("zig-zag2-small").style.marginTop = "0px";
    

//     } else {
     
//       document.getElementById("zig-zag2-small").style.marginTop = "100px";

//     }


//     if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
//       document.getElementById("fourth").style.marginTop = "-100px";
      
    
  
//     } else {
//       document.getElementById("fourth").style.marginTop = "100px";
     
  
//     }
//     if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
//       document.getElementById("first").style.marginTop = "0px";
      
    
  
//     } else {
//       document.getElementById("first").style.marginTop = "100px";
     
  
//     }
  
//     if (document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600) {
//       document.getElementById("second").style.marginTop = "0px";
      
    
  
//     } else {
//       document.getElementById("second").style.marginTop = "100px";
     
  
//     }
//     if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
//       document.getElementById("third").style.marginTop = "0px";
      
    
  
//     } else {
//       document.getElementById("third").style.marginTop = "100px";
     
  
//     }
// }