const axios = require('axios');

async function getMealsByIngredient(ingredient) {
  const meal = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

  return meal.data;
}

// themealdb.com/api/json/v1/1/categories.php
async function getMealsCategories() {
  try {
    const categories = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');

    return categories.data;
  } catch (e) {
    console.log(e.toJSON());
  }
}

async function getMealsCategory(cat) {
  try {
    const categories = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');

    const foundCategory = categories.data.categories.find((category) => category.strCategory === cat);
    console.log(foundCategory);
    return foundCategory;
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getMealsCategories,
  getMealsCategory,
  getMealsByIngredient,
};
