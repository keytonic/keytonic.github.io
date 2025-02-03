
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
    andrew.addEventListener("mouseover", function() 
    {
        document.getElementById("logo").style.fill = "red";
    });
    andrew.addEventListener("mouseout", function() 
    {
        document.getElementById("logo").style.fill = "inherit";
    });
    let towner = document.getElementById("towner");
    towner.addEventListener("mouseover", function() 
    {
        document.getElementById("logot").style.fill = "red";
    });
    towner.addEventListener("mouseout", function() 
    {
        document.getElementById("logot").style.fill = "transparent";
    });
}