import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../Hook/useAxiosOpen";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye } from "react-icons/fa";
import ReportRow from "./ReportRow";

const UserFeed = () => {
  const axiosSecure = useAxiosOpen();
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  function filterDataByEmail(emailToFilter, data) {
    // console.log(emailToFilter);
    // console.log(data)
    return data.filter((item) => item?.email === emailToFilter);
  }

  function getReports(feedbackArray) {
    const reports = [];

    feedbackArray.forEach((feedback) => {
      if (feedback.report && feedback.report.length > 0) {
        reports.push(...feedback.report);
      }
    });

    return reports;
  }

  function truncateString(inputString) {
    console.log(inputString);
    if (inputString?.length > 10) {
      return inputString.substring(0, 10) + "...";
    } else {
      return inputString;
    }
  }

  //   const { data: report = [] } = useQuery({
  //     queryKey: ["report"],
  //     queryFn: async () => {
  //       const res = await axiosSecure.get(`/surveys/report/${user?.email}`);

  //       return res.data;
  //     },
  //   });

  const { data: reportdata = [] } = useQuery({
    queryKey: ["reportdata"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/surveys`);
      const resdata = res?.data;
      // console.log(resdata)
      const filterData = filterDataByEmail(user?.email, resdata);
      // console.log(filterData)

      const GetFilterReports = getReports(filterData);

      return GetFilterReports;
    },
  });

  console.log(getReports(reportdata));

  return (
    <div>
      <h2 className="text-center text-2xl text-[#2a5298] font-bold my-10 mb-15">
        See All FeedBack From Users
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User Email</th>
              <th>User Feedback</th>
            </tr>
          </thead>
          <tbody>
            {reportdata?.map((report, index) => (
              <ReportRow
                key={index}
                index={index}
                report={report}
                truncateString={truncateString}
              ></ReportRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserFeed;
