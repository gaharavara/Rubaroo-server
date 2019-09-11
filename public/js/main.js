$('#fullpage').fullpage();

var nav_flag = true;
// Navigation bar
document.getElementById("nav").onclick = function(){
    if(nav_flag===true){
    nav_flag = false;
    document.getElementById("menu-container").style.display="block";   
    document.getElementById("nav").style.background="none";
    document.getElementById("nav").innerHTML = "X";
    } else {
        nav_flag = true;
    document.getElementById("menu-container").style.display="none";   
    document.getElementById("nav").innerHTML = ""; document.getElementById("nav").style.background="url('./static/menu.png')";

    }
}