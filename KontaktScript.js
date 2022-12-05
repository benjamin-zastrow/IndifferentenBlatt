var submit, vname, nname, email, text;
var vnameOK = false, nnameOK = false, emailOK = false, textOK = false; 

function hasNumbers(t) {
    return /\d/.test(t);
}  

function initJS() {
    //Hintergrundfarbe zufällig
    var random = Math.floor((Math.random() * 10));
    var color;
    switch(random) {
        case 0: color = "azure"; break;
        case 1: color = "cornsilk"; break;
        case 2: color = "beige"; break;
        case 3: color = "ghostwhite"; break;
        case 4: color = "honeydew"; break;
        case 5: color = "lavender"; break;
        case 6: color = "lightyellow"; break;
        case 7: color = "moccasin"; break;
        case 8: color = "papayawhip"; break;
        case 9: color = "seashell"; break;
    }
    $("body").css("background-color", color);
    $("nav li img").css("background-color", color);
    //$("nav > ul").css("background-color", color);
    //$("nav > ul > li").css("background-color", color);
    $("nav").css("background-color", color);

    text = document.getElementById("text");
    email = document.getElementById("email");
    nname = document.getElementById("nachname");
    vname = document.getElementById("vorname");
    submit = document.getElementById("submit");
}

function inputChanged(n) {
    switch(n) {
        case 1: {
            if(vname.value === '' || hasNumbers(vname.value) || !/\S/.test(vname.value)) {
                vnameOK = false;
                vname.style.backgroundColor = "tomato";
            }
            else {
                vnameOK = true;
                vname.style.backgroundColor = "";
            }
            break;
        }
        case 2: {
            if(nname.value === '' || hasNumbers(nname.value) || !/\S/.test(nname.value)) {
                nnameOK = false;
                nname.style.backgroundColor = "tomato";
            }
            else {
                nnameOK = true;
                nname.style.backgroundColor = "";
            }
            break;
        }
        case 3: {
            if(email.value === '' || !email.value.includes("@") || !email.value.includes(".") || !/\S/.test(email.value)) {
                emailOK = false;
                email.style.backgroundColor = "tomato";
            }
            else {
                emailOK = true;
                email.style.backgroundColor = "";
            }
            break;
        }
        case 4: {
            if(text.value === '' || !/\S/.test(text.value)) {
                textOK = false;
                text.style.backgroundColor = "tomato";
            }
            else {
                textOK = true;
                text.style.backgroundColor = "";
            }
            break;
        }
        default: break;
    }

    if(vnameOK && nnameOK && emailOK && textOK) {
        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
}