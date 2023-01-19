import './App.css';
import React, { useState, useEffect } from 'react';
import { recipe as staticRecipe } from './data.js';
import { Recipe } from './Recipe.js';
import RecipeForm from './RecipeForm';

function App() {
  //useState always returns an array with 2 values, the  current state and the function to update the state
  const [recipes, setRecipes] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("recipes"));
    return saved || staticRecipe
  });
  const [currentRecipe, setCurrentRecipe] = useState(staticRecipe[0]);

  const [showModal, setShowModal] = useState({
    show: false,
    editMode: false
  });
  
  useEffect(() => {
		localStorage.setItem('recipes', JSON.stringify(recipes));
	}, [recipes]);

  //run this once when the page renders the first time
  useEffect(() => {
		setCurrentRecipe(recipes[0] || staticRecipe[0]);
	}, []);


  const handleSave = (values) => {
    console.log(values)
    setRecipes([...recipes, values])
  };

  const handleEdit = (values) => {
    recipes.find((recipe) => {
      if(recipe.id === values.id) {
        console.log(recipe);
      }
    })
  }

  const handleClickFromRecipeList = (e) => {
    const clickedRecipe = e.currentTarget.getAttribute('data-recipe-id');
    const correspondingRecipe = recipes.find(recipe => recipe.id === clickedRecipe);
    setCurrentRecipe(correspondingRecipe);
  }


 
  return (
    <div className="App w-screen px-4 py-9 flex flex-col min-h-screen shadow-xl">
      <header className="container mx-auto text-center my-6">
        <h1 className='text-5xl text-orange-600 font-bold'>Recipe Box</h1>
      </header>

      <section className='container mx-auto flex flex-col-reverse gap-4 md:flex-row'>
        <article className='md:basis-3/4 p-6 shadow-xl overflow-auto flex flex-col w-full justify-between max-h-[50vh] md:max-h-[70vh]'>
          <Recipe title={currentRecipe.title} ingredients={currentRecipe.ingredients} steps={currentRecipe.steps} setShowModal={setShowModal}/>
          <footer className='basis-1/8 py-4'>
            <button type="button" onClick={() => setShowModal({show: true, editMode: false})} className='bg-green-200 hover:bg-green-600 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-green-600 hover:text-white'>Add new recipe</button>
          </footer>
        </article>
        <nav className='md:basis-1/4 p-6 shadow-xl max-h-[20vh] md:max-h-[70vh] overflow-auto scrollbar'>
          <ul className='py-2 divide-y divide-solid divide-gray'>
            {recipes.map((recipe, index) => {
              return <li onClick={handleClickFromRecipeList} data-recipe-id={recipe.id} className='cursor-pointer py-2 md:py-4 px-2 hover:bg-gradient-to-r hover:from-green-200 hover:to-transparent'>{recipe.title}</li>
            })}
          </ul>
        </nav>  
      </section>
      <RecipeForm showModal={showModal} setShowModal={setShowModal} onSave={handleSave} onEdit={handleEdit} {...{currentRecipe}}/>
    </div>
  );
}

export default App;
