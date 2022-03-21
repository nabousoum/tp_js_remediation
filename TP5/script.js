const main = document.getElementById('main');
const container = document.getElementById('container');
const movies = document.getElementById('movies');
const inputSearch = document.getElementById('search');
const form = document.getElementById('form');


const SEARCH_API ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
 let api_url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

 getMovies(api_url);

function getMovies(url){
    fetch(url).then((reponse) => 
    reponse.json().then((data) => {
     showMovies(data.results);
    })
  );
}

function showMovies(data){
    // const res = data.results;
    // console.log(res);
    let i = 0;
    data.forEach(element => {
        i++;
        const div1 = document.createElement('div');
        div1.setAttribute('class','movie');
        const idMov='id'+i;
        div1.setAttribute('id',idMov);

        const div11 = document.createElement('div');
        div11.setAttribute('class','imgMovie');
        const img = document.createElement('img');
        img.src="https://image.tmdb.org/t/p/w1280"+element.poster_path;
        img.setAttribute('class','imgSize');
        const divText = document.createElement('div');
        divText.setAttribute('class','textCentrer');
        const pText = document.createElement('p');
        pText.setAttribute('class','pStyle');
        pText.innerText=element.overview;
       
        const div12 = document.createElement('div');
        div12.setAttribute('class','nameMovie');

        const div121 = document.createElement('div');
        div121.setAttribute('class','name');
        const p = document.createElement('p');
        p.innerText=element.title;

        const div122 = document.createElement('div');
        div122.setAttribute('class','version');
        const span = document.createElement('span');
        span.innerText=element.vote_average;

        div121.appendChild(p);
        div122.appendChild(span);
        div12.appendChild(div121);
        div12.appendChild(div122);
        div11.appendChild(img);
        divText.appendChild(pText);
        div11.appendChild(divText);
        div1.appendChild(div11);
        div1.appendChild(div12);
        movies.appendChild(div1);
    });
}

inputSearch.addEventListener('keyup',function(e){
   // e.preventDefault();
    var inputValue = inputSearch.value;
    if(inputValue){
        movies.innerHTML="";
        getMovies(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${inputValue}`);
    }
    else{
        movies.innerHTML="";
        getMovies(api_url);
    }
})