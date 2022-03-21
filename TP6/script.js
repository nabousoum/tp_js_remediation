const cont2 = document.getElementById('cont2');
const search = document.getElementById('search');


let api_filtre_by_id="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52913";
let api_filtre_by_name="https://www.themealdb.com/api/json/v1/1/search.php?s=Brie";
let generate_meals="https://www.themealdb.com/api/json/v1/1/random.php";

getRandomMeals(generate_meals);

function getRandomMeals(url){
    fetch(url).then((reponse) => 
    reponse.json().then((data) => {
        data.meals.forEach(element => {
            showMeal(element);
        });
 
    })
  );
}


    function showMeal(data){
       // console.log(data);

        const div1 = document.createElement('div');
        div1.setAttribute('class','generateMeal');
        div1.setAttribute('data-id',data.idMeal)

        const div11 = document.createElement('div');
        div11.setAttribute('class','divImg');
        const img = document.createElement('img');
        img.src=data.strMealThumb;

        const button = document.createElement('button');
        button.innerText="Generer une recette"
        button.addEventListener('click',function(){
            window.location.reload();
        });
        const div12 = document.createElement('div');
        div12.setAttribute('class','labelRec');

        const p = document.createElement('p');
        p.innerText=data.strMeal;

        const i = document.createElement('i');
        i.setAttribute('class','fa-solid fa-heart fa-2x');
        i.setAttribute('id','like');

        div11.appendChild(img);
        div12.appendChild(p);
        div12.appendChild(i);
        div1.appendChild(div11);
        div1.appendChild(button);
        div1.appendChild(div12);
        cont2.appendChild(div1);
    }
    

    search.addEventListener('keyup',function(e){
        // e.preventDefault();
         var inputValue = search.value;
         if(inputValue){
            cont2.innerHTML="";
             getRandomMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
         }
         else{
            cont2.innerHTML="";
             getRandomMeals(generate_meals);
         }
     })
    

     cont2.addEventListener('click',getMealRecipes);
     function getMealRecipes(e){
         e.preventDefault();
        //if(e.target.classList.contains('fa-solid fa-heart fa-2x')){
            let mealItem = e.target.parentElement.parentElement;
           // console.log(mealItem);
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then( data => {
                mealRecipeModel(data.meals)
            })
        }
     function mealRecipeModel(meal){
        // console.log(meal);
         meal=meal[0];
     }