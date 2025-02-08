
window.onload = function ()
{
    window.onscroll = function()
    {
        const header = document.getElementById("site-header");
        const nav = document.getElementById("site-nav");

        if (window.scrollY > 0) 
        {
            header.classList.add('sticky');
            nav.classList.add('sticky');
        } 
        else 
        {
            header.classList.remove('sticky');
            nav.classList.remove('sticky');
        }
    }

    let andrew = document.getElementById("andrew");
    let towner = document.getElementById("towner");
    let a = document.getElementById("logo");
    let t = document.getElementById("logot");


    andrew.addEventListener("mouseover", function() 
    {
        a.style.fill = "red";
        t.style.fill = "white";

    });
    andrew.addEventListener("mouseout", function() 
    {
        a.style.fill = "inherit";
        t.style.fill = "transparent";
    });

    towner.addEventListener("mouseover", function() 
    {
        a.style.fill = "white";
        t.style.fill = "red";
    });
    towner.addEventListener("mouseout", function() 
    {
        a.style.fill = "inherit";
        t.style.fill = "transparent";
    });
}