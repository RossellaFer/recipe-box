import './App.css';
import {recipe} from './data.js';
import { Recipe } from './Recipe.js';

function App() {
  return (
    <div className="App w-screen px-4 py-9 flex flex-col min-h-screen shadow-xl">
      <header className="container mx-auto text-center my-6">
        <h1 className='text-5xl text-orange font-bold'>Recipe Box</h1>
      </header>

      <section className='container mx-auto flex flex-col-reverse gap-4 md:flex-row'>
        <article className='basis-3/4 p-6 shadow-xl overflow-auto flex flex-col w-full justify-between max-h-28 md:max-h-[60vh]'>
          <Recipe title={recipe.title} ingredients={recipe.ingredients} steps={recipe.steps}/>
          <footer className='basis-1/8 py-4'>
            <button className='bg-green-200 hover:bg-green-600 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-green-600 hover:text-white'>Add new recipe</button>
          </footer>
        </article>
        <nav className='basis-1/4 p-6 shadow-xl max-h-28 md:max-h-[60vh] overflow-auto scrollbar'>
          <ul className='py-2'>
            <li><a href='#article1'>Article 1</a></li>
            <li><a href='#article2'>Article 2</a></li>
            <li><a href='#article3'>Article 3</a></li>
            <li><a href='#article4'>Article 4</a></li>
          </ul>
        </nav>  
      </section>  
    </div>
  );
}

export default App;
