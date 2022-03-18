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
                'icon2':''
            },
            {
                'icon1' :'fa-regular fa-circle',
                'label':'FLot',
                'icon2':''
            },
            {
                'icon1' :'fa-regular fa-circle',
                'label':'Inline',
                'icon2':''
            },
             {
                'icon1' :'fa-regular fa-circle',
                'label':'uPlot',
                'icon2':''
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
           // div.setAttribute('id','charts');
            const div2 = document.createElement('div');
            div2.setAttribute('id','chart2');
            div2.setAttribute('class','chart');

            const div3 = document.createElement('div');
            //div2.setAttribute('id','chart2');
            div3.setAttribute('class','chart2');
            const i = document.createElement('i');
            i.setAttribute('class',element.icon1);
        
            const p = document.createElement('p');
            p.innerText=element.label;
        
            const i2 = document.createElement('i');
            i2.setAttribute('class',element.icon2);
            div3.appendChild(i);
            div3.appendChild(p);
            div3.appendChild(i2);
            div2.appendChild(div3);
            console.log(div2);
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


//sousMenu.forEach(el => {
    //     const div = document.createElement('div');
    //     div.setAttribute('id','chart2');
    //     div.setAttribute('class','chart');
    //     const i = document.createElement('i');
    //     i.setAttribute('class',el.icon1);

    //     const p = document.createElement('p');
    //     p.innerText=el.label;

    //     const i2 = document.createElement('i');
    //     i2.setAttribute('class',el.icon2);
    //     div.appendChild(i);
    //     div.appendChild(p);
    //     div.appendChild(i2);
    // });
   