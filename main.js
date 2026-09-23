let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let btn = document.getElementById('btn');
let p = document.getElementById('p');
function ptext(){
    setTimeout(() => {
        p.innerText = '';
    }, 1900);
}
btn.onclick = function(){
    if(inp1.value === ""){
        p.innerText = 'please Enter Your Name';
        ptext();
        return;
    }
    if(inp2.value === ""){
        p.innerText = 'please Enter Your phone number';
        ptext();
        return;
    }
    if(inp2.value.length != 11){
        p.innerText = 'please enter a vaild phone number'
    }
    if(inp3.value === ""){
        p.innerText = 'please Enter Your Age';
        ptext();
        return;
    }
    p.innerText = "Your booking has been confirmed. We will contact you soon";
    ptext();
}