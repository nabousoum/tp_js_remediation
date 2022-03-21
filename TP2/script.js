const TabMenu = [
    {
        'icon1' :'fa-solid fa-gauge fa-2x',
        'label':'Dashboard',
        'icon2':'fa-solid fa-angle-left',
        'sousMenu':''
    },
    {
        'icon1' :'fa-solid fa-table  fa-2x',
        'label':'Widget',
        'icon2':'fa-solid fa-angle-left',
        'sousMenu':''
    },
    {
        'icon1' :'fa-solid fa-file fa-2x',
        'label':'Layout Options',
        'icon2':'fa-solid fa-angle-left',
        'sousMenu':''
    },
    {
        'icon1' :'fa-solid fa-chart-pie fa-2x',
        'label':'Charts',
        'icon2':'fa-solid fa-angle-left',
        'sousMenu':[
            {
                'icon1' :'fa-regular fa-circle',
                'label':'ChartJs',
                'icon2':'',
                'sousMenu':''
            },
            {
                'icon1' :'fa-regular fa-circle',
                'label':'FLot',
                'icon2':'',
                'sousMenu':''
            },
            {
                'icon1' :'fa-regular fa-circle',
                'label':'Inline',
                'icon2':'',
                'sousMenu':''
            },
             {
                'icon1' :'fa-regular fa-circle',
                'label':'uPlot',
                'icon2':'',
                'sousMenu':''
            }
        ]
    },  
    {
        'icon1' :'fa-solid fa-tree fa-2x',
        'label':'UI elements',
        'icon2':'fa-solid fa-angle-left',
        'sousMenu':''
    },
    {
        'icon1' :'fa-solid fa-calendar fa-2x',
        'label':'Forms',
        'icon2':'fa-solid fa-angle-left',
        'sousMenu':''
    },
    {
        'icon1' :'fa-solid fa-table fa-2x',
        'label':'Tables',
        'icon2':'fa-solid fa-angle-left',
        'sousMenu':''
    }

]


// 
const generateTab = document.getElementById('generateTab');
const menuId = document.getElementById('menu');
const main = document.getElementById('main');
const chart2 = document.querySelector('.chart');
const burger = document.getElementById('burger');
const img2 = document.getElementById('chart1');
const menu  = document.querySelector('.menu');

function reBuild(){
    TabMenu.forEach(element => {
        const div = document.createElement('div');
        //div.setAttribute('id','dashboard');
        div.setAttribute('class','elSideBar');
    
        const i = document.createElement('i');
        i.setAttribute('class',element.icon1);
    
        const p = document.createElement('p');
        p.innerText=element.label;
    
        const i2 = document.createElement('i');
        i2.setAttribute('class',element.icon2);
        
        div.addEventListener('click',function(){
            //on applique l event dans les div ayant un sous-menu
            //appel fonction avec parametre avec valeur de retour
            //reBuild();
        })
    
        div.appendChild(i);
        div.appendChild(p);
        div.appendChild(i2);
    
        generateTab.appendChild(div);
    
    });
}

reBuild();

// img2.addEventListener('click',function(){
//     chart2.classList.toggle('th');
// });
burger.addEventListener('click',function(){
    menu.classList.toggle('close');
})
