
window.onload = function ()
{
    window.onscroll = function()
    {
        const header = document.getElementById("site-header");
        //const nav = document.getElementById("site-nav");

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
    }
}