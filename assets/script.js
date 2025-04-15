
window.onload = function ()
{
    const nav = document.getElementById("site-nav");
    const nav_trigger = document.getElementById("nav-trigger");
    const header = document.getElementById("site-header");


    document.ontouchstart = (event) => 
    {
        console.log(`touch start: ${event.target.id}`);
/*
        let elements = document.getElementsByTagName("svg");

        for (let i = 0; i < elements.length; i++) 
        {
            elements[i].style.transform = "scale(1,1)";
            elements[i].style.fill = "var(--color3)";
        }
*/

    };

    document.ontouchend = (event) => 
    { 
        console.log(`touch end: ${event.target.id}`);

    };

    document.touchcancel = (event) => 
    {
        console.log(`touch cancel: ${event.target.id}`);
    };


    document.onclick = (event) =>
    {

        if(event.target.id == "menu-icon2" || event.target.id == "theme-mode" || event.target.id == "sun" || event.target.id == "moon")
        {
            let blogTitle = document.getElementById("home-title");

            if(localStorage.getItem("theme") == "light")
            {
                localStorage.setItem("theme","dark");
                document.body.classList.remove("light");
                if(blogTitle != null) document.getElementById("home-title").innerHTML = "<strong>A Blog in the Dark</strong>";
                document.getElementById("sun").style.display = "inline";
                document.getElementById("moon").style.display = "none";

            }
            else
            {
                localStorage.setItem("theme","light");
                document.body.classList.add("light");
                if(blogTitle != null) document.getElementById("home-title").innerHTML = "<strong>A Blog in the Light</strong>";
                document.getElementById("sun").style.display = "none";
                document.getElementById("moon").style.display = "inline";
            }
            event.preventDefault();
        }
        if(event.target.id != "nav-trigger" && event.target.id != "path" && event.target.id != "hamburger")
        {
            nav_trigger.checked = false;
            //nav.style.boxShadow = "";
            //event.preventDefault();
        }
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

        if(localStorage.getItem("theme") == "light")
        {
            red = getComputedStyle(document.querySelector('.light')).getPropertyValue('--color4');
            grey = getComputedStyle(document.querySelector('.light')).getPropertyValue('--color3');
        }
        else
        {
            red = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color4');
            grey = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color3');
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

        if(localStorage.getItem("theme") == "light")
        {
            red = getComputedStyle(document.querySelector('.light')).getPropertyValue('--color4');
            grey = getComputedStyle(document.querySelector('.light')).getPropertyValue('--color3');
        }
        else
        {
            red = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color4');
            grey = getComputedStyle(document.querySelector(':root')).getPropertyValue('--color3');
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

    document.querySelector(':root').style.setProperty('--' + name, color);

    //console.log(`color: ${'--' + name} set to: ${color}`);
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
            if (this.readyState == 4)
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

        //http.open('POST', 'https://formspree.io/f/myzknyzb', true);
        http.open('POST', 'https://andrewtowner.com/post.php', true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send(`name=${name.value}&phone=${phone.value}&email=${email.value}&message=${message.value}`);
    }
}

function setTheme()
{
    if(localStorage.getItem("theme") == "light")
    {
        document.body.classList.add("light");
    }
    else
    {
        document.body.classList.remove("light");
    }
}