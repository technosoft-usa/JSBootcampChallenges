/* eslint-disable max-len */
/* eslint-disable no-undef */
const { expect } = require('chai');
const { getMealsCategory, getMealsCategories, getMealsByIngredient } = require('./async');

describe('The Meal DB', () => {
  let mealsCategory;
  let mealsCategories;
  let mealsByIngredient;
  before(async () => {
    mealsByIngredient = await getMealsByIngredient('chicken_breast');
    mealsCategory = await getMealsCategory('Vegan');
    mealsCategories = await getMealsCategories();
  });
  describe('Write a function that takes a parameter and calls the meals DB and returns meals with that ingreadient', () => {
    it('is a function that calls the meal db', () => {
      expect(typeof getMealsByIngredient).to.equal('function');
    });

    it('is a function that calls the meal db and returns meals with that main ingredient', async () => {
      expect(mealsByIngredient.meals[0]).to.have.property('strMeal');
      expect(mealsByIngredient.meals[0].strMeal).to.include('Chick');
    });
  });

  describe('Write a function that calls the meals DB and returns all categories', () => {
    it('is a function that calls the meal db', () => {
      expect(typeof getMealsCategories).to.equal('function');
    });

    it('is a function that calls the meal db and returns all the meals categories', async () => {
      expect(mealsCategories.categories).to.have.length(14);
      expect(mealsCategories.categories[0].idCategory).to.equal('1');
      expect(mealsCategories.categories[0].strCategory).to.equal('Beef');
    });
  });

  describe('Write a function that calls the meals DB and returns the meal category that it is passed', () => {
    it('is a function that calls the meal db', () => {
      expect(typeof getMealsCategory).to.equal('function');
    });

    it('is a function that calls the meal db and returns the correct category passed', async () => {
      expect(mealsCategory.strCategory).to.equal('Vegan');
      expect(mealsCategory.idCategory).to.equal('11');
    });
  });
});
