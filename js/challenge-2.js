a = prompt('what is your month number?');
a2 = prompt('what is your month number?');
a3 = prompt('what is your month number?');
a4 = prompt('what is your month number?');
a5 = prompt('what is your month number?');
function max (max) {
    if (a > a2 && a3 && a4 && a5) {
        alert(a);
    }
    else if (a2> a1 && a3 && a4 && a5) {
        alert(a2);
    }
    else if (a3 > a1 && a2 && a4 && a5) {
        alert(a3);
    }
    else if (a4 > a1 && a2 && a3 && a5) {
        alert(a4);
    }
    else if (a5 > a1 && a2 && a3 && a4)
    {
     alert(a5);
        
    }
    else
    {
        alert('you can choose a number ')
        }
}
function min(min) {
    if (a < a2 && a3 && a4 && a5) {
        alert(a);
    }
    else if (a2 < a1 && a3 && a4 && a5) {
        alert(a2);
    }
    else if (a3 < a1 && a2 && a4 && a5) {
        alert(a3);
    }
    else if (a4 < a1 && a2 && a3 && a5) {
        alert(a4);
    }
    else if (a5 < a1 && a2 && a3 && a4) {
        alert(a5);

    }
    else {
        alert('you can choose a number ')
    }
}
max();
min();