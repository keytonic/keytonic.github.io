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

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => 
        {
            form.addEventListener('submit', handleSubmit, false)
        })



}

function handleSubmit(event) 
{
    event.preventDefault();
    
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

        var http = new XMLHttpRequest();
        
        http.onreadystatechange = function () 
        {
            if (this.readyState == 4 && this.status == 200)
            {
                alert("email sent");
            }
        };

        http.open('POST', 'https://formspree.io/f/myzknyzb', true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.send(`name=${name}&phone=${phone}&email=${email}&message=${message}`);

    }

    event.target.classList.add('was-validated');


    
    

    /*
    let name = document.getElementsByName("fname");
    let phone = document.getElementsByName("fname");
    let email = document.getElementsByName("fname");
    let message = document.getElementsByName("fname");**/
/*
    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            setmyAlert({ open: true, severity: "success", message: "Email sent!" });
            setmyEmail({ name: "", email: "", phone: "", message: "" });
        }
    };

    http.open('POST', 'https://formspree.io/f/myzknyzb', true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.send(`name=${myEmail.name}&phone=${myEmail.phone}&email=${myEmail.email}&message=${myEmail.message}`);
    */

    
}