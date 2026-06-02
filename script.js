/* ===================================================================
   CookAI — Recipe generator
   Vanilla JS · ingredient matching · modal · responsive
   =================================================================== */

/* ---------- Recipe database (20+) ---------- */
const recipes = [
  {
    title: "Praženica s chlebom",
    ingredients: ["vajcia", "maslo", "soľ", "chlieb"],
    instructions: [
      "Rozbi vajcia do misky a osoľ.",
      "Rozohrej maslo na panvici na strednom ohni.",
      "Vlej vajcia a pomaly miešaj drevenou vareškou.",
      "Podávaj s opečeným chlebom."
    ],
    time: 10, difficulty: "Ľahká", servings: 2,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format"
  },
  {
    title: "Cestoviny aglio e olio",
    ingredients: ["cestoviny", "cesnak", "olivový olej", "petržlen", "soľ", "chilli"],
    instructions: [
      "Uvar cestoviny v osolenej vode al dente.",
      "Na olivovom oleji opraž plátky cesnaku a chilli.",
      "Pridaj scedené cestoviny a premiešaj.",
      "Posyp čerstvým petržlenom a podávaj."
    ],
    time: 15, difficulty: "Ľahká", servings: 2,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format"
  },
  {
    title: "Caprese šalát",
    ingredients: ["paradajky", "mozzarella", "bazalka", "olivový olej", "soľ"],
    instructions: [
      "Nakrájaj paradajky a mozzarellu na kolieska.",
      "Naukladaj striedavo na tanier.",
      "Posyp bazalkou a osoľ.",
      "Pokvapkaj olivovým olejom."
    ],
    time: 8, difficulty: "Ľahká", servings: 2,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&auto=format"
  },
  {
    title: "Kuracie kari s ryžou",
    ingredients: ["kuracie mäso", "ryža", "cibuľa", "kari korenie", "kokosové mlieko", "cesnak"],
    instructions: [
      "Uvar ryžu podľa návodu.",
      "Opraž cibuľu a cesnak na panvici.",
      "Pridaj nakrájané kuracie mäso a opekaj.",
      "Zalej kokosovým mliekom, pridaj kari a duste 15 minút.",
      "Podávaj s ryžou."
    ],
    time: 35, difficulty: "Stredná", servings: 4,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format"
  },
  {
    title: "Bryndzové halušky",
    ingredients: ["zemiaky", "múka", "bryndza", "slanina", "soľ"],
    instructions: [
      "Nastrúhaj zemiaky a zmiešaj s múkou a soľou na cesto.",
      "Cez sitko vhadzuj malé halušky do vriacej vody.",
      "Keď vyplávajú, sceď.",
      "Zmiešaj s bryndzou a posyp opraženou slaninou."
    ],
    time: 40, difficulty: "Stredná", servings: 4,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format"
  },
  {
    title: "Ovsená kaša s ovocím",
    ingredients: ["ovsené vločky", "mlieko", "med", "banán", "škorica"],
    instructions: [
      "Zovri mlieko v hrnci.",
      "Pridaj ovsené vločky a varíš 5 minút.",
      "Nalej do misky, polej medom.",
      "Pridaj nakrájaný banán a posyp škoricou."
    ],
    time: 10, difficulty: "Ľahká", servings: 1,
    image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=800&auto=format"
  },
  {
    title: "Šošovicová polievka",
    ingredients: ["šošovica", "mrkva", "cibuľa", "cesnak", "soľ", "rascu"],
    instructions: [
      "Opraž cibuľu a cesnak na oleji.",
      "Pridaj nakrájanú mrkvu a krátko opekaj.",
      "Vsyp šošovicu, zalej vodou a pridaj rascu.",
      "Varíš 30 minút, dosoľ podľa chuti."
    ],
    time: 40, difficulty: "Ľahká", servings: 4,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format"
  },
  {
    title: "Cesnaková nátierka",
    ingredients: ["maslo", "cesnak", "syr", "soľ", "chlieb"],
    instructions: [
      "Zmäkni maslo pri izbovej teplote.",
      "Rozotri cesnak a zmiešaj s maslom.",
      "Pridaj nastrúhaný syr a soľ.",
      "Natri na chlieb."
    ],
    time: 8, difficulty: "Ľahká", servings: 2,
    image: "https://images.unsplash.com/photo-1573821663912-6df460f9c684?w=800&auto=format"
  },
  {
    title: "Carbonara",
    ingredients: ["cestoviny", "vajcia", "slanina", "parmezán", "soľ", "korenie"],
    instructions: [
      "Uvar cestoviny v osolenej vode.",
      "Opraž slaninu na chrumkavo.",
      "Zmiešaj vajcia s parmezánom.",
      "Horúce cestoviny vmiešaj k slanine, pridaj vajíčka mimo ohňa.",
      "Okoreň a podávaj."
    ],
    time: 20, difficulty: "Stredná", servings: 2,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format"
  },
  {
    title: "Grécky šalát",
    ingredients: ["paradajky", "uhorka", "feta", "olivy", "cibuľa", "olivový olej"],
    instructions: [
      "Nakrájaj zeleninu na hrubé kúsky.",
      "Pridaj olivy a kocky fety.",
      "Pokvapkaj olivovým olejom.",
      "Premiešaj a podávaj."
    ],
    time: 10, difficulty: "Ľahká", servings: 2,
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=800&auto=format"
  },
  {
    title: "Palacinky",
    ingredients: ["múka", "mlieko", "vajcia", "cukor", "soľ", "maslo"],
    instructions: [
      "Zmiešaj múku, mlieko, vajcia, cukor a štipku soli.",
      "Nechaj cesto 15 minút odpočinúť.",
      "Na panvici s maslom opekaj tenké palacinky.",
      "Naplň podľa chuti — džem, nutella, ovocie."
    ],
    time: 25, difficulty: "Ľahká", servings: 4,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format"
  },
  {
    title: "Kuracie soté so zeleninou",
    ingredients: ["kuracie mäso", "paprika", "cibuľa", "cesnak", "sójová omáčka", "olej"],
    instructions: [
      "Nakrájaj kuracie mäso na kocky.",
      "Opraž na rozpálenom oleji s cibuľou a cesnakom.",
      "Pridaj nakrájanú papriku, krátko restuj.",
      "Zalej sójovou omáčkou a podávaj."
    ],
    time: 20, difficulty: "Stredná", servings: 3,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format"
  },
  {
    title: "Vyprážaná ryža",
    ingredients: ["ryža", "vajcia", "hrášok", "mrkva", "sójová omáčka", "cibuľa"],
    instructions: [
      "Uvar ryžu vopred a vychlaď.",
      "Na panvici opraž cibuľu a mrkvu.",
      "Pridaj hrášok a vajcia, premiešaj.",
      "Vsyp ryžu, zalej sójovou omáčkou a restuj 5 minút."
    ],
    time: 25, difficulty: "Ľahká", servings: 3,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format"
  },
  {
    title: "Hubová polievka",
    ingredients: ["huby", "cibuľa", "smotana", "múka", "soľ", "petržlen"],
    instructions: [
      "Opraž cibuľu na masle, pridaj nakrájané huby.",
      "Zaprašuj múkou a zalej vodou.",
      "Variť 20 minút, zjemniť smotanou.",
      "Posypať petržlenom."
    ],
    time: 30, difficulty: "Stredná", servings: 4,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format"
  },
  {
    title: "Tvarohové guľky",
    ingredients: ["tvaroh", "múka", "cukor", "vajcia", "strúhanka", "maslo"],
    instructions: [
      "Zmiešaj tvaroh, múku, vajce a cukor na cesto.",
      "Tvar guľky a vlož do vriacej vody.",
      "Keď vyplávajú, vyber a obaľ v opraženej strúhanke s maslom.",
      "Posyp cukrom."
    ],
    time: 30, difficulty: "Stredná", servings: 3,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format"
  },
  {
    title: "Avokádový toast",
    ingredients: ["chlieb", "avokádo", "vajcia", "soľ", "korenie", "citrón"],
    instructions: [
      "Opeč chlieb dozlatista.",
      "Rozmačkaj avokádo so soľou a citrónom.",
      "Natri na toast, navrch polož sadené vajce.",
      "Okoreň a podávaj."
    ],
    time: 10, difficulty: "Ľahká", servings: 1,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format"
  },
  {
    title: "Paradajková polievka",
    ingredients: ["paradajky", "cibuľa", "cesnak", "smotana", "bazalka", "soľ"],
    instructions: [
      "Opraž cibuľu a cesnak.",
      "Pridaj nakrájané paradajky a duste 15 minút.",
      "Rozmixuj dohladka, zjemnite smotanou.",
      "Posyp čerstvou bazalkou."
    ],
    time: 25, difficulty: "Ľahká", servings: 4,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format"
  },
  {
    title: "Pečené zemiaky s rozmarínom",
    ingredients: ["zemiaky", "rozmarín", "cesnak", "olivový olej", "soľ"],
    instructions: [
      "Pokrájaj zemiaky na kocky.",
      "Premiešaj s olejom, cesnakom, rozmarínom a soľou.",
      "Peč v rúre na 200°C 35 minút.",
      "Podávaj horúce."
    ],
    time: 45, difficulty: "Ľahká", servings: 4,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format"
  },
  {
    title: "Banánové smoothie",
    ingredients: ["banán", "mlieko", "med", "ovsené vločky"],
    instructions: [
      "Vlož všetky ingrediencie do mixéra.",
      "Mixuj 30 sekúnd dohladka.",
      "Nalej do pohára a podávaj vychladené."
    ],
    time: 5, difficulty: "Ľahká", servings: 1,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&auto=format"
  },
  {
    title: "Čokoládový lava cake",
    ingredients: ["čokoláda", "maslo", "vajcia", "cukor", "múka"],
    instructions: [
      "Roztop čokoládu s maslom vo vodnom kúpeli.",
      "Vmiešaj vajcia s cukrom, pridaj múku.",
      "Spoj s čokoládou a nalej do formičiek.",
      "Peč 9 minút na 200°C — vnútro má ostať tekuté."
    ],
    time: 20, difficulty: "Náročná", servings: 2,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format"
  },
  {
    title: "Tuniakový šalát",
    ingredients: ["tuniak", "uhorka", "cibuľa", "majonéza", "vajcia", "soľ"],
    instructions: [
      "Uvar vajcia natvrdo a nakrájaj.",
      "Zmiešaj s tuniakom, nakrájanou uhorkou a cibuľou.",
      "Pridaj majonézu, osoľ.",
      "Vychladený podávaj na chlebe."
    ],
    time: 15, difficulty: "Ľahká", servings: 3,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format"
  }
];

