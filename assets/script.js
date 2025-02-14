//box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.5);
//site-nav
window.onload = function ()
{
    const nav = document.getElementById("site-nav");
    const nav_trigger = document.getElementById("nav-trigger");
    const header = document.getElementById("site-header");

    window.onscroll = function()
    {
        if (window.scrollY > 0) 
        {
            header.classList.add('sticky');
        } 
        else 
        {
            header.classList.remove('sticky');
        }
    };

    document.onclick = function(event)
    {
        if(event.target.id != "nav-trigger" && nav_trigger.checked == true)
        {
            nav_trigger.checked = false;
            nav.style.boxShadow = "";
        }
        else
        {
            nav.style.boxShadow = "0 0 16px 4px rgba(0, 0, 0, 0.5)";
        }
    };

    document.onresize = function()
    {
        if(nav_trigger.checked == true)
        {
            nav_trigger.checked = false;
            nav.style.boxShadow = "";
        }
    };

    window.onresize = function()
    {
        if(nav_trigger.checked == true)
        {
            nav_trigger.checked = false;
            nav.style.boxShadow = "";
        }
    };




    let andrew = document.getElementById("andrew");
    let towner = document.getElementById("towner");
    let a = document.getElementById("logo");
    let t = document.getElementById("logot");

    andrew.addEventListener("mouseover", function() 
    {
        a.style.fill = "#990000";//red
        t.style.fill = "#666666";//grey

    });
    andrew.addEventListener("mouseout", function() 
    {
        a.style.fill = "inherit";
        t.style.fill = "transparent";
    });

    towner.addEventListener("mouseover", function() 
    {
        a.style.fill = "#666666";//grey
        t.style.fill = "#990000";//red
    });
    towner.addEventListener("mouseout", function() 
    {
        a.style.fill = "inherit";
        t.style.fill = "transparent";
    });
}