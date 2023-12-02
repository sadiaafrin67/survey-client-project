import { FaEye } from "react-icons/fa";
import Modal from "./Modal";
import UserModal from "./UserModal";

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
            <div className="self-center">
             <UserModal  title={report?.message}><FaEye></FaEye></UserModal>
            </div>(Click to see full feedback)
              <Modal message={report.message}></Modal>
          </div>
        </td>

      </tr>
    </>
  );
};

export default ReportRow;
