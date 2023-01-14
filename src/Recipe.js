export function Recipe(props) {
    const ingredients = props.ingredients.split(' / ');
    const ingredientsList = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    });
    
    const steps = props.steps.split(' / ');
    const stepsList = steps.map((step, index) => {
        return <li key={index}>{step}</li>
    });

    return (
        <>
            <header className='basis-1/8 py-4'>
                <h3 className='text-3xl font-bold text-green-600'>{props.title}</h3>
            </header>
            <section className='basis-2/8'>
                <ul className="ingredientsList list-disc list-inside my-4 py-2 border-b-1 border-green-200">{ingredientsList}</ul>
                <ul className="descriptionList list-decimal list-inside">{stepsList}</ul>
            </section>
        </>
    )
}