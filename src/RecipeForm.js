const RecipeForm = (props) => {
  return (
    <>
      {props.showModal ? (
        <>
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto z-50 fixed inset-0 bg-gray bg-opacity-75">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-bold text-orange">Add recipe</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full" onClick={() => props.setShowModal(false)}>
                        X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Ingredients
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Steps
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="px-5 py-2 text-sm leading-5 rounded-full font-semibold"
                    type="button" onClick={() => props.setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-5 py-2 text-sm leading-5 rounded-full font-semibold"
                    type="button" onClick={() => props.setShowModal(false)}
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

export default RecipeForm;
