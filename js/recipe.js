const app_id = "da5363b6";
const app_key = "e87bb4c7ed839361b2ea344e795b746d";
const button = document.querySelector("button");
const input = document.querySelector("input");
const loader = document.querySelector(".loader-container");
const recipeList = document.querySelector(".cards");
// console.log(recipeList);

//function to show/remove loader
const loading = (state) => {
  loader.style = `display: ${state == true ? "block" : "none"}`;
};
loading(false);

const getRecipe = async (query) => {
  try {
    loading(true);
    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`;
    const reponse = await fetch(endpoint);
    const { hits } = await reponse.json();
    console.log(hits);
    if (hits.length == 0) window.alert("No recipe found");

    //destructing
    hits.map(({ recipe }) => {
      console.log(recipe);
      const { image, calories, label, url } = recipe;
      const ele = document.createElement("li");
      ele.classList.add("cards_item");

      ele.innerHTML = `
      <div class="card">
          <div class="card_image"><img
                  src=${image}
                  alt="mixed vegetable salad in a mason jar. " /></div>
          <div class="card_content">
              <h2 class="card_title">Farmstand Salad <span class="orange">${calories.toFixed(
                0
              )}Cal</span></h2>
              <div class="card_text">
                  <p>
                      Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
                      leafy greens and seasonal vegetables, fresh from the
                      farmer's market.
                  </p>
                  <p>
                      Served with your choice of dressing on the side: housemade ranch, cherry balsamic
                      vinaigrette, creamy chipotle, avocado green goddess, or honey
                      mustard. Add your choice of protein for $2 more.
                  </p>
              </div>
              <button class="card_btn orange"><a target="_blank" href=${url}>See more +</a></button>
          </div>
      </div>`;

      // console.log(ele);
      recipeList.appendChild(ele);
    });

    loading(false);
  } catch (error) {
    loading(false);
    console.log(error);
  }
};

const searchRecipe = () => {
  //remove previous recipe list
  recipeList.innerHTML = null;
  const query = input.value;
  getRecipe(query);
};

button.addEventListener("click", searchRecipe);
