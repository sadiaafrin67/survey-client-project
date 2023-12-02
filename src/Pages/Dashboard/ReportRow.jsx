import { FaEye } from "react-icons/fa";
import Modal from "./Modal";

const ReportRow = ({ index, report, truncateString }) => {
  return (
    <>
      <tr className="bg-base-200">
        <th>{index + 1}</th>
        <td>{report?.email}</td>
        <td>
          <div className="flex gap-3 items-center">
            <div className="self-center">
              {report && report?.message && truncateString(report?.message)}
            </div>
            {/* onClick={()=>document.getElementById('my_modal_1').showModal()} */}
            <div onClick={()=>document.getElementById('my_modal_1').showModal()} className="self-center">
              <FaEye></FaEye>
            </div>(Click to see full feedback)
              <Modal message={report.message}></Modal>
          </div>
        </td>

      </tr>
    </>
  );
};

export default ReportRow;
