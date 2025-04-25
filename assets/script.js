
window.onload = function ()
{
    //const nav = document.getElementById("site-nav");
    const nav_trigger = document.getElementById("nav-trigger");
    const header = document.getElementById("site-header");

/*


    document.onclick = (event) =>
    {
        console.log(`on click: ${event.target.tagName}`);
        quasiClick(event);
    };
*/


    document.addEventListener("click", (event) => 
    {
        //console.log(`click: ${event.target.class}`);

        quasiClick(event,1);

    }, { passive: false });



/*
    document.ontouchstart = (event) => 
    {
        console.log(`touch start: ${event.target.tagName}`);
        quasiClick(event);
        event.preventDefault();
    };
*/
    document.addEventListener("touchstart", (event) => 
    {
        //console.log(`touch start: ${event.target.className}`);


        if(event.target.className == "page-link")
        {
            window.location.href = event.target.href;
            return;
        }




        quasiClick(event,2);
        //event.preventDefault();
    }, { passive: false });




    document.ontouchend = (event) => 
    { 
        //console.log(`touch end: ${event.target.tagName}`);
    };

    document.touchcancel = (event) => 
    {
        //console.log(`touch cancel: ${event.target.tagName}`);
    };

    window.onscroll = () =>
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

    document.onresize = () =>
    {
        if(nav_trigger.checked == true)
        {
            nav_trigger.checked = false;
            //nav.style.boxShadow = "";
        }
    };

    window.onresize = () =>
    {
        if(nav_trigger.checked == true)
        {
            nav_trigger.checked = false;
           // nav.style.boxShadow = "";
        }
    };

    let andrew = document.getElementById("andrew");
    let towner = document.getElementById("towner");
    let a = document.getElementById("logo");
    let t = document.getElementById("logot");

    let red = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color4');
    let grey = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color3');
    //let red = localStorage.getItem("color4") == null ? getComputedStyle(document.querySelector(':root')).getPropertyValue('--color4') : localStorage.getItem("color4");
    //let grey = localStorage.getItem("color3") == null ? getComputedStyle(document.querySelector(':root')).getPropertyValue('--color3') : localStorage.getItem("color3");







    andrew.addEventListener("mouseover", () =>
    {
        let theme = localStorage.getItem("theme");

        if(theme == null)
        {
            red = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color4');
            grey = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color3');
        }
        else
        {
            red = getComputedStyle(document.querySelector('.' + theme)).getPropertyValue('--color4');
            grey = getComputedStyle(document.querySelector('.' + theme)).getPropertyValue('--color3');
        }
        
        a.style.fill = red;//red
        t.style.fill = grey;//grey

    });
    andrew.addEventListener("mouseout", () =>
    {
        a.style.fill = "inherit";
        t.style.fill = "transparent";
    });

    towner.addEventListener("mouseover", () =>
    {
        let theme = localStorage.getItem("theme");

        if(theme == null)
        {
            red = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color4');
            grey = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color3');
        }
        else
        {
            red = getComputedStyle(document.querySelector('.' + theme)).getPropertyValue('--color4');
            grey = getComputedStyle(document.querySelector('.' + theme)).getPropertyValue('--color3');
        }

        a.style.fill = grey;//grey
        t.style.fill = red;//red
    });
    towner.addEventListener("mouseout", () =>
    {
        a.style.fill = "inherit";
        t.style.fill = "transparent";
    });

    //only run on contact page
    if(window.location.pathname.indexOf("contact") != -1)
    {
        const forms = document.querySelectorAll('.needs-validation')

        Array.from(forms).forEach(form => 
        {
            form.addEventListener('submit', handleSubmit, false);
        })

        document.getElementById("form-name").addEventListener('focus', handleClick, false);
        document.getElementById("form-name").addEventListener('blur', handleBlur, false);

        document.getElementById("form-phone").addEventListener('focus', handleClick, false);
        document.getElementById("form-phone").addEventListener('blur', handleBlur, false);
        
        document.getElementById("form-email").addEventListener('focus', handleClick, false);
        document.getElementById("form-email").addEventListener('blur', handleBlur, false);

        document.getElementById("form-message").addEventListener('focus', handleClick, false);
        document.getElementById("form-message").addEventListener('blur', handleBlur, false);
    }

    setColorFromLocalstorage("color7");
    setColorFromLocalstorage("color5");
    setColorFromLocalstorage("color3");
    setColorFromLocalstorage("color3-trans");
    setColorFromLocalstorage("color6");
    setColorFromLocalstorage("color2");
    setColorFromLocalstorage("color4");
    setColorFromLocalstorage("color4-trans");
    setColorFromLocalstorage("color8");
    setColorFromLocalstorage("color1");
    setColorFromLocalstorage("color1-trans");
    setColorFromLocalstorage("color1-trans2");
    
}

function setColorFromLocalstorage(name = null)
{
    if(name == null) return;

    let color = localStorage.getItem(name);

    if(color == null) return;

    //document.querySelector(':root').style.setProperty('--' + name, color);

    //console.log(`color: ${'--' + name} set to: ${color}`);


    let theme = localStorage.getItem("theme");

    if(theme != null)
    {
        document.querySelector('.' + theme).style.setProperty('--' + name, color);
    }
    else
    {
        document.querySelector(':root').style.setProperty('--' + name, color);
    }


}

function setColor(name = null, color = "")
{
    if(name == null || color == "") return;

    document.querySelector(':root').style.setProperty('--' + name, color);
    //localStorage.setItem(name, color);

    //console.log(`color: ${'--' + name} set to: ${color}`);
}

