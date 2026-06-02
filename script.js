const recipes = [
  {
    nazov: "Praženica s chlebom",
    suroviny: ["vajcia", "maslo", "soľ", "chlieb"],
    postup: [
      "Rozšľahaj vajcia v miske so soľou.",
      "Na panvici rozpusti maslo.",
      "Pridaj vajcia a miešaj do krémovej konzistencie.",
      "Podávaj s opečeným chlebom."
    ],
    cas: 10,
    obtiaznost: "Ľahká",
    porcie: 2,
    obrazok: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Paradajkové cestoviny",
    suroviny: ["cestoviny", "paradajky", "cesnak", "olivový olej", "syr"],
    postup: [
      "Uvar cestoviny v osolenej vode.",
      "Na panvici opeč cesnak na olivovom oleji.",
      "Pridaj paradajky a nechaj ich zmäknúť.",
      "Zmiešaj s cestovinami a posyp syrom."
    ],
    cas: 20,
    obtiaznost: "Ľahká",
    porcie: 2,
    obrazok: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Krémové rizoto s hubami",
    suroviny: ["ryža", "huby", "cibuľa", "maslo", "vývar", "syr"],
    postup: [
      "Na masle orestuj cibuľu.",
      "Pridaj ryžu a krátko ju opeč.",
      "Postupne prilievaj vývar a miešaj.",
      "Na záver pridaj huby a syr."
    ],
    cas: 30,
    obtiaznost: "Stredná",
    porcie: 2,
    obrazok: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Kuracie na cesnaku",
    suroviny: ["kuracie mäso", "cesnak", "soľ", "maslo", "cibuľa"],
    postup: [
      "Kuracie mäso osoľ a priprav na panvicu.",
      "Na masle orestuj cesnak a cibuľu.",
      "Pridaj mäso a opeč z oboch strán.",
      "Podávaj s prílohou podľa chuti."
    ],
    cas: 25,
    obtiaznost: "Ľahká",
    porcie: 2,
    obrazok: "https://images.unsplash.com/photo-1604908177074-4f1b9b5a7d5d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Zeleninová polievka",
    suroviny: ["mrkva", "zemiaky", "cibuľa", "cesnak", "vývar", "soľ"],
    postup: [
      "Nakrájaj zeleninu na menšie kúsky.",
      "Orestuj cibuľu a cesnak.",
      "Pridaj zvyšok zeleniny a zalej vývarom.",
      "Var, kým nebude zelenina mäkká."
    ],
    cas: 35,
    obtiaznost: "Ľahká",
    porcie: 4,
    obrazok: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Bravčové soté s ryžou",
    suroviny: ["bravčové mäso", "ryža", "cibuľa", "paprika", "olej", "soľ"],
    postup: [
      "Ryžu uvar podľa návodu.",
      "Na panvici opeč cibuľu a mäso.",
      "Pridaj papriku a dochuť.",
      "Podávaj s ryžou."
    ],
    cas: 35,
    obtiaznost: "Stredná",
    porcie: 3,
    obrazok: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Tuniakový toast",
    suroviny: ["chlieb", "tuniak", "syr", "maslo", "cibuľa"],
    postup: [
      "Chlieb potri maslom.",
      "Pridaj tuniaka, cibuľu a syr.",
      "Zapeč do zlatista.",
      "Podávaj teplé."
    ],
    cas: 12,
    obtiaznost: "Ľahká",
    porcie: 1,
    obrazok: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Špenátové gnocchi",
    suroviny: ["gnocchi", "špenát", "smotana", "cesnak", "syr"],
    postup: [
      "Uvar gnocchi vo vode.",
      "Na panvici orestuj cesnak a špenát.",
      "Pridaj smotanu a syr.",
      "Vmiešaj gnocchi a podávaj."
    ],
    cas: 18,
    obtiaznost: "Ľahká",
    porcie: 2,
    obrazok: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Pečené zemiaky s dipom",
    suroviny: ["zemiaky", "jogurt", "cesnak", "soľ", "olej"],
    postup: [
      "Zemiaky nakrájaj na mesiačiky.",
      "Olejom ich potri a osoľ.",
      "Upeč dozlatista.",
      "Servíruj s cesnakovým dipom."
    ],
    cas: 40,
    obtiaznost: "Ľahká",
    porcie: 3,
    obrazok: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Palačinky",
    suroviny: ["vajcia", "mlieko", "múka", "cukor", "maslo"],
    postup: [
      "Zmiešaj vajcia, mlieko a múku.",
      "Cesto nechaj chvíľu odstáť.",
      "Na panvici peč tenké palacinky.",
      "Podávaj s obľúbenou plnkou."
    ],
    cas: 20,
    obtiaznost: "Ľahká",
    porcie: 4,
    obrazok: "https://images.unsplash.com/photo-1562379894-7a6b5f0b7d6f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Šalát s avokádom",
    suroviny: ["avokádo", "paradajky", "uhorka", "cibuľa", "olivový olej"],
    postup: [
      "Nakrájaj všetky ingrediencie.",
      "Zmiešaj ich v mise.",
      "Dochucuj podľa chuti.",
      "Podávaj čerstvé."
    ],
    cas: 12,
    obtiaznost: "Ľahká",
    porcie: 2,
    obrazok: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Zapekaný karfiol",
    suroviny: ["karfiol", "syr", "vajcia", "smotana", "soľ"],
    postup: [
      "Karfiol predvar do polomäkka.",
      "Priprav zálievku z vajec a smotany.",
      "Zalej a posyp syrom.",
      "Zapeč do zlatista."
    ],
    cas: 35,
    obtiaznost: "Stredná",
    porcie: 3,
    obrazok: "https://images.unsplash.com/photo-1512852939750-1305098529bf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Tvarohový dezert",
    suroviny: ["tvaroh", "jogurt", "med", "ovocie", "sušienky"],
    postup: [
      "Tvaroh zmiešaj s jogurtom a medom.",
      "Do pohára vrstvi krém, ovocie a sušienky.",
      "Nechaj krátko vychladiť.",
      "Podávaj ako dezert."
    ],
    cas: 15,
    obtiaznost: "Ľahká",
    porcie: 2,
    obrazok: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Minestrone",
    suroviny: ["fazuľa", "mrkva", "zeler", "paradajky", "cestoviny", "vývar"],
    postup: [
      "Orestuj zeleninu na olivovom oleji.",
      "Pridaj paradajky a vývar.",
      "Vhoď cestoviny a fazuľu.",
      "Var, kým sa chute spoja."
    ],
    cas: 40,
    obtiaznost: "Stredná",
    porcie: 4,
    obrazok: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Omáčka na špagety",
    suroviny: ["paradajky", "cesnak", "cibuľa", "olivový olej", "bazalka"],
    postup: [
      "Cibuľu a cesnak jemne opeč.",
      "Pridaj paradajky a nechaj prebublávať.",
      "Dochuti bazalkou.",
      "Podávaj so špagetami."
    ],
    cas: 22,
    obtiaznost: "Ľahká",
    porcie: 2,
    obrazok: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Syrové fašírky",
    suroviny: ["mleté mäso", "syr", "vajcia", "strúhanka", "soľ"],
    postup: [
      "Zmiešaj všetky suroviny.",
      "Vytvaruj malé fašírky.",
      "Opeč ich na panvici alebo upeč.",
      "Podávaj s prílohou."
    ],
    cas: 30,
    obtiaznost: "Stredná",
    porcie: 3,
    obrazok: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Cícerový bowl",
    suroviny: ["cícer", "avokádo", "paradajky", "uhorka", "jogurt"],
    postup: [
      "Cícer prepláchni a osuši.",
      "Pridaj nakrájanú zeleninu.",
      "Dochucuj jogurtovým dresingom.",
      "Podávaj ako zdravý bowl."
    ],
    cas: 15,
    obtiaznost: "Ľahká",
    porcie: 2,
    obrazok: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    nazov: "Ryžový nákyp",
    suroviny: ["ryža", "mlieko", "vajcia", "cukor", "ovocie"],
    postup: [
      "Uvar ryžu v mlieku.",
      "Vmiešaj vajcia a cukor.",
      "Prelož do zapekacej misy s ovocím.",
      "Upeč dozlatista."
    ],
    cas: 45,
    obtiaznost: "Stredná",
    porcie: 4,
    obrazok: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80"
  }
];

