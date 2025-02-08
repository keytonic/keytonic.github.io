
window.onload = function ()
{
    window.onscroll = function()
    {
        const header = document.getElementById("site-header");
        const nav = document.getElementById("site-nav");

        if (window.scrollY > 0) 
        {
            header.classList.add('sticky');
            //nav.classList.add('sticky');
        } 
        else 
        {
            header.classList.remove('sticky');
            //nav.classList.remove('sticky');
        }
    };

    
    document.onclick = function(event)
    {
        if(event.target.id == "nav-trigger") return;

        const nav_trigger = document.getElementById("nav-trigger");

        if(nav_trigger.checked == true)
        {
            nav_trigger.checked = false;
            //alert(event.target.id);
        }

    };

    document.onresize = function()
    {
        const nav_trigger = document.getElementById("nav-trigger");

        if(nav_trigger.checked == true)
        {
            nav_trigger.checked = false;
            //alert(event.target.id);
        }
    };

    window.onresize = function()
    {
        const nav_trigger = document.getElementById("nav-trigger");

        if(nav_trigger.checked == true)
        {
            nav_trigger.checked = false;
            //alert(event.target.id);
        }
    };

    let andrew = document.getElementById("andrew");
    let towner = document.getElementById("towner");
    let a = document.getElementById("logo");
    let t = document.getElementById("logot");


    andrew.addEventListener("mouseover", function() 
    {
        a.style.fill = "#C20114";//red
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
        t.style.fill = "#C20114";//red
    });
    towner.addEventListener("mouseout", function() 
    {
        a.style.fill = "inherit";
        t.style.fill = "transparent";
    });
}