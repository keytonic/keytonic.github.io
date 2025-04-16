---
layout: page
title: Options
permalink: /options/
---
## **Options**
---
We all have options

<div id="options-output"></div>

<script>

    function generateColorPicker(name,trans = null, notes = "")
    {
        const newDiv = document.createElement('div');
        newDiv.className = "options-row";

        const newInput = document.createElement('input');
        newInput.id = name;
        newInput.className = "color-picker";
        newInput.setAttribute("type", "color");
        //newInput.setAttribute("value", localStorage.getItem(name) == null ? "" : localStorage.getItem(name).slice(0, 7));
        //newInput.setAttribute("value", getComputedStyle(document.querySelector(':root')).getPropertyValue('--' + name).slice(0, 7));
        //newInput.setAttribute("value", localStorage.getItem(name) == null ? getComputedStyle(document.querySelector(':root')).getPropertyValue('--' + name).slice(0, 7) : localStorage.getItem(name).slice(0, 7));

        let theme = localStorage.getItem("theme");

        if(theme != null)
        {
            newInput.setAttribute("value", localStorage.getItem(name) == null ? getComputedStyle(document.querySelector('.' + theme)).getPropertyValue('--' + name).slice(0, 7) : localStorage.getItem(name).slice(0, 7));
        }
        else
        {
            newInput.setAttribute("value", localStorage.getItem(name) == null ? getComputedStyle(document.querySelector(':root')).getPropertyValue('--' + name).slice(0, 7) : localStorage.getItem(name).slice(0, 7));
        }

        if(trans != null) 
            newInput.setAttribute("trans",trans);

        newInput.addEventListener("input", (event) => 
        { 
            let newVal = event.target.value;
            let trans = event.target.getAttribute("trans");

            if(trans != null) newVal += trans;

            localStorage.setItem(name, newVal); 
            
            let theme = localStorage.getItem("theme");

            if(theme != null)
            {
                document.querySelector('.' + theme).style.setProperty('--' + name, newVal);
            }
            else
            {
                document.querySelector(':root').style.setProperty('--' + name, newVal);
            }
        });

        newDiv.appendChild(newInput);

        const newLabel = document.createElement('label');
        newLabel.setAttribute("for", name);
        newLabel.innerText = `${name}`;

        if(notes != "") newLabel.innerText += ` (${notes})`;

        newDiv.appendChild(newLabel);

        document.getElementById("options-output").appendChild(newDiv);
    }

    function exportColors()
    {
        let ret = ":root\n{\n";

        const elements = document.getElementsByClassName('color-picker');

        for (let i = 0; i < elements.length; i++) 
        {

            let newVal = elements[i].value;
            let trans = elements[i].getAttribute("trans");

            if(trans != null) newVal += trans;

            ret += `\t--${elements[i].id}: ${newVal};\n`;
        }

        ret += "}";

        //alert(":root\n{\n}");
        console.log(ret);
    }

    generateColorPicker("color7", null, "Form control font color");
    generateColorPicker("color5", null, "Post title, button hover color, code and pre block bg");
    generateColorPicker("color3", null, "Header & footer font, scroll bar, postblock buttons and sub title");
    generateColorPicker("color3-trans","bf", "Page content bg color");
    generateColorPicker("color6", null, "Post block body");
    generateColorPicker("color2", null, "Body bg, hr");
    generateColorPicker("color4", null, "Highlight color, link hover color");
    generateColorPicker("color4-trans","80", "Header & footer border, form control select box shadow");
    generateColorPicker("color8", null, "Form controls bg color");
    generateColorPicker("color1", null, "Body font color, scroll bar track, postblock title bg");
    generateColorPicker("color1-trans","80", "Header & footer box shadow");
    generateColorPicker("color1-trans2","bf", "Header & footer bg color");

</script>
<input style="display: block;" type="button" value="Reset" id="options-export" onclick="localStorage.clear();location.reload(true);">
<input style="display: block;" type="button" value="Export" id="options-export" onclick="exportColors()">