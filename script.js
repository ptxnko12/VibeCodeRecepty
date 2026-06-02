
const recipes = [
{
name:"Praženica",
ingredients:["vajcia","maslo","soľ","chlieb"],
time:10,
difficulty:"Ľahká",
servings:2,
image:"https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1200",
steps:["Rozbi vajcia","Rozpusť maslo","Opraž vajcia"]
},
{
name:"Carbonara",
ingredients:["cestoviny","slanina","vajcia","parmezán"],
time:20,
difficulty:"Stredná",
servings:2,
image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200",
steps:["Uvar cestoviny","Opraž slaninu","Zmiešaj"]
},
{
name:"Kuracie curry",
ingredients:["kuracie mäso","ryža","kari","smotana"],
time:35,
difficulty:"Stredná",
servings:3,
image:"https://images.unsplash.com/photo-1604908176997-431f4fce6b0c?q=80&w=1200",
steps:["Opraž mäso","Pridaj kari","Podávaj s ryžou"]
},
{
name:"Bryndzové halušky",
ingredients:["zemiaky","múka","bryndza","slanina"],
time:45,
difficulty:"Náročná",
servings:4,
image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200",
steps:["Priprav cesto","Uvar halušky","Pridaj bryndzu"]
}
];

while(recipes.length < 20){
 recipes.push({...recipes[recipes.length % 4], name: recipes[recipes.length % 4].name + " " + recipes.length});
}

const recipesContainer = document.getElementById("recipes");
const ingredientInput = document.getElementById("ingredientInput");
const addBtn = document.getElementById("addBtn");
const findBtn = document.getElementById("findBtn");
const tagsContainer = document.getElementById("tags");
const randomBtn = document.getElementById("randomBtn");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const difficultyFilter = document.getElementById("difficultyFilter");

let ingredients = [];

function normalizeText(text){
 return text.toLowerCase()
 .normalize("NFD")
 .replace(/[\u0300-\u036f]/g, "")
 .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
 .trim();
}

function renderTags(){
 tagsContainer.innerHTML = "";
 ingredients.forEach((item,index)=>{
   const tag = document.createElement("div");
   tag.className = "tag";
   tag.innerHTML = `${item} <span onclick="removeTag(${index})">✕</span>`;
   tagsContainer.appendChild(tag);
 });
}

function removeTag(index){
 ingredients.splice(index,1);
 renderTags();
}

function addIngredients(){
 const raw = ingredientInput.value;
 const split = raw.split(",");

 split.forEach(item=>{
   const cleaned = normalizeText(item);
   if(cleaned && !ingredients.includes(cleaned)){
      ingredients.push(cleaned);
   }
 });

 ingredientInput.value = "";
 renderTags();
}

addBtn.addEventListener("click", addIngredients);

ingredientInput.addEventListener("keypress",(e)=>{
 if(e.key === "Enter"){
   addIngredients();
 }
});

function renderRecipes(data){
 recipesContainer.innerHTML = "";

 if(data.length === 0){
   recipesContainer.innerHTML = "<h3>Skús pridať viac surovín alebo použi Náhodný recept.</h3>";
   return;
 }

 data.forEach(recipe=>{
   const matching = recipe.ingredients.filter(i=>
      ingredients.includes(normalizeText(i))
   );

   const percentage = Math.round((matching.length / recipe.ingredients.length) * 100);

   const missing = recipe.ingredients.filter(i=>
      !ingredients.includes(normalizeText(i))
   );

   const card = document.createElement("div");
   card.className = "card glass";

   card.innerHTML = `
   <img src="${recipe.image}" />
   <div class="card-content">
      <h3>${recipe.name}</h3>

      <div class="meta">
        <span>${recipe.time} min</span>
        <span>${recipe.difficulty}</span>
      </div>

      <div class="match">${percentage}% zhoda</div>

      <div class="ingredients">
        ${matching.map(i=>`<span class="good">${i}</span>`).join("")}
        ${missing.map(i=>`<span class="bad">${i}</span>`).join("")}
      </div>
   </div>
   `;

   card.addEventListener("click",()=>{
      modal.classList.remove("hidden");

      modalBody.innerHTML = `
        <h2>${recipe.name}</h2>
        <p><strong>Čas:</strong> ${recipe.time} min</p>
        <p><strong>Porcie:</strong> ${recipe.servings}</p>
        <h3>Suroviny</h3>
        <ul>
          ${recipe.ingredients.map(i=>`<li>${i}</li>`).join("")}
        </ul>

        <h3>Postup</h3>
        <ol>
          ${recipe.steps.map(s=>`<li>${s}</li>`).join("")}
        </ol>
      `;
   });

   recipesContainer.appendChild(card);
 });
}

findBtn.addEventListener("click",()=>{
 const selected = difficultyFilter.value;

 const filtered = recipes.filter(recipe=>{
   const matching = recipe.ingredients.filter(i=>
      ingredients.includes(normalizeText(i))
   );

   const percentage = (matching.length / recipe.ingredients.length) * 100;

   const matchesDifficulty =
     selected === "all" || recipe.difficulty === selected;

   return percentage >= 50 && matchesDifficulty;
 });

 renderRecipes(filtered);
});

randomBtn.addEventListener("click",()=>{
 const random = recipes[Math.floor(Math.random()*recipes.length)];
 renderRecipes([random]);
});

closeModal.addEventListener("click",()=>{
 modal.classList.add("hidden");
});

document.getElementById("themeToggle").addEventListener("click",()=>{
 document.body.classList.toggle("dark");
});

renderRecipes(recipes);
