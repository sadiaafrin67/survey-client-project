import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Creation = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleSurvey = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const question = form.question.value;
    const deadline = form.deadline.value;
    const category = form.category.value;
  
    

    const data = {
      title,
      description,
      question,
      deadline,
      category,
      voted: 0,
      dislike: 0,
      status: "Pending",
      email: user?.email,
      yesVote: 0,
      noVote: 0,
      like: 0,
      report: [],
      name: user?.displayName || "Annonymous",
     

    };

    console.log(data);

    axiosSecure.post("/surveys", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Your survey is pending for approval, you will be notified",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      }
    });
  };

  return (
    <div>
      <div>
        <div className="bg-[#f1f3f5] rounded-xl md:p-24 p-4 my-20">
          <h2 className="md:text-2xl text-base mb-10 text-center font-extrabold">
            Create Your <span className="text-[#1e3c72]">Survey</span>
          </h2>
          <form onSubmit={handleSurvey}>
            <div className="md:flex gap-4 mb-8">
              <div className="form-control   md:w-1/2 ">
                <label className="label ">
                  <span className="label-text ">Survey Title</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    placeholder="Add a title"
                    name="title"
                    className="input form-border input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text"> Question</span>
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
              Create Survey
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Creation;
