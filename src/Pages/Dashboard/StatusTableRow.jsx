import StatusChange from "./Modal/StatusChange";


const StatusTableRow = ({surveyor, index, isOpen, setIsOpen, closeModal, openModal}) => {
    return (
        <>
        
            <tr className="bg-gray-100">
        <th className="">{index + 1}</th>
        <td className="font-semibold">{surveyor.title}</td>
        <td className="font-semibold">{surveyor.status ? "Published" : "Unpublished"}</td>
        <td><button className="btn bg-blue-950 text-white rounded-lg btn-sm">Publish</button></td>
        <td><button onClick={openModal} className="btn bg-blue-950 text-white rounded-lg btn-sm">Unpublish</button></td>
      </tr>
      <StatusChange isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal}></StatusChange>
        </>
    );
};

export default StatusTableRow;