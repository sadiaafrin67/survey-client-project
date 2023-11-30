import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";


const StatusChange = ({closeModal, isOpen}) => {



    const handleStatusChange = e => {
        e.preventDefault();
        const feedback = e.target.feedback.value;
        const status = e.target.status.value;
        const data = {
            feedback,
            status
        }
        console.log(data)
    }

    return (
        <>
             <>
     

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleStatusChange}>
                        <input   
                        className="block  mx-auto p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md  " name='feedback' 
                        type="text" 
                        placeholder="Feedback" 
                        id="" />
                    <select name="status">
                        <option  value="true">Publish</option>
                        <option  value="false">Unpublish</option>
                    </select>
                    <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Send Feedback
                    </button>
                  </div>
                    </form>
                  </div>

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
        </>
    );
};

export default StatusChange;