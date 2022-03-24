const right = document.getElementById('right');
const buttons = document.querySelectorAll('button');
const container = document.getElementById('container');
// console.log(buttons);

for(var i=0;i< buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        const divNotif = document.createElement('div');
        divNotif.setAttribute('class','notif');
        const p = document.createElement('p');
        p.innerText="Mon projet";
        divNotif.appendChild(p);
        right.appendChild(divNotif);
        var cssObj = window.getComputedStyle(this);
        //console.log(cssObj.backgroundColor);
        //We can also create attributes  data-color
        var color = cssObj.backgroundColor;
        divNotif.style.backgroundColor = color;
        setTimeout(() => {
            divNotif.remove();
        }, 1000);
    })
}