const els = {
  input: document.getElementById("ingredientInput"),
  addBtn: document.getElementById("addIngredientBtn"),
  tags: document.getElementById("ingredientTags"),
  count: document.getElementById("ingredientCount"),
  findBtn: document.getElementById("findRecipesBtn"),
  randomBtn: document.getElementById("randomRecipeBtn"),
  clearBtn: document.getElementById("clearBtn"),
  recipes: document.getElementById("recipesContainer"),
  status: document.getElementById("statusMessage"),
  modal: document.getElementById("recipeModal"),
  modalContent: document.getElementById("modalContent"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  closeModalBackdrop: document.getElementById("closeModalBackdrop"),
  heroRandom: document.getElementById("randomHeroBtn"),
  template: document.getElementById("recipeCardTemplate")
};

const state = {
  ingredients: [],
  visibleRecipes: []
};

function normalize(value){
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function showStatus(message, type = "error"){
  els.status.textContent = message;
  els.status.classList.remove("hidden", "success");
  if(type === "success") els.status.classList.add("success");
}

function hideStatus(){
  els.status.classList.add("hidden");
  els.status.textContent = "";
  els.status.classList.remove("success");
}

function updateCount(){
  els.count.textContent = state.ingredients.length;
}

function renderTags(){
  els.tags.innerHTML = "";
  state.ingredients.forEach((ingredient, index) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.innerHTML = `<span>${ingredient}</span>`;
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.setAttribute("aria-label", `Odstrániť ${ingredient}`);
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => {
      state.ingredients.splice(index, 1);
      renderTags();
      updateCount();
    });
    tag.appendChild(removeBtn);
    els.tags.appendChild(tag);
  });
  updateCount();
}

