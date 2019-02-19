 $(document).ready(function() {

   $("body").on('click', '.menu-icon', function() {
		$(".menu").toggleClass("hidden2");
	});

  var images = [
    "../content/slide1.jpg",
    "../content/slide2.jpg",
    "../content/slide3.jpg",
    "../content/slide4.jpg",
    "../content/slide5.jpg",
  ];

  var currentIndex = 0;

  function slideshow(){

    if (currentIndex < images.length){
      currentIndex += 1;
    }
    else{
      currentIndex = 0;
    }
    $("#slideshowImage").attr('src', images[currentIndex]);
  }

  setInterval(function(){slideshow();}, 3000);

  $("#dot1").on('click', function(){
    $("#slideshowImage").attr('src', images[4]);
  });

  $("#dot2").on('click', function(){
    $("#slideshowImage").attr('src', images[3]);
  });

  $("#dot3").on('click', function(){
    $("#slideshowImage").attr('src', images[2]);
  });

  $("#dot4").on('click', function(){
    $("#slideshowImage").attr('src', images[1]);
  });

  $("#dot5").on('click', function(){
    $("#slideshowImage").attr('src', images[0]);
  });
  
  if ($(document).width() < 600){
    $("#team_picture").addClass("hide");
    $("#team_picture_2").addClass("hide");
  }
});