/* ---------- Helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const norm = (s) => s.toLowerCase().trim();

const state = { tags: [] };

/* ---------- Ingredient tags ---------- */
const input = $('#ingredientInput');
const tagList = $('#tagList');

function addTag(raw) {
  const value = norm(raw);
  if (!value) return;
  if (state.tags.includes(value)) {
    input.style.borderColor = 'var(--error)';
    setTimeout(() => (input.style.borderColor = ''), 700);
    return;
  }
  state.tags.push(value);
  renderTags();
  input.value = '';
  input.focus();
}

function removeTag(value) {
  const el = tagList.querySelector(`[data-tag="${value}"]`);
  if (el) {
    el.classList.add('removing');
    setTimeout(() => {
      state.tags = state.tags.filter(t => t !== value);
      renderTags();
    }, 220);
  }
}

function renderTags() {
  tagList.innerHTML = state.tags.map(t => `
    <span class="tag" data-tag="${t}">
      ${t}
      <button type="button" aria-label="Odstrániť ${t}" data-remove="${t}">✕</button>
    </span>
  `).join('');
}

tagList.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-remove]');
  if (btn) removeTag(btn.dataset.remove);
});

$('#addBtn').addEventListener('click', () => addTag(input.value));
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); addTag(input.value); }
});

