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
        //alert("bad");
    }
    else
    {
        //alert("good");
        let name = document.getElementsByName("name")[0];
        let phone = document.getElementsByName("phone")[0];
        let email = document.getElementsByName("email")[0];
        let message = document.getElementsByName("message")[0];
        let button = document.getElementById("form-button");

        var http = new XMLHttpRequest();
/*
        http.addEventListener("error",function(event)
        {
            event.preventDefault();
            alert("error");
        });
*/
        http.onreadystatechange = function () 
        {
            //https://www.w3schools.com/Xml/ajax_xmlhttprequest_response.asp

            /*
            if (this.readyState == 4 && this.status == 200)
            {
                alert("email sent");
            }
            */
            if (this.readyState == 4)
            {
                event.target.classList.remove('was-validated');
                event.target.reset();
                button.disabled = true;
                button.innerText = "Sent!";
            }
            //alert(`readyState=${this.readyState}\nStatus=${this.status}`);
        };

        //http.open('POST', 'https://formspree.io/f/myzknyzb', true);
        http.open('POST', 'https://andrewtowner.com/post.php', true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send(`name=${name.value}&phone=${phone.value}&email=${email.value}&message=${message.value}`);
        //http.abort();
    }
}