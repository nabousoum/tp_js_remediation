const tabMenu = [
    {
        'i' :'fa-solid fa-gauge',
        'text':'Dashboard',
        'span':'',
        'sousMenu':[]
    },
    {
        'i' :'fa-solid fa-table',
        'text':'Widgets',
        'span':'',
        'sousMenu':[]
    },
    {
        'i' :'fa-solid fa-file',
        'text':'Layout Options',
        'span':'',
        'sousMenu':[]
    },
    {
        'i' :'fa-solid fa-chart-pie',
        'text':'Charts',
        'span':'fas fa-caret-down',
        'sousMenu':[
            {
                'i' :'fa-regular fa-circle',
                'text':'ChartsJs',
                'span':'',
                'sousMenu':[]
            },
            {
                'i' :'fa-regular fa-circle',
                'text':'Flot',
                'span':'',
                'sousMenu':[]
            },
            {
                'i' :'fa-regular fa-circle',
                'text':'Inline',
                'span':'',
                'sousMenu':[]
            },
             {
                'i' :'fa-regular fa-circle',
                'text':'Uplot',
                'span':'',
                'sousMenu':[]
            }
        ]
    },
    {
        'i' :'fa-solid fa-tree',
        'text':'UI Elements',
        'span':'',
        'sousMenu':[]
    },
    {
        'i' :'fa-solid fa-calendar',
        'text':'Forms',
        'span':'',
        'sousMenu':[]
    },
    {
        'i' :'fa-solid fa-table',
        'text':'Table',
        'span':'',
        'sousMenu':[]
    }
]


const chartBtn = document.querySelector('.chart-btn');
const chartShow = document.querySelector('.chart-show');
const generateTab = document.getElementById('generateTab');
const ul = document.querySelector('.damaSoneu');


function reBuild(tab){
    tab.forEach(element => {
      generateLi(element,ul);
    });
}
reBuild(tabMenu);

function generateLi(element,ul,generateTab){
    const li = document.createElement('li');
      li.setAttribute('class','li');

      const a = document.createElement('a');

      const i = document.createElement('i');
      i.setAttribute('class',element.i);
      a.appendChild(i);
      const p = document.createElement('small');
      p.innerText=element.text;
      a.appendChild(p);

      const span = document.createElement('span');
      if(span){
        li.addEventListener('click',function(){
            ul2.classList.toggle('show');
        })
    }
      span.setAttribute('class',element.span);
 
      a.appendChild(span);

      li.appendChild(a);

      ul.appendChild(li);

     if(generateTab!= undefined){
        generateTab.appendChild(ul);
      }
     const ul2 = document.createElement('ul');
     ul2.setAttribute('class','chart-show');
     element.sousMenu.forEach(element => {
         generateLi(element,ul2,li);
     });
    console.log(element.sousMenu);
}







// if (element.sousMenu!==''){
//     a.setAttribute('class','chart-btn');
//     const ul2 = document.createElement('ul');
//     ul2.setAttribute('class','chart-show');
//     const li2 = document.createElement('li');
//     li2.setAttribute('class','li');

//     const a2 = document.createElement('a');
//     a2.innerText=element.sousMenu.text;

//     const i2 = document.createElement('i');
//     i2.setAttribute('class',element.sousMenu.i);

//     const span2 = document.createElement('span');
//     span2.setAttribute('class',element.sousMenu.span);
//     a2.appendChild(i2);
//     a2.appendChild(span2);
//     li2.appendChild(a2);
//     ul2.appendChild(li2);
//     li.appendChild(ul2);
// }
