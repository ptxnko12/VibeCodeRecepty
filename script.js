const recepty = [
  {
    nazov: "Praženica so zeleninou",
    suroviny: ["vajcia", "maslo", "soľ", "mlieko", "cibuľa", "paprika"],
    postup: ["Nakrájaj cibuľu a papriku.", "Rozohrej maslo na panvici.", "Rozmiešaj vajcia s mliekom a soľou.", "Pridaj zeleninu a zalej vajcia.", "Miešaj dovtedy, kým nie sú vajcia mäkké."],
    cas: 12,
    obtiaznost: "ľahká",
    porcie: 2
  },
  {
    nazov: "Kurací paprikáš",
    suroviny: ["kuracie prsia", "cibuľa", "cesnak", "múka", "smotana", "paprika", "soľ"],
    postup: ["Opraž cibuľu a cesnak.", "Pridaj kúsky kuracieho mäsa.", "Posyp paprikou a zalej vodou.", "Dus 25 minút, potom zahusť a pridaj smotanu."],
    cas: 40,
    obtiaznost: "stredná",
    porcie: 4
  },
  {
    nazov: "Cestovinový šalát",
    suroviny: ["cestoviny", "šunka", "kukurička", "majoneza", "kyslá smotana", "soľ", "korenie"],
    postup: ["Uvar cestoviny al dente.", "Nakrájaj šunku a zmiešaj so zeleninou.", "Pridaj kukuricu a dresing.", "Premiešaj a nechaj odstáť v chlade."],
    cas: 20,
    obtiaznost: "ľahká",
    porcie: 3
  },
  {
    nazov: "Pohankové placky",
    suroviny: ["pohánka", "vajcia", "mlieko", "soľ", "olej", "cibuľa"],
    postup: ["Uvar pohánku podľa návodu.", "Zmiešaj s vajcami, mliekom a korením.", "Opeč na panvici do zlatista.", "Podávaj s kyslou smotanou alebo šalátom."],
    cas: 30,
    obtiaznost: "stredná",
    porcie: 3
  },
  {
    nazov: "Rizoto s hubami",
    suroviny: ["ryža", "huby", "cibuľa", "cesnak", "vývar", "maslo", "parmezán"],
    postup: ["Opraž cibuľu a cesnak.", "Pridaj ryžu a chvíľu opekaj.", "Postupne prilievaj horúci vývar.", "Pridaj opečené huby a parmezán."],
    cas: 35,
    obtiaznost: "stredná",
    porcie: 4
  },
  {
    nazov: "Ryžová kaša s ovocím",
    suroviny: ["ryža", "mlieko", "cukor", "vanilka", "ovocie", "soľ"],
    postup: ["Uvar ryžu v mlieku so štipkou soli.", "Doslaď cukrom a pridaj vanilku.", "Podávaj s čerstvým ovocím."],
    cas: 25,
    obtiaznost: "ľahká",
    porcie: 2
  },
  {
    nazov: "Bravčový guláš",
    suroviny: ["bravčové mäso", "cibuľa", "cesnak", "múka", "paprika", "vývar", "soľ"],
    postup: ["Orestuj cibuľu a cesnak.", "Pridaj mäso a opeč do hnedá.", "Posyp paprikou a zalej vývarom.", "Dus 1 hodinu do mäkka."],
    cas: 90,
    obtiaznost: "náročná",
    porcie: 6
  },
  {
    nazov: "Grilovaný losos",
    suroviny: ["losos", "citrón", "korenie", "olivový olej", "soľ", "bylinky"],
    postup: ["Osol lososa a potri olejom.", "Griluj 8-10 minút.", "Pokvapkaj citrónom a podávaj s bylinkami."],
    cas: 25,
    obtiaznost: "stredná",
    porcie: 2
  },
  {
    nazov: "Šošovicová polievka",
    suroviny: ["šošovica", "mrkva", "zeler", "cibuľa", "cesnak", "vývar", "majorán"],
    postup: ["Opraž zeleninu.", "Pridaj šošovicu a vývar.", "Varte 30 minút.", "Dochut si majoránom."],
    cas: 45,
    obtiaznost: "ľahká",
    porcie: 4
  },
  {
    nazov: "Chilli con carne",
    suroviny: ["mleté mäso", "fazule", "cibuľa", "cesnak", "paradajkový pretlak", "chilli", "korenie"],
    postup: ["Opeč cibuľu a mäso.", "Pridaj korenie a pretlak.", "Vmiešaj fazule a duste 20 minút."],
    cas: 50,
    obtiaznost: "stredná",
    porcie: 5
  },
  {
    nazov: "Pečené zemiaky",
    suroviny: ["zemiaky", "olivový olej", "soľ", "rozmarín", "cesnak"],
    postup: ["Nakrájaj zemiaky na plátky.", "Premiešaj s olejom a korením.", "Peč 35 minút do chrumkava."],
    cas: 45,
    obtiaznost: "ľahká",
    porcie: 4
  },
  {
    nazov: "Tvarohové palacinky",
    suroviny: ["múka", "vajcia", "mlieko", "tvaroh", "cukor", "soľ", "olej"],
    postup: ["Zmiešaj cesto z múky, vajec a mlieka.", "Vylej na panvicu a opeč z oboch strán.", "Naplň palacinky tvarohom a posyp cukrom."],
    cas: 25,
    obtiaznost: "ľahká",
    porcie: 3
  },
  {
    nazov: "Mexické tortilly",
    suroviny: ["tortilla", "kuracie mäso", "salsa", "avokádo", "kukurica", "syr"],
    postup: ["Opeč kuracie kúsky.", "Naplň tortilly zeleninou a salsou.", "Zabaľ a podávaj so syrom."],
    cas: 30,
    obtiaznost: "stredná",
    porcie: 4
  }
];

