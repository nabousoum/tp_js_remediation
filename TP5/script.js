const main = document.getElementById('main');
const container = document.getElementById('container');
const movies = document.getElementById('movies');




let url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


fetch(url).then((reponse) => 
    reponse.json().then((data) => {
        const res = data.results;
        console.log(res);
        res.forEach(element => {
            const div1 = document.createElement('div');
            div1.setAttribute('class','movie');

            const div11 = document.createElement('div');
            div11.setAttribute('class','imgMovie');
            const img = document.createElement('img');
            img.src="https://image.tmdb.org/t/p/w1280"+element.poster_path;
            img.setAttribute('class','imgSize');

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
            div1.appendChild(div11);
            div1.appendChild(div12);
            movies.appendChild(div1);
            
        });
        
        //nameM.appendChild(p);
    })
);