function addIngredient(){
  const value = normalize(els.input.value);
  if(!value){
    showStatus("Zadaj prosím názov suroviny.");
    return;
  }
  if(state.ingredients.includes(value)){
    showStatus("Táto surovina už bola pridaná.");
    els.input.value = "";
    return;
  }
  state.ingredients.push(value);
  els.input.value = "";
  renderTags();
  hideStatus();
}

function calcMatch(recipe){
  const normalizedRecipeIngredients = recipe.suroviny.map(normalize);
  const available = normalizedRecipeIngredients.filter(item => state.ingredients.includes(item));
  const missing = normalizedRecipeIngredients.filter(item => !state.ingredients.includes(item));
  const match = Math.round((available.length / normalizedRecipeIngredients.length) * 100);
  return { available, missing, match };
}

function createPreview(container, items, type){
  container.innerHTML = "";
  if(items.length === 0){
    const empty = document.createElement("span");
    empty.textContent = type === "available" ? "Žiadne" : "Všetky máš";
    empty.style.opacity = ".7";
    container.appendChild(empty);
    return;
  }
  items.slice(0, 4).forEach(item => {
    const chip = document.createElement("span");
    chip.textContent = item;
    container.appendChild(chip);
  });
}

function renderRecipes(recipesToRender){
  els.recipes.innerHTML = "";

  if(recipesToRender.length === 0){
    els.recipes.innerHTML = `
      <div class="no-results">
        <h3>Skús pridať viac surovín alebo klikni na Náhodný recept</h3>
        <p>Momentálne nenašli sme recept s dostatočnou zhodou.</p>
        <button class="btn btn-primary" id="noResultsRandom" type="button">Náhodný recept</button>
      </div>
    `;
    document.getElementById("noResultsRandom").addEventListener("click", pickRandomRecipe);
    return;
  }

  recipesToRender.forEach(recipe => {
    const { available, missing, match } = calcMatch(recipe);
    const card = els.template.content.cloneNode(true);
    const article = card.querySelector(".recipe-card");
    const image = card.querySelector(".recipe-image");
    const badge = card.querySelector(".difficulty-badge");
    const title = card.querySelector(".recipe-title");
    const matchPill = card.querySelector(".match-pill");
    const time = card.querySelector(".meta-time");
    const servings = card.querySelector(".meta-servings");
    const bar = card.querySelector(".match-bar span");
    const availableWrap = card.querySelector(".preview-list.available");
    const missingWrap = card.querySelector(".preview-list.missing");

    image.src = recipe.obrazok;
    image.alt = recipe.nazov;
    badge.textContent = recipe.obtiaznost;
    title.textContent = recipe.nazov;
    matchPill.textContent = `${match}% zhoda`;
    time.textContent = `⏱ ${recipe.cas} min`;
    servings.textContent = `👥 ${recipe.porcie} porcie`;
    bar.style.width = `${match}%`;

    createPreview(availableWrap, available, "available");
    createPreview(missingWrap, missing, "missing");

    article.addEventListener("click", () => openModal(recipe, available, missing, match));
    els.recipes.appendChild(card);
  });
}

