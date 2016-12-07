
  $(document).ready(function() {
      // run test on initial page load
      checkSize();

      // run test on resize of the window
      $(window).resize(checkSize);


  //Function to the css rule
  function checkSize(){
      if ($(".profile-pics").css("display") == "none" ){

          var slideIndex = 0;
          carousel();
          function carousel() {
              var i;
              var x = document.getElementsByClassName("profile-pics");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
              }
              slideIndex++;
              if (slideIndex > x.length) {slideIndex = 1}
              x[slideIndex-1].style.display = "block";
              setTimeout(carousel, 3000);
          }
      }
  }
});
