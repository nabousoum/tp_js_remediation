const cont2 = document.getElementById('cont2');
const search = document.getElementById('search');
//const mealDetailsContent = document.querySelector('.meal-details-content');
const mealDetails = document.querySelector('.meal-details');
const generMeal = document.querySelector('.generateMeal');
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

        const div12 = document.createElement('div');
        div12.setAttribute('class','labelRec');

        const p = document.createElement('p');
        p.innerText=data.strMeal;

        const i = document.createElement('i');
        i.setAttribute('class','fa-solid fa-heart fa-2x tah');

        div11.appendChild(img);
        div12.appendChild(p);
        div12.appendChild(i);
        div1.appendChild(div11);
        div1.appendChild(button);
        div1.appendChild(div12);
        cont2.appendChild(div1);

        button.addEventListener('click',function(){
            window.location.reload();
        });     
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
           //console.log(mealItem);
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then( data => {
                console.log(data.meals)
                mealRecipeModel(data.meals)
            })
        }

    function mealRecipeModel(meal){
        meal=meal[0]; 

            const mealDetailsContent = document.createElement('div');
            mealDetailsContent.className="meal-details-content";

             const div = document.createElement('div');
             div.setAttribute('id','title');
             const h1 = document.createElement('h1');
             h1.innerText=meal.strMeal;
             const span = document.createElement('span');
             span.innerText='X';
    
            const div2 = document.createElement('div');
            div2.setAttribute('id','imgDesc');
            const img = document.createElement('img');
            img.src= meal.strMealThumb;
    
            const div3 = document.createElement('div');
            div3.setAttribute('id','reciepe');
            const p = document.createElement('p');
            p.innerText=meal.strInstructions;
            const p2 = document.createElement('p');
            p2.innerText='Ingredients';
            const ul = document.createElement('ul');
            const li = document.createElement('li');
            for(var i=1;i<=20;i++){
                if(meal["strIngredient"+i]!==''){
                    const li = document.createElement('li');
                    li.innerText = meal["strIngredient"+i];
                    ul.appendChild(li);
                }
            }
            div3.appendChild(p);
            div3.appendChild(p2);
            div3.appendChild(ul);
            div2.appendChild(img)
            div.appendChild(h1);
            div.appendChild(span);
            mealDetailsContent.appendChild(div);
            mealDetailsContent.appendChild(div2);
            mealDetailsContent.appendChild(div3);
            mealDetails.classList.add('showDescription');
            mealDetails.innerHTML="";
            mealDetails.appendChild(mealDetailsContent);
            span.addEventListener('click',function(){
                mealDetails.classList.remove('showDescription');
            })
    }
