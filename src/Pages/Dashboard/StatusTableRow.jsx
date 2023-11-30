import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useState } from "react";

const StatusTableRow = ({ surveyor, index }) => {
  const [toggole, setToggole] = useState(false);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { mutate: published } = useMutation({
    mutationFn: async (data) => {
      const { publishSurvey, survey_id } = data;
      const res = await axiosSecure.patch(
        `/surveys/${survey_id}`,
        publishSurvey
      );
      console.log(res);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["select"]);
    },
  });

  const handlePublished = () => {
    const publishSurvey = {
      status: 'Published',
    };

    const surveyData = {
      publishSurvey,
      survey_id: surveyor._id,
    };
    published(surveyData);
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    const data = {
      feedback,
      status: 'Unpublished',

    }

    const surveyData = {
        publishSurvey: data,
       
        survey_id: surveyor._id,

    }

    published(surveyData);
    setToggole(!toggole)
    
  }

  return (
    <>
      <tr className="bg-gray-100">
        <th className="">{index + 1}</th>
        <td className="font-semibold">{surveyor.title}</td>
        <td className="font-semibold">
          {surveyor.status }
        </td>
        <td>
          <button
            onClick={handlePublished}
            className="btn bg-blue-950 text-white rounded-lg btn-sm"
          >
            Publish
          </button>
        </td>
        <td>
          <div className="relative">
            <button onClick={() => setToggole(!toggole)} className="btn bg-blue-950 text-white rounded-lg btn-sm">
              Unpublish
            </button>
            <div className={`absolute w-[400px] right-0 top-full z-50 p-5 bg-blue-300 ${toggole ? "block" : "hidden"}`}>
              <form onSubmit={handleFeedback}>
                <input name='feedback' className="border w-full p-5" type="text"  id="" />
                <button className="btn bg-blue-950 text-white rounded-lg btn-sm">
                  Send feedback
                </button>
              </form>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default StatusTableRow;
