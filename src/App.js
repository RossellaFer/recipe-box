import './App.css';
import React, { useState, useEffect } from 'react';
import { recipe as staticRecipe } from './data.js';
import { Recipe } from './Recipe.js';
import RecipeForm from './RecipeForm';

function App() {
  //useState always returns an array with 2 values, the  current state and the function to update the state
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("recipes"));
    return saved[0] || staticRecipe[0]
  });

  const [showModal, setShowModal] = useState({
    show: false,
    editMode: false
  });
  
  useEffect(() => {
		const recipes = JSON.parse(localStorage.getItem('recipes'));
		if (recipes.legth) {
			setRecipes(recipes);
		}
    else {
      setRecipes(staticRecipe)
    }
	}, []);

  useEffect(() => {
		localStorage.setItem('recipes', JSON.stringify(recipes));
	}, [recipes]);

  const handleSave = (values) => {
    setCurrentRecipe(values);
    setRecipes([...recipes, values])
  };
 
  return (
    <div className="App w-screen px-4 py-9 flex flex-col min-h-screen shadow-xl">
      <header className="container mx-auto text-center my-6">
        <h1 className='text-5xl text-orange-600 font-bold'>Recipe Box</h1>
      </header>

      <section className='container mx-auto flex flex-col-reverse gap-4 md:flex-row'>
        <article className='basis-3/4 p-6 shadow-xl overflow-auto flex flex-col w-full justify-between max-h-28 md:max-h-[60vh]'>
          <Recipe title={currentRecipe.title} ingredients={currentRecipe.ingredients} steps={currentRecipe.steps} showModal={showModal} setShowModal={setShowModal}/>
          <footer className='basis-1/8 py-4'>
            <button type="button" onClick={() => setShowModal({show: true, editMode: false})} className='bg-green-200 hover:bg-green-600 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-green-600 hover:text-white'>Add new recipe</button>
          </footer>
        </article>
        <nav className='basis-1/4 p-6 shadow-xl max-h-28 md:max-h-[60vh] overflow-auto scrollbar'>
          <ul className='py-2 divide-y divide-solid divide-gray'>
            {recipes.map((recipe, index) => {
              return <li className='cursor-pointer py-4 px-2 hover:bg-gradient-to-r hover:from-green-200 hover:to-transparent'><a href='#article1'>{recipe.title}</a></li>
            })}
          </ul>
        </nav>  
      </section>
      <RecipeForm showModal={showModal} setShowModal={setShowModal} onSave={handleSave} {...{currentRecipe}}/>
    </div>
  );
}

export default App;