$('#clearBtn').addEventListener('click', () => {
  state.tags = []; renderTags(); $('#results').innerHTML = '';
});

/* ---------- Matching ---------- */
function matchRecipe(recipe, userTags) {
  const have = recipe.ingredients.filter(i => userTags.includes(norm(i)));
  const missing = recipe.ingredients.filter(i => !userTags.includes(norm(i)));
  const percent = Math.round((have.length / recipe.ingredients.length) * 100);
  return { recipe, have, missing, percent };
}

function findRecipes() {
  const results = $('#results');
  if (state.tags.length === 0) {
    results.innerHTML = renderEmpty('Pridajte aspoň jednu surovinu', 'Napíšte čo máte v chladničke a stlačte Pridať.');
    return;
  }
  const matches = recipes
    .map(r => matchRecipe(r, state.tags))
    .filter(m => m.percent >= 50)
    .sort((a, b) => b.percent - a.percent);

  if (matches.length === 0) {
    results.innerHTML = renderEmpty('Žiadny recept sa nenašiel', 'Skús pridať viac surovín alebo klikni na Náhodný recept.');
    return;
  }
  results.innerHTML = matches.map((m, i) => renderCard(m, i)).join('');
  scrollToResults();
}

function renderCard(match, i) {
  const { recipe, have, missing, percent } = match;
  const diffClass = recipe.difficulty === 'Ľahká' ? 'badge-easy' : recipe.difficulty === 'Stredná' ? 'badge-med' : 'badge-hard';
  return `
    <article class="recipe-card" data-idx="${recipes.indexOf(recipe)}" style="animation-delay:${i * 60}ms">
      <div class="recipe-img" style="background-image:url('${recipe.image}')">
        <span class="recipe-match">${percent}%</span>
      </div>
      <div class="recipe-body">
        <h3 class="recipe-title">${recipe.title}</h3>
        <div class="recipe-meta">
          <span>⏱ ${recipe.time} min</span>
          <span class="badge ${diffClass}">${recipe.difficulty}</span>
          <span>· ${recipe.servings} porcie</span>
        </div>
        <div class="progress"><div class="progress-fill" style="width:${percent}%"></div></div>
        <div class="recipe-chips">
          ${have.slice(0, 4).map(i => `<span class="chip chip-have">✓ ${i}</span>`).join('')}
          ${missing.slice(0, 3).map(i => `<span class="chip chip-miss">+ ${i}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

function renderEmpty(title, msg) {
  return `
    <div class="empty">
      <div class="empty-icon">🍽️</div>
      <h3>${title}</h3>
      <p>${msg}</p>
      <button class="btn btn-primary" onclick="window.__cookai.random()">🎲 Náhodný recept</button>
    </div>
  `;
}

function scrollToResults() {
  setTimeout(() => $('#results').scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

$('#findBtn').addEventListener('click', findRecipes);

/* ---------- Random recipe ---------- */
function randomRecipe() {
  const r = recipes[Math.floor(Math.random() * recipes.length)];
  openModal(recipes.indexOf(r));
}
$('#randomBtn').addEventListener('click', randomRecipe);
$('#heroRandomBtn').addEventListener('click', randomRecipe);

/* ---------- Modal ---------- */
const backdrop = $('#modalBackdrop');
const modalContent = $('#modalContent');

function openModal(idx) {
  const recipe = recipes[idx];
  if (!recipe) return;
  const userTags = state.tags;
  const have = recipe.ingredients.filter(i => userTags.includes(norm(i)));
  const missing = recipe.ingredients.filter(i => !userTags.includes(norm(i)));
  const percent = userTags.length ? Math.round((have.length / recipe.ingredients.length) * 100) : null;
  const diffClass = recipe.difficulty === 'Ľahká' ? 'badge-easy' : recipe.difficulty === 'Stredná' ? 'badge-med' : 'badge-hard';

  modalContent.innerHTML = `
    <div class="modal-img" style="background-image:url('${recipe.image}')"></div>
    <div class="modal-body">
      <h2>${recipe.title}</h2>
      <div class="modal-meta">
        <span class="badge">⏱ ${recipe.time} min</span>
        <span class="badge ${diffClass}">${recipe.difficulty}</span>
        <span class="badge">🍽 ${recipe.servings} porcie</span>
        ${percent !== null ? `<span class="badge badge-easy">✓ ${percent}% zhoda</span>` : ''}
      </div>

      <div class="modal-section">
        <h3>Suroviny</h3>
        <div class="ingredient-list">
          ${recipe.ingredients.map(i => {
            const isHave = userTags.includes(norm(i));
            return `<span class="chip ${isHave ? 'chip-have' : (userTags.length ? 'chip-miss' : '')}" style="${!userTags.length ? 'background:var(--surface-container-high);color:var(--on-surface-variant)' : ''}">${isHave ? '✓' : (userTags.length ? '+' : '•')} ${i}</span>`;
          }).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h3>Postup</h3>
        <ol class="instructions">
          ${recipe.instructions.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>
    </div>
  `;
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

$('#modalClose').addEventListener('click', closeModal);
backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

document.addEventListener('click', (e) => {
  const card = e.target.closest('.recipe-card');
  if (card) openModal(Number(card.dataset.idx));
});

/* ---------- Public api for inline buttons ---------- */
window.__cookai = { random: randomRecipe };

/* ---------- Footer year ---------- */
$('#year').textContent = new Date().getFullYear();
