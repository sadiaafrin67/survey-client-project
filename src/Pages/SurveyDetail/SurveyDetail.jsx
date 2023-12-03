import { useParams } from "react-router-dom";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../Hook/useAxiosOpen";
import useAdmin from "../../Hook/UseAdmin";
import useSurveyor from "../../Hook/useSurveyor";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import usePro from "../../Hook/usePro";
import CustomPieChart from "../../components/ChartAdmin/CustomPieChart";
import DetailChart from "../../components/DetailPageChart/DetailChart";

// function getDateExpired(inputDate) {
//   // Convert input date string to Date object
//   const inputDateObject = new Date(inputDate);

//   // Get the current date
//   const currentDate = new Date();
//   console.log(inputDateObject, currentDate);
//   if (inputDateObject < currentDate) {
//     return true;
//   } else {
//     return false;
//   }
// }


function getDateExpired(inputDate) {
  // Convert input date string to Date object
  const inputDateObject = new Date(inputDate);

  // Set the time of the input date to 11:59:59 PM
  inputDateObject.setHours(23, 59, 59, 999);

  // Get the current date
  const currentDate = new Date();

  // Log the inputDateObject and currentDate for debugging or information
  console.log(inputDateObject, currentDate);

  // Check if the input date is earlier than the current date
  if (inputDateObject < currentDate) {
    return true;  // Input date is expired
  } else {
    return false;  // Input date is not expired
  }
}