const ingredientInput = document.getElementById('ingredientInput');
const addIngredientBtn = document.getElementById('addIngredientBtn');
const tagList = document.getElementById('tagList');
const findBtn = document.getElementById('findBtn');
const randomBtn = document.getElementById('randomBtn');
const recipeGrid = document.getElementById('recipeGrid');
const resultHint = document.getElementById('resultHint');
const modal = document.getElementById('recipeModal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModalBtn');
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

let ingredients = [];
const storageKey = 'receptovyVibeTheme';

function normalize(text){
  return text.trim().toLowerCase();
}

function saveTheme(isDark){
  localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
}

function applyTheme(theme){
  document.body.classList.toggle('dark', theme === 'dark');
  themeToggle.checked = theme === 'dark';
  themeLabel.textContent = theme === 'dark' ? 'Tmavý mód' : 'Svetlý mód';
}

function loadTheme(){
  const saved = localStorage.getItem(storageKey);
  applyTheme(saved === 'dark' ? 'dark' : 'light');
}

function renderTags(){
  tagList.innerHTML = '';
  if(!ingredients.length){
    tagList.textContent = 'Zatiaľ žiadne suroviny.';
    return;
  }
  ingredients.forEach((item, index) => {
    const tag = document.createElement('div');
    tag.className = 'tag';
    tag.innerHTML = `<span>${item}</span><button type="button" aria-label="Odstrániť ${item}">×</button>`;
    tag.querySelector('button').addEventListener('click', () => {
      ingredients.splice(index, 1);
      renderTags();
    });
    tagList.appendChild(tag);
  });
}

function showMessage(message){
  recipeGrid.innerHTML = `<div class="no-results"><strong>${message}</strong></div>`;
}

function getMatchInfo(recipe){
  const available = recipe.suroviny.filter(item => ingredients.includes(normalize(item)));
  const matched = available.length;
  const percent = Math.round((matched / recipe.suroviny.length) * 100);
  const missing = recipe.suroviny.filter(item => !ingredients.includes(normalize(item)));
  return {matched, percent, available, missing};
}

