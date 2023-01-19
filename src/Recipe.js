export function Recipe({title, id, ingredients, steps, setShowModal}) {
    const ingredientsList = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    });
    
    const stepsList = steps.map((step, index) => {
        return <li key={index}>{step}</li>
    });
 
 
    return (
        <>
            <div id={id}>
                <header className='basis-1/8 py-4 flex justify-between'>
                    <h3 className='text-3xl font-bold text-green-600'>{title}</h3>
                    <div className=''>
                        <button className="px-5 py-2 mr-2 text-sm leading-5 rounded-md font-semibold bg-yellow border-yellow border-2 hover:bg-transparent" type="button" onClick={() => setShowModal({show: true, editMode: true})} >Edit</button>
                        <button className="px-5 py-2 text-sm leading-5 rounded-md font-semibold bg-red-400 border-red-400 border-2 hover:bg-transparent" type="button">Delete</button>
                    </div>
                </header>
                <section className='basis-2/8'>
                    <ul className="ingredientsList list-disc list-inside my-4 py-2 border-b-1 border-green-200">{ingredientsList}</ul>
                    <ul className="descriptionList list-decimal list-inside">{stepsList}</ul>
                </section>
            </div>
        </>
    )
}