const SurveyDetail = () => {
  const [isAdmin] = useAdmin();
  const [isSurveyor] = useSurveyor();
  const [isPro] = usePro();
  const { user } = useContext(AuthContext);
  const [report, setReport] = useState("");
  const [comment, setComment] = useState("");
  const [commentedData, setCommentedData] = useState(null);
  const [isReact, setIsReact] = useState(false);
  const [yesNo, setYesNo] = useState("");
  const [isDateExpired, setIsDateExpired] = useState(false);
  const [viewChart, setViewChart] = useState(false);

  console.log(isDateExpired);

  console.log(isAdmin, isSurveyor);

  const axiosPublic = useAxiosOpen();

  const { id } = useParams();
  console.log(id);


  const {
    data: survey = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["survey", id, user?.email],

    queryFn: async () => {
      const res = await axiosPublic.get(`/surveys/${id}?email=${user?.email}`);
      console.log(res.data);
      return res.data.result;
    },
  });
  console.log(survey);

  const { data: commentedSurveys = [], refetch: refetchComment } = useQuery({
    queryKey: ["commentedSurveys"],

    queryFn: async () => {
      const res = await axiosPublic.get("/surveys");
      const responseData = res.data;
      const convertedData = getCommentedData(responseData);
      return convertedData;
      
    },
  });

  const {
    title,
    question,
    deadline,
    category,
    voted,
    description,
    dislike,
    _id,
    like,
    
    timestamp,
  } = survey;

  // console.log(survey);

  // useEffect(() => {
  //   if (
  //     commentedSurveys &&
  //     commentedData === null &&
  //     commentedSurveys.length > 0
  //   ) {
  //     setCommentedData(getCommentedData(commentedSurveys));
  //     // console.log(getCommentedData(commentedSurveys));
  //   }

  //   // console.log('hlwwww')
  // }, [commentedData, commentedSurveys]);


  // useEffect(() => {
  //   setCommentedData(getCommentedData(commentedSurveys));

  //   // console.log('hlwwww')
  // }, [commentedData, commentedSurveys]);

  console.log(commentedData);

  useEffect(() => {
    console.log(survey);
    if (survey) {
    
      setIsDateExpired(getDateExpired(survey?.deadline));
    }
  }, [survey]);

  function getCommentedData(survey) {
    const commentedData = [];

    survey.forEach((item) => {
      if (item.comment && item.comment.length > 0) {
        commentedData.push(...item.comment);
      }
    });

    return commentedData;
  }

  console.log(survey);

  const handleLike = (id) => {
    axiosPublic.patch(`/like/${id}`).then(() => {
      refetch();
    });
  };

  const handleDislike = (id) => {
    axiosPublic.patch(`/dislike/${id}`).then(() => {
      refetch();
    });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // const handleOption = (e) => {
  //   e.preventDefault();
  //   const yes = e.target.yes.value;

  //   const report = e.target.report.value;
  //   const data = {
  //     yes,

  //     report,
  //   };
  //   console.log(data);
  // };

  const handleOptionChange = (e) => {
    console.log(e.target.value);
    setYesNo(e.target.value);
  };

  const name = user?.displayName;
  console.log(name);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(yesNo);

  //   const votedInfo = {
  //     email: user?.email,
  //     votedIn: yesNo,
  //   };
  //   console.log(votedInfo);
  //   axiosPublic.put(`/updateSurvey/${id}`, votedInfo).then((res) => {
  //     console.log(res.data);
  //     if (res.data.modifiedCount > 0) {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Voted Successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       refetch();
  //     }
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!yesNo) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please select an option.",
      });
    }

    try {
      e.preventDefault();
      console.log(yesNo);

      if (yesNo) {
        const votedInfo = {
          email: user?.email,
          votedIn: yesNo,
          name: user?.displayName || "Annonymous",
       
        };
        console.log(votedInfo);

        const res = await axiosPublic.put(`/updateSurvey/${id}`, votedInfo);

        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Voted Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          setViewChart(true);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
      const errorMessage = error?.response?.data?.message;

      Swal.fire({
        icon: "error",
        title: "Error",
        // text: `${errorMessage}`,
        text: "You have already voted.",
      });
    }
  };

  const handleReport = async (e) => {
    e.preventDefault();
    if (!report) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please write your report",
      });
    }
    try {
      // Assuming 'report' is a variable in the scope
      console.log(report);

      if (report) {
        const reportInfo = {
          message: report,
          email: user?.email,
        };

        // Assuming axiosPublic is an Axios instance
        const res = await axiosPublic.patch(
          `/surveys/report/${id}`,
          reportInfo
        );

        console.log(res.data);

        if (res.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your report submitted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Please write your report",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      const errorMessage = error?.response?.data?.message;

      // You can handle the error here, for example, show a user-friendly error message.
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: `${errorMessage}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();

    if (!comment) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please write your comment",
      });
    
    }
    try {
      // Assuming 'report' is a variable in the scope
      console.log(comment);

      if (comment) {
        const commentInfo = {
          message: comment,
          email: user?.email,
        };

        // Assuming axiosPublic is an Axios instance
        const res = await axiosPublic.patch(
          `/surveys/comment/${id}`,
          commentInfo
        );

        console.log(res.data);

        if (res.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your comment submitted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setComment('');
          refetchComment();

        }
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Please write your comment",
          showConfirmButton: false,
          timer: 1500,
        });
        refetchComment()
      }
    } catch (error) {
      console.error("An error occurred:", error);
      const errorMessage = error?.response?.data?.message;

      // You can handle the error here, for example, show a user-friendly error message.
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: `${errorMessage}`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetchComment()
    }
  };

  const isReportButtonDesable = () => {
    if (isSurveyor || isAdmin) {
      console.log(isAdmin, isSurveyor);
      if (isSurveyor && user) {
        return true;
      } else if (isAdmin && user) {
        return true;
      }
      return true;
    } else if (!user) {
      console.log(user);
      return true;
    }
    return false;
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="text-3xl font-bold text-[#2a5298] mb-4">
          Survey Details
        </h2>
        <h2 className="card-title">{title}</h2>
        <p className="text-base font-medium mb-5">{description}</p>
        <p className="text-base font-medium">
          Deadline:{" "}
          <span className="text-[#2a5298] font-semibold">{deadline}</span>
        </p>
        <p className="text-base font-medium">
          Survey Created At:{" "}
          <span className="text-[#2a5298] font-semibold">{timestamp}</span>
        </p>
        <p className="text-base font-medium">
          Survey Category:{" "}
          <span className="text-[#2a5298] font-semibold">{category}</span>
        </p>
        <p className="text-lg font-bold">{question}</p>
        <div className="border border-blue-300 p-8">
          <p className="text-base font-bold">
            Poll:{" "}
            <span className="text-[#2a5298] font-semibold">
              Do you want to participate in this survey?
            </span>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 mt-5">
              <label className="text-base font-medium">Yes</label>
              <input
                onChange={handleOptionChange}
                value="yes"
                type="radio"
                name="yes"
                className="radio"
                checked={yesNo === "yes"}
              />
              <button className="btn btn-xs rounded-lg bg-blue-950 text-white">
                Vote
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              <label className="text-base font-medium">No</label>
              <input
                onChange={handleOptionChange}
                value="no"
                type="radio"
                name="yes"
                className="radio"
                checked={yesNo === "no"}
              />
              <button className="btn btn-xs rounded-lg bg-blue-950 text-white">
                Vote
              </button>
            </div>

            <div>
              <button
                type="submit"
                disabled={isReportButtonDesable() || isDateExpired}
                className="btn rounded-lg bg-blue-950 text-white btn-sm mt-4"
              >
                Vote For Participate
              </button>

              {/* for yes no */}
              <div className="flex gap-4 justify-between">
                <p className="mt-5 my-8 text-base font-semibold">
                  Total Votes For Yes:{" "}
                  <span className="text-[#2a5298] font-bold">{survey?.yesVote}</span>
                </p>
                <p className="mt-5 my-8 text-base font-semibold">
                  Total Votes For No:{" "}
                  <span className="text-[#2a5298] font-bold">{survey?.noVote}</span>
                </p>
              </div>

              <p className="mt-5 my-8 text-base font-semibold">
                Grand Votes:{" "}
                <span className="text-[#2a5298] font-bold">{voted}</span>
              </p>

              {/* for yes no
              <div className="flex gap-4 justify-between">
                <p className="mt-5 my-8 text-base font-semibold">
                  Total Votes For Yes:{" "}
                  <span className="text-[#2a5298] font-bold"></span>
                </p>
                <p className="mt-5 my-8 text-base font-semibold">
                  Total Votes For No:{" "}
                  <span className="text-[#2a5298] font-bold"></span>
                </p>
              </div> */}
            </div>

            {/* <div className="card-actions flex justify-center mt-6">
                <button className="btn rounded-lg bg-blue-950 text-white ">
                  Submit Survey
                </button>
              </div> */}
          </form>

          <form onSubmit={handleReport}>
            <div className="mt-5">
              <label>Report Survey</label>
              <input
                placeholder="Report Here"
                className="border px-2 py-1 ml-3  bg-gray-300"
                value={report}
                onChange={(e) => setReport(e.target.value)}
                type="text"
                name="report"
                id=""
              />
            </div>

            <div className="card-actions flex justify-center mt-6">
              <button
                type="submit"
                disabled={isReportButtonDesable() || isDateExpired}
                className="btn rounded-lg bg-blue-950 text-white "
              >
                Send Report
              </button>
            </div>
          </form>
        </div>

        <div className="  text-center md:flex items-center">
          <div className="flex text-center  gap-4  ">
            <button
              disabled={isAdmin || isSurveyor || isDateExpired}
              onClick={() => {
                handleLike(id);
                setIsReact(true);
              }}
              className="btn"
            >
              <AiFillLike className="text-3xl"></AiFillLike>
              <div className="badge">{like}</div>
            </button>

            <button
              disabled={isAdmin || isSurveyor || isDateExpired}
              onClick={() => {
                handleDislike(id);
                setIsReact(true);
              }}
              className="btn"
            >
              <AiFillDislike className="text-3xl"></AiFillDislike>
              <div className="badge">{dislike}</div>
            </button>
          </div>
          {/* <div>
            <FaComment className="text-5xl"></FaComment>
          </div> */}
          {/* <form onSubmit={handleComment}>
            <div className="mb-6 mt-4 flex items-center">
              <input
                type="text"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="write your comment"
                className="block w-[300px] ml-4 p-4 wz-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md rounded-l-lg rounded-r-none"
                required
              />{" "}
              <button
                type="submit"
                disabled={isPro ? false : true}
                className={`rounded-r-lg text-white py-4 font-medium  px-3 ${
                  isPro ? "bg-blue-950" : "bg-gray-300"
                }`}
              >
                {isPro ? "Comment" : "Only Pro User Can Comment"}
              </button>
            </div>
          </form> */}
        </div>

        {/* for test */}

        {/* <p className="text-2xl font-bold my-5">Comments</p>

        {commentedData?.map((singleComment, index) => {
          return (
            <div className="flex gap-3 items-center" key={index}>
              <div>
                <>{singleComment.email}</>
              </div>
              <div>
                <input
                  type="text"
                  disabled
                  value={singleComment.message}
                  placeholder="Type here"
                  className="input rounded-lg input-bordered input-md w-full max-w-xs text-[#2a5298]"
                />
              </div>
            </div>
          );
        })} */}
      </div>

      <form  onSubmit={handleComment}>
        <div>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Comment
          </label>
          <div className="relative md:w-1/2 w-full mx-auto ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
            <input
              id="default-search"
              className="block w-full  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="write your comment"

              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Comment
            </button>
          </div>
        </div>
      </form>

      <p className="text-2xl font-bold my-5 text-center">Comments</p>

      {commentedSurveys?.map((singleComment, index) => {
        return (
          <div className="flex gap-3  justify-center items-center" key={index}>
            <div className="">
              <>{singleComment.email}</>
            </div>
            <div>
              <input
                type="text"
                disabled
                value={singleComment.message}
                placeholder="Type here"
                className="input mb-5 rounded-lg input-bordered input-md w-full max-w-xs text-[#2a5298]"
              />
            </div>
          </div>
        );
      })}

      <div className="flex justify-center">
        <DetailChart voted={survey}></DetailChart>
      </div>
    </div>
  );
};

export default SurveyDetail;
