const Creation = () => {

    const handleSurvey = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const question = form.question.value
        const deadline = form.deadline.value
        const category = form.category.value

        const data = {
            title,
            description,
            question,
            deadline,
            category
        }

        console.log(data)

    }

  return (
    <div>
     

      <div>
        <div className="bg-[#f1f3f5] rounded-xl md:p-24 p-4 my-20">
          <h2 className="text-3xl mb-10 text-center font-extrabold">
            Add Your <span className="text-[#1e3c72]">Survey</span>
          </h2>
          <form>
          
            <div className="md:flex gap-4 mb-8">
              <div className="form-control   md:w-1/2 ">
                <label className="label ">
                  <span className="label-text ">Title</span>
                </label>
                <label className="input-group ">
                  <input
                
                    type="text"
                    placeholder="Add a title"
                    name="tile"
                    className="input form-border input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Question</span>
                </label>

                <label className="input-group">
                  <input
                    type="text"
                    required
                    placeholder="Ask a question"
                    name="question"
                    className="input  form-border input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            
            <div className="md:flex gap-4 mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    required
                    placeholder="Deadline"
                    name="deadline"
                    className="input  form-border input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Description About Survey</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    placeholder="Description"
                    name="description"
                    className="input form-border  input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* from category row */}

            <div className="md:flex gap-4 mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Survey Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    className="input form-border  input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-block bg-blue-950 text-white form-border"
            >
             Submit Survey
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Creation;
