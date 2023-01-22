const EmptyRecipe = ({setShowModal}) => {
    return(
        <>
        <div>
            <header className='basis-1/8 py-4 flex justify-between'>
                <h3 className='text-3xl font-bold text-green-600'>No recipes</h3>
            </header>
            <section className='basis-2/8 my-4 py-2 border-b-1 border-green-200'>
                <p>There are currently no recipes in your Recipe box. Click on 'Add new recipe' to add a new recipe</p>
            </section>
            <footer className='basis-1/8 py-4'>
                    <button type="button" onClick={() => setShowModal(true)} className='bg-green-200 hover:bg-green-600 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-green-600 hover:text-white'>Add new recipe</button>
                </footer>
        </div>
    </> 
    )
}

export default EmptyRecipe;