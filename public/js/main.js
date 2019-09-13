//$('#fullpage').fullpage();

// Scrollify
$(function() {
    $.scrollify({
      section : ".section",
      scrollbars: false,
      before: function(){
        $('#permalink ul li').removeClass('permalink-active')
      },
      after: function(){
        current = $.scrollify.current();
        //alert(current);
        console.log(current);
        current.addClass('permalink-active')
      }
    });
    
    document.getElementById("home-link").onclick = function(){
      $.scrollify.move("#home"); 
     };
     document.getElementById("menu-home").onclick = function(){
      $.scrollify.move("#home"); 
    };
    document.getElementById("about-us-link").onclick = function(){
      $.scrollify.move("#about-us");
    }; 
    document.getElementById("menu-about-us").onclick = function(){
      $.scrollify.move("#about-us");
    };       
    document.getElementById("contact-us-link").onclick = function(){
        $.scrollify.move("#contact-us");
    };
    document.getElementById("menu-contact-us").onclick = function(){
      $.scrollify.move("#contact-us");
    };  
    document.getElementById("menu-register").onclick = function(){
        $.scrollify.move("#register");
    };
    document.getElementById("register-link").onclick = function() {
        $.scrollify.move("#register");
    };
    document.getElementById("menu-events").onclick = function(){
      $.scrollify.move("#events");
    };
    document.getElementById("events-link").onclick = function(){
        $.scrollify.move("#events");
    };
  // alert("done");

  });

var nav_flag = true;
// Navigation bar
document.getElementById("nav").onclick = function(){
    if(nav_flag===true){
    nav_flag = false;
    document.getElementById("menu-container").style.display="block";   
    document.getElementById("nav").style.background="none";
    document.getElementById("nav").innerHTML = "X";
    $("#nav").addClass("nav-clicked");
    } else {
        nav_flag = true;
    document.getElementById("menu-container").style.display="none";   
    document.getElementById("nav").innerHTML = ""; document.getElementById("nav").style.background="url('./static/menu.png')";

    }
}

// Register
document.getElementById("internal-button").onclick = function() {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLScubhnL--kXS6vKb9zuqXdujltI-GN-k1G1sxrAjytYrYv19Q/viewform";
};

document.getElementById("external-button").onclick = function() {
    window.location = "https://docs.google.com/forms/d/e/1FAIpQLSdTQwwPxzWbXqxHnv50Rw46iKnGZ2V_a02oExDQ1N_bhyIH5A/viewform";
};