function getFilteredRecipes(){
  return recipes
    .map(recipe => {
      const analysis = calcMatch(recipe);
      return { ...recipe, ...analysis };
    })
    .filter(recipe => recipe.match >= 50)
    .sort((a, b) => b.match - a.match || a.cas - b.cas);
}

function findRecipes(){
  hideStatus();
  if(state.ingredients.length === 0){
    showStatus("Najprv pridaj aspoň jednu surovinu.");
    renderRecipes([]);
    return;
  }
  const filtered = getFilteredRecipes();
  if(filtered.length === 0){
    showStatus("Skús pridať viac surovín alebo klikni na Náhodný recept.");
    renderRecipes([]);
    return;
  }
  showStatus(`Našli sme ${filtered.length} receptov podľa zhody surovín.`, "success");
  renderRecipes(filtered);
}

function randomRecipe(){
  const pool = recipes.map(recipe => ({ ...recipe, ...calcMatch(recipe) }));
  const pick = pool[Math.floor(Math.random() * pool.length)];
  const filtered = recipes
    .map(recipe => ({ ...recipe, ...calcMatch(recipe) }))
    .filter(recipe => recipe.match >= 50)
    .sort((a,b) => b.match - a.match);

  if(state.ingredients.length > 0 && filtered.length > 0){
    openModal(filtered[Math.floor(Math.random() * filtered.length)]);
  } else {
    openModal(pick);
  }
}

function pickRandomRecipe(){
  randomRecipe();
}

function openModal(recipe, available = [], missing = [], match = 0){
  const analysis = available.length || missing.length ? { available, missing, match } : calcMatch(recipe);
  const modalIngredients = recipe.suroviny.map(item => {
    const normalized = normalize(item);
    const isAvailable = state.ingredients.includes(normalized);
    return `<li class="${isAvailable ? "available" : "missing"}">${item}</li>`;
  }).join("");

  const steps = recipe.postup.map((step, index) => `
    <li><span class="step-num">${index + 1}</span><span>${step}</span></li>
  `).join("");

  const availableCount = analysis.available.length;
  const missingCount = analysis.missing.length;

  els.modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-figure">
        <img src="${recipe.obrazok}" alt="${recipe.nazov}">
      </div>
      <div>
        <span class="eyebrow">Detail receptu</span>
        <h2 id="modalTitle" style="font-family:Montserrat,sans-serif;font-size:clamp(1.8rem,3vw,2.5rem);margin:.35rem 0 0;letter-spacing:-.03em;">${recipe.nazov}</h2>
        <div class="modal-meta">
          <span class="badge">⏱ ${recipe.cas} min</span>
          <span class="badge">👥 ${recipe.porcie} porcie</span>
          <span class="badge">⭐ ${analysis.match}% zhoda</span>
          <span class="badge">${recipe.obtiaznost}</span>
        </div>

        <div class="modal-section">
          <h4>Suroviny</h4>
          <ul class="ingredients-list">${modalIngredients}</ul>
        </div>

        <div class="modal-section">
          <h4>Postup varenia</h4>
          <ol class="steps-list">${steps}</ol>
        </div>

        <div class="modal-section">
          <h4>Zhrnutie</h4>
          <div class="summary-card">
            <p class="summary-label">Dostupné suroviny</p>
            <strong>${availableCount}</strong>
            <p class="summary-label" style="margin-top:12px;">Chýbajúce suroviny</p>
            <strong>${missingCount}</strong>
          </div>
        </div>
      </div>
    </div>
  `;

  els.modal.classList.remove("hidden");
  els.modal.setAttribute("aria-hidden", "false");
}

function closeModal(){
  els.modal.classList.add("hidden");
  els.modal.setAttribute("aria-hidden", "true");
}

function clearIngredients(){
  state.ingredients = [];
  renderTags();
  hideStatus();
  renderRecipes([]);
}

els.addBtn.addEventListener("click", addIngredient);
els.input.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    e.preventDefault();
    addIngredient();
  }
});
els.findBtn.addEventListener("click", findRecipes);
els.randomBtn.addEventListener("click", randomRecipe);
els.heroRandom.addEventListener("click", randomRecipe);
els.clearBtn.addEventListener("click", clearIngredients);
els.closeModalBtn.addEventListener("click", closeModal);
els.closeModalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});

renderTags();
renderRecipes(recipes.map(recipe => ({ ...recipe, ...calcMatch(recipe) })).sort((a,b) => b.match - a.match).slice(0, 6));
