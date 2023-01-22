import './App.css';
import React, { useState, useEffect } from 'react';
import { recipe as staticRecipe } from './data.js';
import Recipe from './Recipe.js';
import RecipeForm from './RecipeForm';
import RecipeEditForm from './RecipeEditForm';
import EmptyRecipe from './EmptyRecipe';

function App() {
  //useState always returns an array with 2 values, the  current state and the function to update the state
  const [recipes, setRecipes] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("recipes"));
    return saved || staticRecipe
  });
  const [currentRecipe, setCurrentRecipe] = useState(staticRecipe[0]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  useEffect(() => {
		localStorage.setItem('recipes', JSON.stringify(recipes));
	}, [recipes]);

  //run this once when the page renders the first time
  useEffect(() => {
		setCurrentRecipe(recipes[0] || staticRecipe[0]);
	}, []);


  const handleSave = (values) => {
    setRecipes([...recipes, values]);
    setCurrentRecipe(values);
    setShowModal(false);
  };

  const handleEdit = (values) => {
    const newRecipesList = recipes.map((recipe) => {
      if(recipe.id === values.id) {
        const updatedRecipe = {
          ...values
        }
        setCurrentRecipe(updatedRecipe)
        return updatedRecipe;
      }
      return recipe;
    })
    setRecipes(newRecipesList);
    setShowEditModal(false);
  }

  const handleDelete = () => {
    if(window.confirm(`Are you sure you want to delete ${currentRecipe.title}?`)) {
      const filteredRecipes = recipes.filter((recipe) => {
        
        return recipe.id !== currentRecipe.id;
      });
      setRecipes(filteredRecipes);
      setCurrentRecipe(recipes[0]);
    }
  }

  const handleClickFromRecipeList = (e) => {
    const clickedRecipe = e.currentTarget.getAttribute('data-recipe-id');
    const correspondingRecipe = recipes.find(recipe => recipe.id === clickedRecipe);
    setCurrentRecipe(correspondingRecipe);
  }


 
  return (
    <div className="App w-screen px-6 py-9 flex flex-col min-h-screen shadow-xl bg-gradient-to-r from-cyan-500 via-cyan-300 via-cyan-200 to-green-200">
      <div className='relative h-full'>
        
        <header className="container mx-auto text-center my-6">
          <h1 className='text-5xl text-gray-dark font-bold'>Recipe Box</h1>
        </header>

        <section className='container mx-auto flex flex-col-reverse gap-4 md:flex-row'>
          <article className='md:basis-3/4 p-6 shadow-xl overflow-auto flex flex-col w-full justify-between max-h-[50vh] md:max-h-[70vh] bg-white'>
            {recipes.length === 0 &&  <EmptyRecipe setShowModal={setShowModal}/>}
            {recipes.length > 0 &&  <Recipe title={currentRecipe.title} ingredients={currentRecipe.ingredients} steps={currentRecipe.steps} setShowEditModal={setShowEditModal} handleDelete={handleDelete} setShowModal={setShowModal}/>}
          </article>
          <nav className='md:basis-1/4 py-6 px-3 shadow-xl max-h-[20vh] md:max-h-[70vh] overflow-auto scrollbar bg-white'>
            <p className='text-xl text-teal-600 font-bold border-b-1'>Recipes list</p>
            <ul className='pb-2 divide-y divide-solid divide-gray'>
              {recipes.map((recipe, index) => {
                return <li key={recipe.id} onClick={handleClickFromRecipeList} data-recipe-id={recipe.id} className={`cursor-pointer py-2 md:py-2 px-2 0 ${recipe.id === currentRecipe.id ? 'bg-yellow' : null}`}>{recipe.title}</li>
              })}
            </ul>
          </nav>  
        </section>
        <RecipeForm showModal={showModal} setShowModal={setShowModal} onSave={handleSave}/>
        <RecipeEditForm showEditModal={showEditModal} setShowEditModal={setShowEditModal} onEdit={handleEdit} {...{currentRecipe}}/>
        </div>
      </div>
  );
}

export default App;