function renderRecipeCard(recipe, highlightRandom = false){
  const {percent, available, missing} = getMatchInfo(recipe);
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <h3>${recipe.nazov}</h3>
    <div class="meta"><span>⏱ ${recipe.cas} min</span><span>💪 ${recipe.obtiaznost}</span></div>
    <div class="match">
      <span class="badge">${percent}% zhoda</span>
      <span class="badge">🟢 ${available.length} dostupné</span>
      <span class="badge">🔴 ${missing.length} chýbajúce</span>
    </div>
  `;
  if(highlightRandom){
    const randomFlag = document.createElement('div');
    randomFlag.className='badge';
    randomFlag.textContent='🎲 Náhodný recept';
    card.appendChild(randomFlag);
  }
  card.addEventListener('click', () => openModal(recipe));
  return card;
}

function renderRecipes(recipes, message){
  recipeGrid.innerHTML = '';
  if(!recipes.length){
    showMessage(message);
    return;
  }
  recipes.forEach(recipe => recipeGrid.appendChild(renderRecipeCard(recipe)));
}

function findRecipes(){
  if(!ingredients.length){
    renderRecipes([], 'Skús pridať viac surovín alebo klikni na Náhodný recept.');
    resultHint.textContent = 'Pridaj aspoň jednu surovinu pred vyhľadávaním.';
    return;
  }
  const filtered = recepty
    .map(recipe => ({ recipe, ...getMatchInfo(recipe) }))
    .filter(item => item.percent >= 50)
    .sort((a,b) => b.percent - a.percent || a.recipe.cas - b.recipe.cas)
    .map(item => item.recipe);

  if(!filtered.length){
    renderRecipes([], 'Skús pridať viac surovín alebo klikni na Náhodný recept.');
    resultHint.textContent = 'Žiadny recept s dostatočnou zhoda; pridaj ďalšie suroviny.';
    return;
  }
  renderRecipes(filtered, '');
  resultHint.textContent = `Zobrazené recepty s najmenej 50% zhody. (${filtered.length} výsledkov)`;
}

function pickRandomRecipe(){
  const index = Math.floor(Math.random() * recepty.length);
  const recipe = recepty[index];
  recipeGrid.innerHTML = '';
  recipeGrid.appendChild(renderRecipeCard(recipe, true));
  resultHint.textContent = 'Náhodný recept ignoruje suroviny. Klikni na kartu pre detail.';
}

function openModal(recipe){
  const {available, missing} = getMatchInfo(recipe);
  modalBody.innerHTML = `
    <h2 id="modalTitle" class="modal-title">${recipe.nazov}</h2>
    <div class="modal-grid">
      <div class="summary">
        <span>⏱ Čas: <strong>${recipe.cas} min</strong></span>
        <span>🍽 Porcie: <strong>${recipe.porcie}</strong></span>
        <span>💪 Obtiažnosť: <strong>${recipe.obtiaznost}</strong></span>
      </div>
      <div>
        <h3>Ingrediencie</h3>
        <div class="ingredient-list">
          ${recipe.suroviny.map(item => {
            const isAvailable = ingredients.includes(normalize(item));
            return `<div class="ingredient-item ${isAvailable ? 'available' : 'missing'}"><span>${isAvailable ? '🟢' : '🔴'}</span><span>${item}</span></div>`;
          }).join('')}
        </div>
      </div>
      <div>
        <h3>Postup</h3>
        <ol class="step-list">
          ${recipe.postup.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
}

function closeModal(){
  modal.classList.add('hidden');
}

function addIngredient(){
  const value = normalize(ingredientInput.value);
  if(!value) return;
  if(!ingredients.includes(value)){
    ingredients.push(value);
    renderTags();
  }
  ingredientInput.value = '';
  ingredientInput.focus();
}

addIngredientBtn.addEventListener('click', addIngredient);
ingredientInput.addEventListener('keydown', event => {
  if(event.key === 'Enter'){
    event.preventDefault();
    addIngredient();
  }
});
findBtn.addEventListener('click', findRecipes);
randomBtn.addEventListener('click', pickRandomRecipe);
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if(event.target === modal || event.target.classList.contains('modal-backdrop')){
    closeModal();
  }
});
window.addEventListener('keydown', event => {
  if(event.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
  }
});

themeToggle.addEventListener('change', () => {
  const theme = themeToggle.checked ? 'dark' : 'light';
  applyTheme(theme);
  saveTheme(theme === 'dark');
});

loadTheme();
renderTags();
