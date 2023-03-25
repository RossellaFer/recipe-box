import React, {useContext} from 'react';
import { ModalContext } from './Context.js';

const Recipe = ({title, id, ingredients, steps, handleDelete}) => {

    const { modal, editModal } = useContext(ModalContext);
    const [showModal, setShowModal] = modal;
    const [showEditModal, setShowEditModal] = editModal;
    
    const ingredientsList = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    });
    
    const stepsList = steps.map((step, index) => {
        return <li key={index}>{step}</li>
    });
 
 
    return (
        <>
            <div id={id}>
                <header className='basis-1/8 pb-4 pt-2 flex justify-between md:flex-row flex-col-reverse'>
                    <h3 className='text-3xl font-bold text-teal-600'>{title}</h3>
                    <div className='float-right pb-4 md:pb-0'>
                        <button className="px-5 py-2 mr-2 text-sm leading-5 rounded-md font-semibold border-yellow border-2 hover:bg-yellow" type="button" onClick={() => setShowEditModal(true)}>
                            <span className='inline'>Edit</span>
                            <svg className="inline w-4 h-4 ml-2 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                        </button>
                        <button className="px-5 py-2 text-sm leading-5 rounded-md font-semibold border-red-400 border-2 hover:bg-red-400" type="button" onClick={handleDelete}>
                            <span className='inline'>Delete</span>
                            <svg className="inline w-4 h-4 ml-2 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                            </button>
                    </div>
                </header>
                <section className='basis-2/8'>
                    <ul className="ingredientsList list-disc list-inside my-4 py-2 border-b-1 border-teal-400">{ingredientsList}</ul>
                    <ul className="descriptionList list-decimal list-inside">{stepsList}</ul>
                </section>
                <footer className='basis-1/8 py-4'>
                    <button type="button" onClick={() => setShowModal(true)} className='px-5 py-2 mr-2 text-sm text-dark-gray leading-5 rounded-md font-semibold bg-green-200 border-green-200 border-2 hover:bg-transparent shadow-xl'>Add new recipe</button>
                </footer>
            </div>
        </>
    )
}

export default Recipe;