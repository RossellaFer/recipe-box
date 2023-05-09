import { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ModalContext } from './Context.js';

const RecipeForm = ({onSave}) => {
  const initialCurrentRecipe = {
    id: uuidv4(),
    title: '',
    ingredients: '',
    steps: '',
  }
  // eslint-disable-next-line
  const { modal, _editModal } = useContext(ModalContext);
  // eslint-disable-next-line
  const [_showModal, setShowModal] = modal;
  
  const [newRecipeData, setNewRecipeData] = useState(initialCurrentRecipe);
  const [errors, setErrors] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const { title, steps } = newRecipeData;

  const validateData = () => {
    let errors = {};
    if(!title) {
      errors.title = "Title is required";
    }

    if(!ingredients.length) {
      errors.ingredients = 'Ingredients are required';
    }

    if(!steps) {
      errors.steps = "Steps are required";
    }
    
    return errors;
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNewRecipeData((prevData) => ({...prevData, [name]: value}))
  }

  const handleIngredientChange = (event) => {
    if(event.keyCode === 13) {
      //get the value from the input
      const value = event.target.value;
      if(value !== '') {
        ingredients.push(value);
        setNewRecipeData((prevData) => ({...prevData, 'ingredients': ingredients}));
        //clear the value from the input
        event.target.value = '';
      }
    } 
  }

  const removeIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
    setNewRecipeData((prevData) => ({...prevData, 'ingredients': newIngredients}));
  }

  const handleSave = (e) => {
      const errors = validateData();
      if(Object.keys(errors).length) {
        setErrors(errors);
        return;
      }
  
      setErrors({});
      const formattedRecipeData = {
        title: newRecipeData.title,
        id: newRecipeData.id,
        ingredients: newRecipeData.ingredients,
        steps: newRecipeData.steps.split('\\')
      }

      onSave(formattedRecipeData);
  }
  
  return (
    <>
        <>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 bg-gray bg-opacity-75">
            <div className="relative w-auto my-6 mx-auto max-w-3xl min-w-[400px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-bold text-teal-600">Add recipe</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full" onClick={() => setShowModal(false)}>
                        X
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto">
                  <form className="px-8 pt-6 pb-8 w-full">
                    <label for="title" className="block text-dark-gray text-sm font-bold mb-1">
                      Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black" type="text" name="title" value={title} onChange={handleChange}/>
                    <div className="text-red-500 leading-4 min-h-[15px] mb-2 font-bold">{errors.title}</div>
                    <label for="ingredients" className="block text-dark-gray text-sm font-bold mb-1">
                      Ingredients
                    </label>
                    <p className=" text-dark-gray text-xs max-w-sm mb-2">List the ingredients one by one and press enter to add them to the list</p>
                    {ingredients.map((ingredient, index) => {
                      return <div key={index}
                      index={index}>
                        <p className="relative mb-2">{ingredient}<span onClick={() => removeIngredient(index)}><svg className="text-red-500 cursor-pointer absolute right-0 top-0 hover:animate-wiggle" fill="none" stroke="currentColor" height="25px" width="25px" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span></p>
                        </div>
                      })
                    }
                    <input placeholder={''} className="shadow appearance-none border rounded w-full py-2 px-2 text-black text-sm inline" name="ingredient" onKeyDown={(e) => handleIngredientChange(e)}/>
                    <div className="text-red-500 leading-4 min-h-[15px] mb-2 font-bold">{errors.ingredients}</div>
                    <label for="steps" className="block text-dark-gray text-sm font-bold mb-1">
                      Steps
                    </label>
                    <textarea placeholder={'Separate each step with a "\\": \n\nPreheat oven to 350°F \\ \nCombine ingredients in pie crust \\ \nBake until crust is golden brown. \\'} className="shadow appearance-none border rounded w-full py-2 px-2 text-black text-sm min-h-[120px]" name="steps" value={steps} onChange={handleChange}/>
                    <div className="text-red-500 leading-4 min-h-[15px] mb-2 font-bold">{errors.steps}</div>
                    </form>
                    <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="px-5 py-2 text-sm leading-5 rounded-md font-semibold border-teal-600 border-1 hover:bg-green-200 hover:border-green-200"
                    type="button" onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-5 py-2 text-sm leading-5 rounded-md font-semibold bg-green-200"
                    type="button" onClick={handleSave}
                  >
                    Submit
                  </button>
                </div>
                </div>
                
              </div>
            </div>
          </div>
          </div>
        </>
    </>
  );
};

export default RecipeForm;
