import { useEffect, useState, } from "react";

const RecipeEditForm = ({showEditModal, setShowEditModal, onEdit, currentRecipe = {}}) => {

  const [recipeData, setRecipeData] = useState(currentRecipe);
  const [errors, setErrors] = useState('');
  
  useEffect(() => {
    setRecipeData(currentRecipe);
  },[currentRecipe])
  
  const {title} = recipeData;
  const ingredients = recipeData.ingredients.join(' \\ ');
  const steps = recipeData.steps.join(' \\ ');


  const validateData = () => {
    let errors = {};
    if(!title) {
      errors.title = "Title is required";
    }

    if(!ingredients) {
      errors.ingredients = 'Ingredients are required';
    }

    if(!steps) {
      errors.steps = "Steps are required";
    }
    
    return errors;
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    let formattedValue = value;
    if(name !== 'title') {
       formattedValue = value.split(' \\ ')
    }
    setRecipeData((prevData) => {
      return {...prevData, [name]: formattedValue}
    }
  )}

  const handleEdit = () => {
    const errors = validateData();
    if(Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    setErrors({});
    onEdit(recipeData);
  }
  
  return (
    <>
      {showEditModal ? (
        <>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 bg-gray bg-opacity-75">
            <div className="relative w-auto my-6 mx-auto max-w-3xl min-w-[400px]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-bold text-teal-600">Edit recipe</h3>
                  <button
                    className="bg-transparent border-0 text-dark-gray float-right"
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full" onClick={() => setShowEditModal(false)}>
                        X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="px-8 pt-6 pb-8 w-full">
                    <label for="title" className="block text-dark-gray text-sm font-bold mb-1">
                      Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-1 text-black" type="text" name="title" value={title} onChange={handleChange}/>
                    <div className="text-red-500 leading-4 min-h-[15px] mb-2 font-bold">{errors.title}</div>
                    <label for="ingredients" className="block text-dark-gray text-sm font-bold mb-1">
                      Ingredients
                    </label>
                    <textarea placeholder={'Separate each ingredient with a "\\": \n\nMilk \\ 2 Eggs \\ 1/3 Cup Sugar'} className="shadow appearance-none border rounded w-full py-2 px-2 text-black text-sm min-h-[80px]" name="ingredients" value={ingredients} onChange={handleChange}/>
                    <div className="text-red-500 leading-4 min-h-[15px] mb-2 font-bold">{errors.ingredients}</div>
                    <label for="steps" className="block text-dark-gray text-sm font-bold mb-1">
                      Steps
                    </label>
                    <textarea placeholder={'Separate each step with a "\\": \n\nPreheat oven to 350°F \\ \nCombine ingredients in pie crust \\ \nBake until crust is golden brown. \\'} className="shadow appearance-none border rounded w-full py-2 px-2 text-black text-sm min-h-[120px]" name="steps" value={steps} onChange={handleChange}/>
                    <div className="text-red-500 leading-4 min-h-[15px] mb-2 font-bold">{errors.steps}</div>
                  </form>
                </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="px-5 py-2 text-sm leading-5 rounded-md font-semibold border-teal-600 border-1 hover:bg-green-200 hover:border-green-200"
                    type="button" onClick={() => setShowEditModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-5 py-2 text-sm leading-5 rounded-md font-semibold bg-green-200"
                    type="button" onClick={handleEdit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RecipeEditForm;
