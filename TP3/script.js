
  const container = document.getElementById('container');
//   container.addEventListener('mouseover',function(){
//     container.classList.toggle('zoom');
// })
function caroussel(){
    nbr=5;
    pos=0;
   
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
caroussel();
function gauche(){
   // g.addEventListener('click',function(){
        if(pos>-nbr+1)
        pos--;
        container.style.transform="translate("+pos*800+"px)";
        container.style.transition="all 0.5s ease";
        afficherBouton();
   // })
}
function droite(){
   // d.addEventListener('click',function(){
        if(pos<0)
        pos++;
        container.style.transform="translate("+pos*800+"px)";
        container.style.transition="all 0.5s ease";
        afficherBouton();
    //})
}
g.addEventListener('click',gauche);
d.addEventListener('click',droite);

setInterval(gauche, 5000);
function afficherBouton(){
    if(pos==-nbr+1)
    g.style.visibility="hidden";
    else
    g.style.visibility="visible";
    if(pos==0)
    d.style.visibility="hidden";
    else
    d.style.visibility="visible";

}
