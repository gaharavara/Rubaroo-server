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
        // current.addClass('permalink-active')
      }
    });
    
    document.getElementById("home-link").onclick = function(){
      $.scrollify.move("#home"); 
     };   
     document.getElementById("rubaroo-logo").onclick = function(){
      $.scrollify.move("#home"); 
     }; 
     document.getElementById("menu-home").onclick = function(){
      $.scrollify.move("#home"); 
    };
    document.getElementById("site-rubaroo-logo").onclick = function(){
      $.scrollify.move("#home"); 
    };    
    document.getElementById("site-home").onclick = function(){
      $.scrollify.move("#home"); 
     };    
    document.getElementById("about-us-link").onclick = function(){
      $.scrollify.move("#about-us");
    }; 
    document.getElementById("menu-about-us").onclick = function(){
      $.scrollify.move("#about-us");
    };
    document.getElementById("site-about-us").onclick = function(){
      $.scrollify.move("#about-us");
    };       
    document.getElementById("contact-us-link").onclick = function(){
        $.scrollify.move("#contact-us");
    };
    document.getElementById("menu-contact-us").onclick = function(){
      $.scrollify.move("#contact-us");
    };
    document.getElementById("menu-sponsors").onclick = function() {
      $.scrollify.move("#contact-us");
    }
    document.getElementById("site-sponsors").onclick = function() {
      $.scrollify.move("#contact-us");
    }    
    document.getElementById("site-contact-us").onclick = function(){
      $.scrollify.move("#contact-us");
    };    
    document.getElementById("external-registration-contact").onclick = function(){
      $.scrollify.move("#contact-us");
    };
    
    document.getElementById("menu-register").onclick = function(){
        $.scrollify.move("#register");
    };
    document.getElementById("site-register").onclick = function(){
      $.scrollify.move("#register");
    };
    document.getElementById("site-accomodation").onclick = function(){
      $.scrollify.move("#register");
    };    
    document.getElementById("container").onclick = function(){
      $.scrollify.move("#register");
    }  
    document.getElementById("register-link").onclick = function() {
        $.scrollify.move("#register");
    };
    document.getElementById("menu-events").onclick = function(){
      $.scrollify.move("#events");
    };
    document.getElementById("site-events").onclick = function(){
      $.scrollify.move("#events");
    };
    document.getElementById("events-link").onclick = function(){
        $.scrollify.move("#events");
    };
    document.getElementById("site-map-link").onclick = function(){
      $.scrollify.move("#site-map"); 
     };
     document.getElementById("menu-site-map").onclick = function(){
      $.scrollify.move("#site-map");
     }; 
  });

var cc = document.getElementById("copyrights");
console.log(cc.innerHTML);

var nav_flag = true;
// Navigation bar
document.getElementById("nav").onclick = function(){
    if(nav_flag===true){
    nav_flag = false;
    document.getElementById("menu-container").style.width="400px";   
    document.getElementById("nav").style.background="none";
    document.getElementById("nav").innerHTML = "X";
    $("#nav").addClass("nav-clicked");
    } else {
    nav_flag = true;  
    document.getElementById("menu-container").style.width="0px";
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