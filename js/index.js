$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $("header").addClass("activ");
        
    }
    else{
        $("header").removeClass("activ");
        
    }
});

$(document).ready(function(){
    $(".toggle-manu").click(function(){
        $("nav").slideToggle();
    });
    $(".top-btn").click(function(){
      $("html").animate({"scrollTop":"0"})
    })
});

// count
$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });

$(document).ready(function () {
    $(".accordion-title").click(function (e) {
        $(this).parent(".accordion").find(".accordion-body").slideToggle();
        $(this).parent(".accordion").prevAll(".accordion").find(".accordion-body").slideUp();
        $(this).parent(".accordion").nextAll(".accordion").find(".accordion-body").slideUp();
    });
});