function handleClick(event)
{
    let target = event.target;

    if(target.id.indexOf("form-") == -1) return;

    target.setAttribute("placeholder", "");
    
    document.getElementById(target.id + "-label").style.opacity = "1";
    document.getElementById(target.id + "-label").style.top = "4px";
    document.getElementById(target.id + "-label").style.left = "0px";
}

function handleBlur(event)
{
    let target = event.target;

    if(target.id.indexOf("form-") == -1) return;
 
    if(target.value.length <= 0)
    {
        target.setAttribute("placeholder",target.getAttribute("placeholder-slug"));
        document.getElementById(target.id + "-label").style.opacity = "0";
        document.getElementById(target.id + "-label").style.top = "40px";
        document.getElementById(target.id + "-label").style.left = "13px";
    }
}

function handleSubmit(event) 
{
    event.preventDefault();
    event.target.classList.add('was-validated');

    if (!event.target.checkValidity()) 
    {
        event.preventDefault();
        event.stopPropagation();
    }
    else
    {
        let name = document.getElementsByName("name")[0];
        let phone = document.getElementsByName("phone")[0];
        let email = document.getElementsByName("email")[0];
        let message = document.getElementsByName("message")[0];
        let button = document.getElementById("form-button");

        var http = new XMLHttpRequest();

        http.onreadystatechange = () =>
        {
            //console.log(http.readyState);
            if (http.readyState == 4)
            {
                event.target.classList.remove('was-validated');
                event.target.reset();
                button.disabled = true;

                let bi = button.querySelector(".bi");
                bi.classList.replace("bi-send-fill","bi-check-lg");
                bi.innerText = "Sent!";
                bi.style.color = "#00ff00";
            }
        };

        http.open('POST', 'https://formspree.io/f/mqaqapel', true);
        //http.open('POST', 'https://www.keytonic.net/projects/email/index.php', true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send(`name=${name.value}&phone=${phone.value}&email=${email.value}&message=${message.value}`);
    }
}

function setTheme()
{
    let theme = localStorage.getItem("theme");

    if(theme != null)
    {
        document.body.classList.add(theme);
    }
}

function quasiClick(event,func=0)
{
    const nav_trigger = document.getElementById("nav-trigger");

    if(event.target.id == "nav-trigger" || event.target.id == "hamburger-path" || event.target.id == "hamburger" || event.target.id == "menu-icon")
    {
        if(func == 2)
        {
            let theThing = document.getElementById("hamburger");

            theThing.style.transition = "fill 0s";
            theThing.style.transform = "scale(1.7, 1.7)";
            theThing.style.fill = "var(--color4)";

            setTimeout(() => 
            {
                theThing.style.transform = "scale(1, 1)";
                theThing.style.fill = "var(--color3)";

            }, 200);
        }

        document.getElementById("nav-trigger").checked = !document.getElementById("nav-trigger").checked;
        //console.log("ass");
        event.preventDefault();
    }
    else if(event.target.id == "menu-icon2" || event.target.id == "theme-mode" || event.target.id == "sun" || event.target.id == "moon")
    {
        if(func == 2)
        {
            let theThing = document.getElementById("theme-mode");

            theThing.style.transition = "fill 0s";
            theThing.style.transform = "scale(1.7, 1.7)";
            theThing.style.fill = "var(--color4)";

            setTimeout(() => 
            {
                theThing.style.transform = "scale(1, 1)";
                theThing.style.fill = "var(--color3)";
                
            }, 200);
        }


        let blogTitle = document.getElementById("home-title");
        let theme = localStorage.getItem("theme");

        if(theme == null)
        {
            localStorage.setItem("theme","light");
            document.body.classList.add("light");
            if(blogTitle != null) document.getElementById("home-title").innerHTML = "<strong>A Blog in the Light</strong>";
            document.getElementById("sun").style.display = "none";
            document.getElementById("moon").style.display = "inline";
        }
        else if(theme == "dark")
        {
            localStorage.setItem("theme","light");
            
            document.body.classList.remove("dark");
            document.body.classList.add("light");

            if(blogTitle != null) document.getElementById("home-title").innerHTML = "<strong>A Blog in the Light</strong>";

            document.getElementById("sun").style.display = "none";
            document.getElementById("moon").style.display = "inline";
        }
        else if(theme == "light")
        {
            localStorage.setItem("theme","dark");
            
            document.body.classList.remove("light");
            document.body.classList.add("dark");

            if(blogTitle != null) document.getElementById("home-title").innerHTML = "<strong>A Blog in the Dark</strong>";

            document.getElementById("sun").style.display = "inline";
            document.getElementById("moon").style.display = "none";
        }

        event.preventDefault();

        if(document.title == "Options")
        {
            location.reload(true);
        }
    }
    else if(event.target.classList.contains("svg-icon") || event.target.parentNode.classList.contains("svg-icon"))
    {
        //console.log("test: " + event.target.tagName);

        if(func == 2)
        {
            let theThing =  event.target.parentNode.parentNode.querySelector("svg");

            theThing.style.transition = "fill 0s";
            theThing.style.transform = "scale(1.7, 1.7)";
            theThing.style.fill = "var(--color4)";

            setTimeout(() => 
            {
                theThing.style.transform = "scale(1, 1)";
                theThing.style.fill = "var(--color3)";


                let href = event.target.parentNode.parentNode.href || event.target.parentNode.parentNode.querySelector("a").href;
                window.open(href,'_blank');
            }, 200);

            event.preventDefault();
        }
    }

    if(event.target.id != "nav-trigger" && event.target.id != "hamburger-path" && event.target.id != "hamburger" && event.target.id != "menu-icon")
    {
        nav_trigger.checked = false;
        //nav.style.boxShadow = "";
        //event.preventDefault();
    }
}