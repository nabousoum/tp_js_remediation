
  const container = document.getElementById('container');
//   container.addEventListener('mouseover',function(){
//     container.classList.toggle('zoom');
// })
document.body.onload=function(){
    nbr=5;
    p=0;
   
    const g = document.getElementById('g');
    const d = document.getElementById('d');

    container.style.width=(800*nbr)+"px";
    for(i=1;i<=nbr;i++){
        const div = document.createElement('div');
        div.className="photo";
        div.style.backgroundImage="url('imgs/img"+i+".jpg')";
        container.appendChild(div);
    afficherBouton();
    }

}

function gauche(){
   // g.addEventListener('click',function(){
        if(p>-nbr+1)
        p--;
        container.style.transform="translate("+p*800+"px)";
        container.style.transition="all 0.5s ease";
        afficherBouton();
   // })
}
function droite(){
   // d.addEventListener('click',function(){
        if(p<0)
        p++;
        container.style.transform="translate("+p*800+"px)";
        container.style.transition="all 0.5s ease";
        afficherBouton();
    //})
}
g.addEventListener('click',gauche);
d.addEventListener('click',droite);

setInterval(gauche, 5000);

function afficherBouton(){
    if(p==-nbr+1)
    g.style.visibility="hidden";
    else
    g.style.visibility="visible";
    if(p==0)
    d.style.visibility="hidden";
    else
    d.style.visibility="visible";

}
