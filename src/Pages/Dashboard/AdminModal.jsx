

const AdminModal = ({feedback}) => {
    console.log(feedback)
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Admin Feedback</h3>
          <p className="py-4">
          {feedback}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
        </div>
    );
};

export default AdminModal;